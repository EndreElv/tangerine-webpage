# Tangerine marketing site

Production [Astro](https://astro.build) build of the Tangerine® marketing site,
ported from the design-system prototype in [`reference/`](reference/).

Tangerine is an open-source, offline-first data-collection platform for education.
This repo is the public marketing website, backed by the Tangerine design system
(tokens, fonts, and components carried over from the prototype).

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # static output → dist/
npm run preview  # serve the built site locally
```

## Deploy

Auto-deploys to Vercel on push to `main`. Static output, no server.

## Layout

```
src/
  data/        # page content as typed TS modules
  components/   # design-system components (.astro)
  layouts/      # BaseLayout, Nav, Footer
  pages/        # one file per route
  styles/       # design tokens, component CSS, marketing CSS
public/assets/  # fonts, logos, imagery, illustrations
reference/      # original prototype + HANDOFF.md (not built)
docs/plans/     # design doc
```

See [`docs/plans/2026-06-05-tangerine-astro-design.md`](docs/plans/2026-06-05-tangerine-astro-design.md)
for the full design and decisions, and [`reference/HANDOFF.md`](reference/HANDOFF.md)
for the original design spec and fidelity notes.

## Status / follow-ups

- Contact and free-trial forms currently show a success state but **do not send
  anywhere yet** — wire to a real endpoint/CRM before promoting the URL publicly.
- `site` in `astro.config.mjs` should be set to the production URL once known.
