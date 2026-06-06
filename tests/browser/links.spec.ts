import { test, expect } from '@playwright/test';
import { ROUTES } from '../../src/data/nav.ts';

// Internal-link integrity (R5): visit every route, collect every internal
// (/...) link, and assert each resolves (<400) on the served build. Catches a
// link to a renamed/deleted/typo'd route before it ships. External links are
// out of scope (flaky); add an online lychee pass later if wanted.
const PAGES = [...new Set(Object.values(ROUTES)), '/help/getting-started'];

test('internal links resolve', async ({ page, request, baseURL }) => {
  const broken: string[] = [];
  const checked = new Map<string, true>();

  for (const path of PAGES) {
    await page.goto(path);
    const hrefs = await page.$$eval('a[href^="/"]', (els) =>
      els.map((a) => a.getAttribute('href') || '').filter(Boolean),
    );
    for (const href of hrefs) {
      const url = href.split('#')[0];
      if (!url || checked.has(url)) continue;
      checked.set(url, true);
      const res = await request.get((baseURL ?? '') + url);
      if (res.status() >= 400) broken.push(`${url} -> ${res.status()} (linked from ${path})`);
    }
  }

  expect(broken, `Broken internal links:\n${broken.join('\n')}`).toEqual([]);
  expect(checked.size, 'expected to check at least a dozen internal links').toBeGreaterThan(10);
});
