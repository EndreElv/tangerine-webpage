/**
 * Error sources. Synthetic (Playwright) is the reliable primary signal; Vercel
 * runtime logs are best-effort secondary. Both fail safe (return []) so a flaky
 * source can never break the loop.
 */
import { chromium } from '@playwright/test';
import type { ErrorEvent } from './signature.ts';

const PROD_URL = process.env.MONITOR_URL || 'https://tangerine-webpage.vercel.app';
const ROUTES = (process.env.MONITOR_ROUTES || '/,/about,/impact,/get-tangerine,/help').split(',');

/**
 * Visit key prod routes in a real browser and collect uncaught errors: page
 * exceptions, console errors, and HTTP >= 500. This is how we catch in-browser
 * JS crashes without a client error-tracking SaaS.
 */
export async function syntheticErrors(): Promise<ErrorEvent[]> {
  const events: ErrorEvent[] = [];
  const browser = await chromium.launch();
  try {
    for (const route of ROUTES) {
      const url = new URL(route.trim(), PROD_URL).href;
      const page = await browser.newPage();
      page.on('pageerror', (err) =>
        events.push({ source: 'synthetic', type: 'pageerror', message: err.message, route }));
      page.on('console', (msg) => {
        if (msg.type() === 'error')
          events.push({ source: 'synthetic', type: 'console.error', message: msg.text(), route });
      });
      const resp = await page
        .goto(url, { waitUntil: 'networkidle', timeout: 30000 })
        .catch((e) => {
          events.push({ source: 'synthetic', type: 'navigation_failed', message: String(e), route });
          return null;
        });
      if (resp && resp.status() >= 500)
        events.push({
          source: 'synthetic',
          type: `http_${resp.status()}`,
          message: `HTTP ${resp.status()} on ${route}`,
          route,
        });
      await page.waitForTimeout(1500); // let deferred JS run
      await page.close();
    }
  } finally {
    await browser.close();
  }
  return events;
}

/**
 * Vercel runtime logs (secondary source). Uses the documented per-deployment
 * runtime-logs endpoint: resolve the current READY production deployment, then
 * read its runtime logs and keep error/fatal level or HTTP >= 500.
 *
 * Validated against the live SignLab project — note a *static* site emits
 * essentially no runtime logs (functions/edge only), so synthetic is the real
 * signal; this just covers the case where functions/edge are added later.
 * Bounded by a timeout and fails safe to [] so it can never stall the loop.
 * Ref: https://vercel.com/docs/rest-api/logs/get-logs-for-a-deployment
 */
export async function vercelErrors(): Promise<ErrorEvent[]> {
  const token = process.env.VERCEL_TOKEN;
  const projectId = process.env.VERCEL_PROJECT_ID;
  if (!token || !projectId) return [];
  const auth = { Authorization: `Bearer ${token}` };
  const teamQ = process.env.VERCEL_TEAM_ID ? `&teamId=${process.env.VERCEL_TEAM_ID}` : '';

  try {
    // 1. Current production deployment.
    const depRes = await fetch(
      `https://api.vercel.com/v6/deployments?projectId=${projectId}&target=production&state=READY&limit=1${teamQ}`,
      { headers: auth },
    );
    if (!depRes.ok) {
      console.warn(`monitor: Vercel deployments ${depRes.status} — skipping Vercel source.`);
      return [];
    }
    const deploymentId = ((await depRes.json()) as { deployments?: { uid: string }[] }).deployments?.[0]?.uid;
    if (!deploymentId) return [];

    // 2. Runtime logs for that deployment (a stream — bound it with a timeout).
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 12000);
    let text: string;
    try {
      const logRes = await fetch(
        `https://api.vercel.com/v1/projects/${projectId}/deployments/${deploymentId}/runtime-logs?teamId=${process.env.VERCEL_TEAM_ID ?? ''}`,
        { headers: auth, signal: ctrl.signal },
      );
      if (!logRes.ok) {
        console.warn(`monitor: Vercel runtime-logs ${logRes.status} — skipping Vercel source.`);
        return [];
      }
      text = await logRes.text();
    } finally {
      clearTimeout(timer);
    }

    // NDJSON rows; documented fields: level, message, requestPath, responseStatusCode, ...
    const rows = text
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean)
      .map((l) => {
        try {
          return JSON.parse(l) as Record<string, unknown>;
        } catch {
          return null;
        }
      })
      .filter((r): r is Record<string, unknown> => r !== null);

    return rows
      .filter((r) => ['error', 'fatal'].includes(String(r.level)) || Number(r.responseStatusCode) >= 500)
      .map((r) => {
        const status = Number(r.responseStatusCode);
        return {
          source: 'vercel' as const,
          type: status >= 500 ? `http_${status}` : `vercel_${String(r.level)}`,
          message: String(
            r.message || `${r.requestMethod ?? ''} ${r.requestPath ?? ''} → ${r.responseStatusCode ?? ''}`,
          ).trim(),
          route: r.requestPath as string | undefined,
          raw: r,
          occurredAt: r.timestampInMs ? new Date(Number(r.timestampInMs)).toISOString() : undefined,
        };
      });
  } catch (e) {
    const err = e as Error;
    if (err.name === 'AbortError') console.warn('monitor: Vercel runtime-logs timed out — skipping.');
    else console.warn('monitor: Vercel logs failed —', err.message);
    return [];
  }
}
