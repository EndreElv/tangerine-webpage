# AGENTS.md — operating guide for tangerine-webpage

How an AI agent (or any contributor) makes correct, safe changes to this site.
Read this first; it's the substrate the autonomous pipeline relies on.

## What this is

A static **Astro 5** marketing site (`output: 'static'`), deployed on **Vercel**
(git → GitHub → Vercel auto-deploy on push to `main`). No SSR, no database.
Content is typed TS data; interactivity is tiny vanilla-JS islands in `.astro`
`<script>` tags. No client UI framework.

`project_tracker: github`

## Where things live

| You want to change… | Edit… |
|---|---|
| A **fact** (price, stat, claim, trademark) | `src/data/facts.ts` — the source-of-truth. **Human-approved** (CODEOWNER). |
| Page **copy** (FAQs, product text, team, help, stories) | `src/data/content.ts` |
| Home-page blocks (products, features, partners) | `src/data/home.ts` |
| Nav / footer links / routes | `src/data/nav.ts` (`ROUTES` + `href()`) |
| A page's layout/markup | `src/pages/*.astro` (one file per route; `[product].astro`, `help/[slug].astro` are data-driven) |
| Shared components | `src/components/*.astro` |
| Styling | `src/styles/` — tokens, `components.css`, `marketing.css`, `site.css` |

Route/content inventory: [`docs/agent/content-map.md`](docs/agent/content-map.md).

## Conventions (the gates enforce most of these)

- **Use design tokens, never raw values.** `var(--tangerine-500)`, `var(--space-5)`,
  `var(--text-3xl)` — no raw hex or `px`. Tokens live in `src/styles/tokens/`.
- **Fonts are allow-listed:** Baloo 2 (display/headings/stats), Mulish (body/UI),
  Roboto Mono (data/mono). Don't introduce others.
- **Component prop values are fixed enums** — match them exactly:
  - `Button` variant `primary|accent|secondary|ghost`, size `sm|md|lg`, `block`, `as`
  - `Card` elevation `flat|raised`, plus `interactive|accentTop|media|padded`
  - `Stat` `value,label,delta`, trend `up|down`, size `sm|md|lg`, `gradient`
  - `Badge` tone `neutral|brand|accent|success|warning|error|info`, `solid|dot`
  - `IconButton` variant `ghost|soft|solid`; `Avatar` size `sm|md|lg|xl`
- **Links go through `href()`** from `src/data/nav.ts` — never hardcode URLs.
- **Facts render from `facts.ts`** — never hardcode a price or stat in a page
  (the content gate will fail it).
- **Interactivity = small vanilla `<script>` islands** (see `Nav.astro`,
  `contact.astro`). No `client:*` directives, no UI framework.

## How to make a change

```bash
npm install
npm run dev          # http://localhost:4321
# edit content/components
npm run build        # must pass
npm run typecheck    # astro check — must pass
npm run test:content # content/fact gate — must pass
npm run test:browser # a11y + internal links (needs: npx playwright install chromium)
```

Open a PR. The gate chain (below) runs automatically; on all-green it auto-merges
and deploys. No human approval is needed for ordinary content — **unless** your
change touches a CODEOWNER path (gates, config, `facts.ts`, tests), which holds
for human review by design.

## The gate chain (what CI checks on every PR)

`build + typecheck` → `content/fact` (HTML matches `facts.ts`) → `a11y + links`
→ `content-prose` (Vale forbidden claims/brand) → `blast-radius` (Danger holds
risky changes) → `visual` (informational until baselines committed). On all
required-green: auto-merge → deploy → post-deploy **smoke** → auto-rollback if
smoke fails.

## Pointers

- Activate / configure the pipeline: [`docs/agent/pipeline-setup.md`](docs/agent/pipeline-setup.md)
- Plan + rationale: [`docs/plans/2026-06-05-001-feat-agentic-delivery-pipeline-plan.md`](docs/plans/2026-06-05-001-feat-agentic-delivery-pipeline-plan.md)
- Design fidelity reference: [`reference/HANDOFF.md`](reference/HANDOFF.md)
- Known follow-ups: contact/trial forms are visual-only stubs (no backend yet);
  button color-contrast is a tracked brand a11y exception.
