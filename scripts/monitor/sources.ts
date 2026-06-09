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
 * Vercel runtime logs (best-effort secondary source).
 *
 * NOTE: Vercel's runtime-log API surface varies by plan/version. Validate this
 * endpoint against current Vercel docs before relying on it, or swap for a Log
 * Drain. Returns [] on any failure so a wrong endpoint can't break the loop.
 */
export async function vercelErrors(): Promise<ErrorEvent[]> {
  const token = process.env.VERCEL_TOKEN;
  const projectId = process.env.VERCEL_PROJECT_ID;
  if (!token || !projectId) return [];

  const team = process.env.VERCEL_TEAM_ID ? `?teamId=${process.env.VERCEL_TEAM_ID}` : '';
  const url = `https://api.vercel.com/v1/projects/${projectId}/logs${team}`; // TODO: verify against vercel.com/docs
  try {
    const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
    if (!res.ok) {
      console.warn(`monitor: Vercel logs ${res.status} — skipping Vercel source.`);
      return [];
    }
    const data = (await res.json()) as Record<string, unknown>;
    const rows = (Array.isArray(data) ? data : (data.logs ?? data.events ?? [])) as Array<
      Record<string, unknown>
    >;
    return rows
      .filter((r) => /error|fatal/i.test(String(r.level ?? r.type ?? '')))
      .map((r) => ({
        source: 'vercel' as const,
        type: `vercel_${String(r.level ?? r.type ?? 'error')}`,
        message: String(r.message ?? r.text ?? ''),
        route: (r.path ?? r.requestPath) as string | undefined,
        raw: r,
        occurredAt: r.timestamp as string | undefined,
      }));
  } catch (e) {
    console.warn('monitor: Vercel logs fetch failed —', (e as Error).message);
    return [];
  }
}
