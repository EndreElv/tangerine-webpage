import { test, expect } from '@playwright/test';

// Visual-regression gate (U13/KTD8): catches layout breaks that keep elements
// present (so smoke passes) and throw no JS error (so monitoring stays quiet) —
// the failure class with no other detector on a marketing site.
//
// Diffs against COMMITTED baselines, never live prod. Baselines must be
// generated in the CI Linux environment (`playwright test --update-snapshots`)
// and committed — macOS-generated baselines won't match CI. Until baselines are
// committed, the CI `visual` job runs continue-on-error (see docs/agent/pipeline-setup.md).
const PAGES = ['/', '/get-tangerine', '/tangerine', '/impact', '/about', '/help/getting-started'];

for (const path of PAGES) {
  test(`visual: ${path}`, async ({ page }) => {
    await page.goto(path);
    // Freeze animations/transitions so screenshots are deterministic.
    await page.addStyleTag({ content: '*,*::before,*::after{animation:none!important;transition:none!important;caret-color:transparent!important}' });
    await expect(page).toHaveScreenshot(`${path.replace(/\//g, '_') || '_home'}.png`, {
      fullPage: true,
      mask: [page.locator('iframe')], // third-party embeds (YouTube) vary
    });
  });
}
