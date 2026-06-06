import { test, expect } from '@playwright/test';

// Post-deploy smoke (U8/R10): the sole automatic rollback trigger. Runs against
// the live deployment. Per-route critical-element map (pages differ). Tolerates
// the forms' intentional preventDefault and ignores third-party console noise.
const CHECKS: { path: string; selectors: string[] }[] = [
  { path: '/', selectors: ['.mk-nav', '.mk-hero', '.tg-stat', '.mk-foot'] },
  { path: '/get-tangerine', selectors: ['.mk-nav', '.mk-tier', '.mk-tier__price', '.mk-foot'] },
  { path: '/tangerine', selectors: ['.mk-nav', '.mk-prod-hero', '.mk-foot'] },
  { path: '/impact', selectors: ['.mk-nav', '.tg-stat', '.mk-foot'] },
  { path: '/help/getting-started', selectors: ['.mk-nav', '.mk-article', '.mk-foot'] },
  { path: '/contact', selectors: ['.mk-nav', '#contact-form', '.mk-foot'] },
];

const THIRD_PARTY = /youtube|youtu\.be|google|gstatic|doubleclick|favicon/i;

for (const { path, selectors } of CHECKS) {
  test(`smoke: ${path}`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(String(e)));
    page.on('console', (m) => {
      if (m.type() === 'error') errors.push(m.text());
    });

    const res = await page.goto(path, { waitUntil: 'domcontentloaded' });
    expect(res?.status(), `${path} HTTP status`).toBeLessThan(400);

    for (const sel of selectors) {
      await expect(page.locator(sel).first(), `${path} missing ${sel}`).toBeVisible();
    }

    const ownErrors = errors.filter((e) => !THIRD_PARTY.test(e));
    expect(ownErrors, `${path} page-origin console errors:\n${ownErrors.join('\n')}`).toEqual([]);
  });
}
