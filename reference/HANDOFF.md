# Handoff: Tangerine marketing site + design system

## Overview
This package contains the **Tangerine** brand design system and a full
recreation of the marketing website (tangerinecentral.org) built against it.
Tangerine is an open-source, offline-first data-collection platform for
education. The goal of this handoff is to stand up the marketing site as a
**production web app**, backed by a reusable design-system layer that the
Tangerine product apps can share later.

Target outcome (the path chosen in the design conversation):
**port these designs into a real framework and deploy a static build** — Astro
or Next.js (static export) on Vercel / Netlify / Cloudflare Pages.

---

## About the design files
The files in this bundle are **design references created in HTML/React-via-Babel**
— prototypes that show the intended look, content, and behavior. They are **not
production code to copy verbatim.** They use in-browser Babel, CDN *development*
builds of React, and a generated runtime bundle (`_ds_bundle.js`) — none of which
belong in production.

Your task is to **recreate these designs in a real codebase** using a proper
build pipeline and the project's established patterns. Because there is no
existing production frontend yet, the recommendation is **Astro** (ideal for a
mostly-static, content-driven marketing site) or **Next.js with static export**.
Either gives precompiled JS, production React, real URLs per page, and SEO.

The **tokens** (`styles.css` + `tokens/*.css`) and **fonts** (`assets/fonts/*.woff2`)
*are* production-ready and should be carried over directly. The React components
in `components/` are clean, dependency-free references — re-implement them in your
framework (they intentionally avoid CSS-in-JS and external libs).

---

## Fidelity
**High-fidelity (hifi).** Colors, typography, spacing, radii, shadows, copy, and
interactions are final. Recreate the UI pixel-for-pixel using the tokens provided.
All copy on Home, the four product pages, FAQs, About, and the Pricing page is
**verbatim from tangerinecentral.org**; the Impact, User Stories, and Help pages
are assembled from real facts and the two real featured stories but are
representative rather than verbatim (flag with content owners before launch).

---

## Recommended architecture

```
tangerine-web/                      # new repo
├─ src/
│  ├─ styles/
│  │   ├─ tokens/                   # copy tokens/*.css verbatim
│  │   └─ global.css                # = styles.css (the @import manifest)
│  ├─ components/                   # port components/* (Button, Card, …)
│  ├─ layouts/                      # Nav + Footer shell
│  ├─ pages/                        # one route per page (see Site map)
│  └─ content/                      # page copy as data (MD/JSON/CMS)
├─ public/assets/                   # copy assets/* (fonts, logos, imagery)
└─ astro.config / next.config
```

- **Routing:** the prototype fakes routing with a single `page` state string.
  In production each becomes a real route (see Site map for the URL map).
- **Content:** the prototype hard-codes copy in `content.jsx` / per-page files.
  Move this into MDX/JSON or a CMS so non-devs can edit. Structure is already
  data-shaped (`TG_PRODUCTS`, `TG_FAQS`, `TG_TEAM`, `TG_PRICING`, `TG_HELP`).
- **Deploy:** Git push → auto-build → static CDN (Vercel/Netlify/Cloudflare).

---

## Design tokens
All tokens are CSS custom properties in `tokens/` and surfaced via `styles.css`.
Use these names; do not hard-code values.

### Color — brand
| Token | Hex | Use |
|---|---|---|
| `--tangerine-500` | `#F05424` | Primary brand (base) |
| `--tangerine-600` | `#DD431A` | Hover |
| `--tangerine-700` | `#B23414` | Pressed |
| `--tangerine-50` | `#FFF3EE` | Soft brand surface / tints |
| `--gold-400` | `#FCB40C` | Accent (gradient endpoint) |
| `--gold-300` | `#FCCB44` | Accent light |
| `--rind-400` | `#E6E36A` | Citrus-rind accent (sparingly) |

Signature gradients: `--gradient-brand` (90° tangerine→gold, the wordmark
effect), `--gradient-brand-diag` (135°), `--gradient-sunrise` (vertical).

### Color — warm neutrals (never blue-gray)
`--neutral-0 #FFFFFF`, `50 #FBF8F6`, `100 #F5F0EC`, `200 #E9E1DA`,
`300 #D6CABF`, `400 #B0A398`, `500 #847669`, `600 #5F544A`, `700 #443B34`,
`800 #2A2420`, `900 #181411`.

### Semantic aliases (prefer these in components)
`--surface-page`, `--surface-card`, `--surface-sunken`, `--surface-brand`;
`--text-strong`, `--text-body`, `--text-muted`, `--text-subtle`,
`--text-on-brand`, `--text-link`; `--border-subtle/default/strong/brand`;
`--action-bg/-hover/-active/-fg/-ring`; status sets
`--status-{success,warning,error,info}{,-bg,-fg}`.

### Type
- Families: `--font-display` = **Baloo 2** (headings, product names, big stats,
  echoes the logo wordmark); `--font-sans` = **Mulish** (UI + body);
  `--font-mono` = **Roboto Mono** (data, metadata, IDs).
- Weights: `--fw-light 300 … --fw-extra 800`.
- Scale (`--text-*`): 2xs .6875rem, xs .75, sm .875, md 1 (base), lg 1.125,
  xl 1.375, 2xl 1.75, 3xl 2.25, 4xl 3, 5xl 3.75, 6xl 4.75rem.
- Line height: `--leading-tight 1.1 / snug 1.25 / normal 1.5 / relaxed 1.65`.
- Tracking: `--tracking-tight -0.02em … --tracking-caps 0.08em`.
- Headings are **sentence case**, tight tracking. Eyebrows are uppercase,
  `--tracking-caps`, tangerine-600, via the `.tg-eyebrow` helper.

### Spacing — 4px grid
`--space-1 4px … --space-12 112px` (1=4, 2=8, 3=12, 4=16, 5=24, 6=32, 7=40,
8=48, 9=64, 10=80, 12=112). Containers: `--container-sm 640 / md 960 / lg 1200
/ xl 1320`.

### Radius (rounded, friendly)
`--radius-xs 4 / sm 8 / md 12 / lg 16 / xl 24 / 2xl 32 / pill 999px`.
Buttons are fully **pill**; cards `--radius-lg`; inputs `--radius-md`.

### Shadows (warm brown-tinted, never gray)
`--shadow-xs … --shadow-xl` using `rgba(60,30,12,…)`; plus `--shadow-brand`
(`0 10px 24px rgba(240,84,36,.30)` — the primary-button glow) and
`--shadow-inset`.

### Motion
`--dur-fast 120ms / base 200ms / slow 320ms`; `--ease-out`, `--ease-in-out`,
`--ease-spring`. Hover = lift / darken; press = `translateY(1px)` / darkest.
No infinite decorative loops. Respect `prefers-reduced-motion`.

---

## Components (re-implement from `components/`)
Each is a clean, prop-driven, dependency-free React reference with a `.d.ts`
contract and a `.prompt.md` usage note. Re-create with the same prop API.

| Component | Key props | Notes |
|---|---|---|
| `Button` | `variant: primary\|accent\|secondary\|ghost`, `size: sm\|md\|lg`, `block`, `iconLeft/Right`, `as` | Pill; primary carries `--shadow-brand` glow |
| `IconButton` | `variant: ghost\|soft\|solid`, `size`, `label` (required a11y) | Circular |
| `Input` | `label`, `required`, `helpText`, `error`, `iconLeft/Right` | Focus ring = `--action-ring` |
| `Checkbox` | `label`, `description`, `round` | Spring pop on check |
| `Badge` | `tone: neutral\|brand\|accent\|success\|warning\|error\|info`, `solid`, `dot` | Pill status |
| `Tag` | `selected`, `onClick`, `onRemove` | Filter chip |
| `Avatar` | `src`, `name` (→ initials), `size: sm\|md\|lg\|xl`, `ring` | Initials on brand gradient |
| `Card` | `elevation: flat\|raised`, `interactive`, `accentTop`, `media`, `padded` | Signature 4px tangerine top-accent; hover lift |
| `Stat` | `value`, `label`, `delta`, `trend`, `size`, `gradient` | Big-number metric; `gradient` paints value with brand gradient |

---

## Site map (prototype state key → production route)
| Page | Prototype `go(...)` key | Suggested URL |
|---|---|---|
| Home | `home` | `/` |
| Tangerine® | `p-tangerine` | `/tangerine` |
| Tangerine:Teach | `p-teach` | `/tangerine-teach` |
| Tangerine:Coach | `p-coach` | `/tangerine-coach` |
| Tangerine:Acuity | `p-acuity` | `/tangerine-acuity` |
| Impact | `impact` | `/impact` |
| User Stories | `user-stories` | `/user-stories` |
| FAQs | `faqs` | `/faqs` |
| About | `about` | `/about` |
| Contact | `contact` | `/contact` |
| Help (index) | `help` | `/help` |
| Help article | `help/<slug>` | `/help/<slug>` |
| Get Tangerine (Pricing) | `trial` | `/get-tangerine` |

---

## Screens / Views

### Global chrome
- **Nav** (`Nav.jsx`): sticky, translucent white (`rgba(255,255,255,.92)` +
  `backdrop-filter: blur(10px)`), 1px bottom border `--border-subtle`. Logo left
  (44px tall), nav items right with hover-revealed dropdown menus (Products,
  Resources, Support), then a primary pill **Get Started** button. Max width
  `--container-xl`, padding `12px var(--space-6)`.
- **Footer** (`Footer.jsx`): `--neutral-900` bg, 4-col grid (brand blurb +
  Products / Resources / Support link columns), logo, then a legal bar with the
  RTI trademark line. Link hover → `--gold-300`.

### Home (`Home.jsx`)
- **Hero**: full-bleed photo (`assets/imagery/hero-overlay.png`) with a
  left-weighted brown scrim (`linear-gradient(90deg, rgba(40,18,8,.82) → .15)`).
  Baloo 2 6xl headline "Actionable insights, anywhere.", gold-300 subhead, body,
  primary "Get Tangerine" CTA. Min-height 560px.
- **Product suite**: 3 `Card`s (`raised` + `accentTop`), each a product icon
  (64px), name, 3 bullet points, "Explore … →" link.
- **Feature trio**: 3 spot illustrations (global/cloud/brain, 120px) + heading +
  body, centered.
- **Impact band**: `--gradient-brand-diag` full-width, three `Stat`s (white) —
  100+ languages, 60+ countries, 80+ organizations.
- **User stories**: 2 interactive `Card`s. **Community**: 8 partner logos in a
  4-col grid of bordered tiles. **CTA band**: tangerine-50, accent button.

### Product pages (`ProductPage.jsx`, data in `content.jsx → TG_PRODUCTS`)
Data-driven. Each: breadcrumb (`HOME > PRODUCTS > NAME`), centered hero (product
wordmark logo + Baloo h1 + optional `Badge`, e.g. Acuity's "Available globally
early 2026" + lead paragraphs), then a sequence of **blocks**:
- `feature` — alternating two-column text/image rows (`reverse` flips side);
  image in a `raised` Card; optional caption + CTA.
- `feature` + `wide` — full-width screenshot under a centered heading (Tangerine
  task report).
- `modules` — 3 `Card`s with media (Reading / Math / School Surveys).
- `video` — 16:9 YouTube embed (`https://www.youtube.com/embed/<id>`), shadow-lg.
  Sections alternate white / `--surface-page`. Closes with a CTA band.

### Impact (`Resources.jsx → ImpactPage`)
Brand-gradient page hero; 4 gradient `Stat`s (5M+, 65+, 80+, 100+); a 2-col
split (global illustration + prose); partner wall.

### User Stories (`Resources.jsx → UserStoriesPage`)
Page hero; 2 story `Card`s (org `Badge`, balanced title, body, mono tag,
"Continue Reading →"); CTA. **Card body must be `display:flex; flex-direction:
column; gap` so multi-line Baloo headings never overlap body** (learned fix).

### FAQs (`Resources.jsx → FaqsPage`, data `TG_FAQS`)
Page hero; **9 categories**, each a `mk-faq-group` (title with tangerine
underline) containing accordion rows. One row open at a time (state = `"<g>-<i>"`).
Closed row shows `+`, open shows `−` in a circular tangerine chip. Narrow column
(820px).

### About (`Support.jsx → AboutPage`, data `TG_TEAM`, `TG_PRINCIPLES`)
Hero "What is Tangerine Central?"; 3 principle `Card`s (`accentTop`); a 2-col
story block ("From paper to progress") with a gradient **belief quote**; a 3-col
**team grid** of 6 members (portrait, name, role in tangerine-600, bio, LinkedIn);
podcast callout `Card`; CTA. Team-member card body is flex-column to avoid the
heading-overlap pitfall.

### Contact (`Support.jsx → ContactPage`)
Hero; 2-col: a `Card` form (name, email, org, textarea) that swaps to a success
state on submit, plus an aside with a "Get Tangerine" accent CTA and social
links (YouTube, X, LinkedIn).

### Help index (`Support.jsx → HelpPage`, data `TG_HELP`)
Hero; 3-col grid of 6 interactive `Card`s (title + summary + "Learn more →").
Each routes to `help/<slug>`.

### Help article (`Support.jsx → HelpArticlePage`)
Breadcrumb (HOME > HELP > TITLE); eyebrow; Baloo h1; intro; sections that render
**numbered steps** (`ol`, gradient/solid numbered circles via counter) or
**checklists** (`ul`, success-green checks), plus optional external link button;
footer with "All help topics" + "Next: …" nav; CTA.
> Two **alternative layouts** for this page are explored in
> `help-explorations.html` (a design-canvas): **B · Professional** (docs layout
> with a sticky topic sidebar + mono metadata) and **C · Fun** (gradient hero,
> chunky numbered cards, illustration callout). Use as direction options.

### Get Tangerine / Pricing (`TrialPage.jsx`, data `TG_PRICING`)
Breadcrumb (HOME > PRICING); intro (open-source free vs hosted subscription);
**5 pricing tiers** in an equal-height grid (Free / Member $3,500 / Premium
$5,000 — featured, scaled 1.05 with "Most Popular" flag / Pro $6,000 / Custom),
CTAs aligned at the bottom; "Every subscription includes" benefits; an in-page
**free-trial form** (smooth-scroll target) with success state; a "Host Tangerine
yourself" GNU GPL / GitHub card; CTA.

---

## Interactions & behavior
- **Nav dropdowns**: open on hover/focus of the parent item; close on mouse-leave.
  Make keyboard-accessible in production (focus-within + Esc).
- **Routing**: prototype uses `go(key)` + `window.scrollTo(0,0)`. Replace with
  real navigation; preserve scroll-to-top on route change.
- **Accordions (FAQ)**: single-open; toggle on click; animate height in prod.
- **Forms (Contact, Trial)**: client-only here — they just flip to a success
  panel. Wire to a real endpoint/CRM; keep the success state.
- **Pricing CTAs**: "Start free trial / Get started" smooth-scroll to the trial
  form; "Contact us" → /contact.
- **Hover/press**: cards lift `translateY(-3px)` + deeper shadow; buttons darken
  + `translateY(1px)` on press. Durations `--dur-fast/base`, `--ease-out`.
- **Focus**: 2px `--focus-ring` (tangerine) outline, 2px offset — keep for a11y.
- **Responsive**: multi-col grids collapse to 1–2 cols < 900px; nav links hide
  (add a mobile menu in production — the prototype omits it).

## State management
Minimal and local. Production needs: current route (router), one-open-index for
the FAQ accordion, form field + submitted boolean for Contact/Trial, and
dropdown open-state in Nav. No global store required; content is static data.

---

## Assets (all included under `assets/`)
- `logos/tangerine-logo.png` — citrus-slice mark + gradient wordmark.
- `product-icons/` — tangerine, teach, coach (square app marks).
- `product-logos/` — teach / coach / acuity wordmark lockups.
- `illustrations/` — global, cloud, brain (flat citrus-toned spots).
- `imagery/` — hero-overlay + reading/math/school-surveys photos +
  task-report, teach-1/2, coach-math/map, acuity screening/mockup screenshots.
- `partners/` — 8 community/partner logos.
- `team/` — 6 stylized orange/purple "pop" portraits.
- `fonts/` — Baloo 2, Mulish, Roboto Mono **woff2** (latin), self-hosted.

> **Font note:** the live site's exact fonts couldn't be read from source, so
> Baloo 2 / Mulish / Roboto Mono are **substitutions** chosen to match the rounded
> wordmark and a clean humanist UI. Confirm with brand owners; swap the woff2 +
> `tokens/fonts.css` + `--font-*` if official fonts exist.
> Logos/illustrations are © Tangerine Central / RTI — keep usage rights in mind.

## Files in this bundle
- `styles.css` — global entry (only `@import`s). Link this one file.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`,
  `base.css`. Production-ready; copy verbatim.
- `components/` — Button, IconButton, Input, Checkbox, Badge, Tag, Avatar, Card,
  Stat — each `.jsx` + `.d.ts` + `.prompt.md`. Re-implement with same API.
- `ui_kits/marketing-site/` — the full prototype: `index.html` (router),
  `Nav/Footer/Home/ProductPage/Resources/Support/TrialPage.jsx`, `content.jsx`
  (all copy as data), `marketing.css` (layout), and `help-explorations.html`
  (+ `help-variants.jsx`) for the two alternative Help-article directions.
- `assets/` — every image/font referenced above.
- `readme.md` (design-system root, also included) — brand voice, visual
  foundations, and iconography guidance.

To preview the prototype as-is: open `ui_kits/marketing-site/index.html` through
a static server (it loads `../../styles.css` and `../../_ds_bundle.js`, so serve
from the project root). The compiled `_ds_bundle.js` is environment-generated and
**not** part of production — rebuild components natively instead.
