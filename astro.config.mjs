// @ts-check
import { defineConfig } from 'astro/config';

// Tangerine marketing site — pure static output.
// No SSR adapter: Vercel auto-detects Astro and serves the built `dist/`
// off its CDN. Interactivity is small vanilla-JS islands inside .astro files,
// so no UI-framework integration is needed.
export default defineConfig({
  // `site` is set after the first Vercel deploy gives us the production URL.
  // It powers canonical URLs / sitemap; safe to fill in later.
  // site: 'https://tangerine-webpage.vercel.app',
  output: 'static',
  build: {
    format: 'directory',
  },
});
