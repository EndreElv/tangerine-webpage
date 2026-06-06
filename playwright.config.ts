import { defineConfig, devices } from '@playwright/test';

// Browser gates that run against the built site served by `astro preview`
// (a11y via axe-core, visual regression via toHaveScreenshot). Smoke against a
// live URL uses playwright.smoke.config.ts instead. In CI these run inside the
// pinned Playwright container so rendering (and visual baselines) match.
// Port 4322 avoids colliding with a running `astro dev` on 4321.
export default defineConfig({
  testDir: './tests/browser',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: process.env.CI ? [['github'], ['list']] : 'list',
  use: { baseURL: 'http://localhost:4322' },
  expect: { toHaveScreenshot: { maxDiffPixelRatio: 0.01 } },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: 'npm run preview -- --port 4322 --host',
    url: 'http://localhost:4322',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
