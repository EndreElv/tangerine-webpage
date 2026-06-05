# Design: Tangerine marketing site → Astro on Vercel

**Date:** 2026-06-05
**Status:** Approved, in build
**Source of truth for content/fidelity:** `reference/HANDOFF.md`

## Goal

Take the high-fidelity prototype in `reference/` (HTML + React-via-Babel, loaded
from a CDN, transpiled in the browser) and ship it as a real production website:
precompiled, fast, SEO-friendly, on Vercel with auto-deploy.

## Decisions (locked)

| Decision | Choice | Why |
|---|---|---|
| Framework | **Astro 5, static output** | ~95% static content; ships zero JS by default; trivial static deploy. HANDOFF's recommended choice. |
| Content | **Typed TS data modules** in `src/data/` | Prototype content is already data-shaped (`TG_PRODUCTS`, `TG_FAQS`, …). Fastest, type-safe, 1:1 fidelity. Can graduate to Markdown collections later without re-architecting. |
| Interactivity | **Tiny vanilla-JS islands** in `<script>` tags | Nav dropdowns + mobile menu, FAQ accordion, form success states, smooth-scroll. No client UI framework needed. |
| Forms | **Visual-only for first ship** | Keep the success-state UX; no backend yet. FLAGGED: must wire to a real endpoint before promoting the URL publicly, or leads are lost. |
| Hosting | **GitHub (EndreElv/tangerine-webpage, public) + Vercel** | Auto-deploy on push to `main`; matches HANDOFF's "git push → auto-build". |

## Architecture

Pure static. Tokens and fonts are carried over verbatim (HANDOFF says these are
production-ready). Design-system component CSS was extracted verbatim from the
prototype's injected `<style>` blocks into `src/styles/components.css`.

```
/ (git root → deployed by Vercel)
├─ astro.config.mjs, package.json, tsconfig.json
├─ src/
│  ├─ data/        # content.jsx → typed TS (products, faqs, team, pricing, help, nav…)
│  ├─ components/  # Button, IconButton, Card, Stat, Badge, Tag, Avatar, Input, Textarea (.astro)
│  ├─ layouts/     # BaseLayout (+ <head>, global CSS) , Nav, Footer
│  ├─ pages/       # one file per route (13 routes)
│  └─ styles/      # tokens/*.css, components.css, marketing.css, global.css
├─ public/assets/  # logos, imagery, illustrations, product-icons, product-logos, partners, team, fonts
└─ reference/      # original prototype + HANDOFF.md — kept for reference, NOT built
```

CSS load order (via `global.css`, imported once in `BaseLayout`):
`tokens/fonts → colors → typography → spacing → base` → `components.css` → `marketing.css`.
Font `@font-face` URLs rewritten from `../assets/fonts/` to absolute `/assets/fonts/`.

## Routes (13 — exact from HANDOFF site map)

| Route | Page | Source |
|---|---|---|
| `/` | Home | `Home.jsx` |
| `/tangerine` `/tangerine-teach` `/tangerine-coach` `/tangerine-acuity` | Product pages | `ProductPage.jsx` + `TG_PRODUCTS` |
| `/impact` | Impact | `Resources.jsx → ImpactPage` |
| `/user-stories` | User Stories | `Resources.jsx → UserStoriesPage` |
| `/faqs` | FAQs | `Resources.jsx → FaqsPage` + `TG_FAQS` |
| `/about` | About | `Support.jsx → AboutPage` + `TG_TEAM`, `TG_PRINCIPLES` |
| `/contact` | Contact | `Support.jsx → ContactPage` |
| `/help` | Help index | `Support.jsx → HelpPage` + `TG_HELP` |
| `/help/[slug]` | Help article | `Support.jsx → HelpArticlePage` |
| `/get-tangerine` | Pricing | `TrialPage.jsx` + `TG_PRICING` |

Prototype routing was a single `page` state + `go(key)`. In production these become
real files/URLs; nav uses real `<a href>`; scroll-to-top is the browser default.

## Interactivity islands

- **Nav**: hover/focus dropdowns (Products, Resources, Support) + mobile hamburger menu (prototype omitted mobile; we add it). Keyboard accessible (focus-within + Esc).
- **FAQ**: single-open accordion (`<details>`-based or class toggle).
- **Contact / Trial forms**: submit → swap to success panel (no network). Trial CTAs smooth-scroll to the form.

## Phases

1. Scaffold + design system + Home, verify local build.
2. Deploy pipeline: git → GitHub → Vercel (live URL exists).
3. Product pages (4).
4. Resource pages (Impact, User Stories, FAQs).
5. Support pages (About, Contact, Help index + articles).
6. Pricing + full pixel/parity QA across all 13 routes.

## Known follow-ups (not in first ship)

- Wire Contact + Trial forms to a real endpoint/CRM.
- Set `site` in `astro.config.mjs` to the production URL; add sitemap + meta/OG tags.
- Verify "representative" copy (Impact, User Stories, Help) with content owners before public launch (per HANDOFF §Fidelity).
