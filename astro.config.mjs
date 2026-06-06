// @ts-check
import { defineConfig } from 'astro/config';

// Tangerine marketing site — pure static output.
// No SSR adapter: Vercel auto-detects Astro and serves the built `dist/`
// off its CDN. Interactivity is small vanilla-JS islands inside .astro files,
// so no UI-framework integration is needed.
export default defineConfig({
  // Production URL — powers canonical URLs, OG tags, and sitemap.
  site: 'https://tangerine-webpage.vercel.app',
  output: 'static',
  build: {
    format: 'directory',
  },
});
