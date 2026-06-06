# Content map

Route inventory and where each page's content comes from. Routes resolve
through `src/data/nav.ts` (`ROUTES` + `href()`); derive lists from there rather
than hardcoding.

| Route | Page file | Content source |
|---|---|---|
| `/` | `src/pages/index.astro` | `src/data/home.ts`, stats from `src/data/facts.ts` |
| `/tangerine`, `/tangerine-teach`, `/tangerine-coach`, `/tangerine-acuity` | `src/pages/[product].astro` | `TG_PRODUCTS` in `src/data/content.ts` |
| `/impact` | `src/pages/impact.astro` | inline + stats from `src/data/facts.ts` |
| `/user-stories` | `src/pages/user-stories.astro` | `TG_STORIES` in `src/data/content.ts` |
| `/faqs` | `src/pages/faqs.astro` | `TG_FAQS` in `src/data/content.ts` |
| `/about` | `src/pages/about.astro` | `TG_TEAM`, `TG_PRINCIPLES` in `src/data/content.ts` |
| `/contact` | `src/pages/contact.astro` | inline (form is a visual-only stub) |
| `/help` | `src/pages/help.astro` | `TG_HELP` keys in `src/data/content.ts` |
| `/help/<slug>` | `src/pages/help/[slug].astro` | `TG_HELP` in `src/data/content.ts` |
| `/get-tangerine` | `src/pages/get-tangerine.astro` | `TG_PRICING` in `src/data/content.ts` (prices), `SUB_BENEFITS` inline |

## Facts (source-of-truth — `src/data/facts.ts`)

- **Stats**: `countries` (65+), `languages` (100+), `organizations` (80+),
  `assessments` (5M+). Rendered on `/` and `/impact`.
- **Prices**: derived from `TG_PRICING` (Free, Member $3,500, Premium $5,000,
  Pro $6,000, Custom). Rendered on `/get-tangerine`.
- **Trademark**: `Tangerine®` (registered form for titles/hero/product name),
  RTI legal line (footer).

Changing any fact value is a CODEOWNER-gated edit; the content gate
(`tests/content-truth.ts`) checks the built HTML against this file.
