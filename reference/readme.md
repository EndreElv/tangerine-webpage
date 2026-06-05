# Tangerine Design System

A design system for **Tangerine®** — an open-source, offline-first platform for
education data collection. This project lets design agents create on-brand
interfaces, marketing pages, slides and prototypes for Tangerine and its product
suite.

> **Tagline:** *Actionable insights, anywhere.*
> **Mission:** Supporting education and innovation.

---

## 1. Company & product context

Tangerine® is an open-source software platform built to support **data collection
in low-resource, often offline settings — especially in education.** Originally
developed to assess early-grade reading and math, it now powers large-scale
assessments, surveys, classroom observations and program monitoring on tablets
and smartphones, syncing to secure servers when connectivity is available.

- **Scale:** 5M+ assessments & surveys · 65+ countries · 80+ organizations · 100+ languages.
- **Stewardship:** The Tangerine logo is a registered trademark of **Research Triangle Institute (RTI)**; operated by **Tangerine Central, LLC.**
- **Character:** mission-driven, credible, warm and accessible — built for field staff and researchers, not just developers.

### Product suite
| Product | Who uses it | What it does |
|---|---|---|
| **Tangerine®** | Trained data-collection teams | Large-scale, anonymized assessments & surveys; syncs to secure servers for aggregate analysis. |
| **Tangerine:Teach** | Teachers & support staff | Track attendance, behavior & learning; auto-groups students and recommends interventions. |
| **Tangerine:Coach** | Instructional coaches & leaders | Classroom observations with instant, suggested feedback for real-time coaching. |
| **Tangerine:Acuity** | (suite member) | Listed in the product nav. |

### Sources used to build this system
- **Website (primary source):** https://www.tangerinecentral.org/
  - Home, and product page https://www.tangerinecentral.org/tangerine
- Logo, product icons, spot illustrations, hero/feature photography and partner
  logos were downloaded from the site's Squarespace CDN into `assets/`.
- The live site is a Squarespace build and **blocks cross-origin access to its
  HTML/CSS**, so exact font + color *declarations* could not be read from source.
  Brand colors were **sampled directly from the logo PNG**; fonts are **flagged
  substitutions** (see Caveats). No GitHub repo or Figma file was provided.

---

## 2. Content fundamentals (voice & tone)

**Voice:** confident, mission-driven, plain-spoken. Tangerine sells *impact and
reliability*, not hype. Copy leads with what the user can **do** and where
("anywhere", "offline", "in resource-constrained environments").

- **Person:** addresses the reader as **you** ("empowers users to deploy…"),
  refers to the product as **Tangerine®** (always with the ® on first/marketing use).
- **Casing:** **Sentence case** for headlines and buttons ("Actionable insights,
  anywhere.", "Get Tangerine"). Product names keep their camel/colon casing:
  *Tangerine:Teach*, *Tangerine:Coach*, *Tangerine:Acuity*.
- **Eyebrows / labels:** short and UPPERCASE in the UI ("HOME > PRODUCTS > TANGERINE").
- **Sentence style:** short, benefit-first. Often a **bold lede** followed by a
  supporting paragraph. Feature copy is frequently delivered as **3-bullet lists**
  (see the product-suite cards).
- **Numbers as proof:** big round figures used as social proof — "100+ languages",
  "60+ countries", "5 million assessments". Lean on these; don't invent precise stats.
- **CTAs:** verb-first and friendly — "Get Tangerine", "Get Started", "Explore
  Tangerine →", "Continue Reading →". Arrows (→) are used on text links.
- **Emoji:** **none.** Do not use emoji in Tangerine copy or UI.
- **Vibe words:** open-source, offline-first, actionable, timely, versatile,
  data sovereignty, community-driven, resource-constrained settings.

**Example lede (real):** "Tangerine® is transforming how education systems collect
data, assess learning, and support teachers — especially in resource-constrained
environments."

---

## 3. Visual foundations

The brand grows out of one asset: a **citrus-slice mark** above a lowercase
wordmark painted with a **left-to-right tangerine→gold gradient.** Everything
warm, rounded and optimistic; nothing cold or corporate-blue.

- **Color:** Primary **Tangerine `#F05424`** (a red-leaning orange), accent
  **Gold `#FCB40C`**. The **signature gradient** `#F05424 → #FCB40C` is the single
  most recognizable device — reuse it on hero text, big stats, avatars and impact
  bands. Neutrals are **warm** (brown-tinted), never blue-gray. Pale citrus-rind
  yellow (`#E6E36A`) appears in the logo ring only — use sparingly.
- **Type:** Display = **Baloo 2** (rounded geometric, echoes the wordmark) for
  headlines, product names and big numbers. UI/body = **Mulish** (humanist sans).
  Data/metrics = **Roboto Mono**. Headlines are sentence case, tight tracking
  (-0.02em). (Fonts are substitutions — see Caveats.)
- **Backgrounds:** mostly clean white / warm off-white (`--neutral-50`). Accent
  bands use the **brand gradient** (impact section) or soft tangerine tints
  (`--tangerine-50`) for CTAs. **Full-bleed photography** powers the hero, darkened
  with a left-weighted brown scrim so white text stays legible. Real classroom /
  field photography (warm, human, on-location) — not stocky or cool-toned.
- **Imagery treatment:** photos are warm and natural; spot **illustrations** are
  flat, single-subject, in the citrus palette (globe, cloud, brain).
- **Corners:** friendly and rounded. Cards `--radius-lg` (16px); buttons are
  **fully pill-shaped** (`--radius-pill`); inputs `--radius-md` (12px).
- **Cards:** white surface, 1px warm border (`--neutral-200`) when flat, or a soft
  **warm-tinted shadow** when raised (shadows are brown-black `rgba(60,30,12,…)`,
  never gray). A 4px tangerine **top accent bar** is the signature card flourish.
- **Buttons:** pill-shaped, bold label. Primary = solid tangerine with a soft
  **orange glow** (`--shadow-brand`). Accent = gold with near-black text.
  Secondary = tangerine outline. Ghost = quiet neutral.
- **Elevation:** warm shadow scale `xs → xl`, plus `--shadow-brand` glow for
  primary actions.
- **Motion:** quick and gentle. `--dur-fast 120ms` / `--dur-base 200ms`, easing
  `--ease-out` for most things, a subtle `--ease-spring` for check/toggle pops.
  Hover = lift (`translateY(-3px)`) + deeper shadow on cards, darker shade on
  buttons. Press = `translateY(1px)` + darkest shade. No bounces on page content.
- **Transparency / blur:** sticky nav uses translucent white + `backdrop-filter:
  blur` so content scrolls under it. Hero scrim is the main use of layered alpha.
- **Focus:** 2px tangerine outline, 2px offset (accessibility matters for this audience).

---

## 4. Iconography

- **Product/brand marks** are bespoke PNG illustrations (citrus slice, the three
  product app icons, the global/cloud/brain spot illustrations) — all in
  `assets/`. Use these directly; **do not redraw them.**
- The marketing site itself uses very few UI glyphs; arrows (**→**) appear as
  plain text on links, and breadcrumb separators are `>`.
- There is **no bundled icon font** in the available source. For functional UI
  icons (search, sync, close, chevrons, etc.) this system uses **unicode glyphs**
  in the specimen/components and recommends **[Lucide](https://lucide.dev)** (CDN)
  as the substitute set — thin, rounded strokes that match Baloo 2's friendliness.
  **Flag this as a substitution** if exact field-app icons are required.
- **No emoji** in product UI or brand copy.

---

## 5. Index / manifest

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s only.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skills-compatible usage guide.

**`tokens/`** (all `@import`ed by `styles.css`)
- `fonts.css` — `@font-face` for Baloo 2, Mulish, Roboto Mono (self-hosted woff2).
- `colors.css` — palette + semantic aliases + brand gradients.
- `typography.css` — families, weights, type scale, leading, tracking.
- `spacing.css` — spacing, radius, borders, shadows, motion, z-index, layout.
- `base.css` — element defaults + `.tg-gradient-text`, `.tg-eyebrow` helpers.

**`assets/`**
- `logos/` — `tangerine-logo.png` (mark + wordmark).
- `product-icons/` — `tangerine.png`, `teach.png`, `coach.png`.
- `illustrations/` — `global.png`, `cloud.png`, `brain.png`.
- `imagery/` — `hero-overlay.png`, `reading.jpg`, `math.jpg`, `school-surveys.jpg`, `task-report.png`.
- `partners/` — 8 community/partner logos.
- `fonts/` — woff2 binaries.

**`components/`** (React primitives — `window.TangerineDesignSystem_c907c9`)
- `buttons/` — **Button**, **IconButton**
- `forms/` — **Input**, **Checkbox**
- `feedback/` — **Badge**, **Tag**, **Avatar**
- `surfaces/` — **Card**, **Stat**

**`guidelines/`** — foundation specimen cards (Design System tab): colors, type, spacing, brand.

**`ui_kits/marketing-site/`** — full interactive recreation of tangerinecentral.org.
Click-through across **Home, all four product pages** (Tangerine®, Teach, Coach,
Acuity), **Impact, User Stories, FAQs, About, Contact, Help, and Get Started**.
Files: `index.html` (router) + `Nav/Footer/Home/TrialPage.jsx`, a data-driven
`ProductPage.jsx` fed by `content.jsx`, `Resources.jsx`, `Support.jsx`, and `marketing.css`.

---

## 6. Caveats / substitutions
- **Fonts are substitutions.** The live Squarespace site blocks reading its CSS,
  so exact families are unknown. *Baloo 2* (display) was chosen to match the
  rounded wordmark; *Mulish* (UI) and *Roboto Mono* (data) are sensible pairings.
  Swap in the real brand fonts when available.
- **Colors** were sampled from the logo PNG, not from brand guidelines — accurate
  to the artwork but not officially verified hex values.
- **UI icons** use unicode + a recommended Lucide CDN substitute; no official set was available.
- Copy across Home, all four product pages, FAQs, About (mission, story, full team), and
  the Get Tangerine **pricing** page is taken verbatim from tangerinecentral.org.
  The **Impact, User Stories, and Help** pages are assembled from real facts/stats
  and the two real featured stories, but their exact page layouts were not fully
  readable from source, so those three are representative rather than verbatim.
- Only the **marketing website** was recreatable from accessible source. The
  field **data-collection app** UI was not provided as code/Figma (only a single
  report screenshot exists in `assets/imagery/task-report.png`), so no app UI kit
  was built to avoid inventing one.
