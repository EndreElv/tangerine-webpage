import { defineConfig, devices } from '@playwright/test';

// Post-deploy smoke runs against a LIVE deployment URL (no local server).
// SMOKE_URL is set by CI to the Vercel deployment URL; defaults to production.
export default defineConfig({
  testDir: './tests/smoke',
  retries: process.env.CI ? 2 : 0, // tolerate transient network blips on a live URL
  reporter: process.env.CI ? [['github'], ['list']] : 'list',
  use: { baseURL: process.env.SMOKE_URL || 'https://tangerine-webpage.vercel.app' },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
