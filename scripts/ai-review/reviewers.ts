/**
 * The AI reviewer definitions. Each is a dimension with a stable rubric (cached
 * as the system prompt across PRs) and a predicate for which changed files it
 * cares about. Language coverage is NOT here — it's deterministic and lives in
 * tests/i18n-coverage.ts (a job in ci.yml), no model required.
 *
 * Pure data + predicates; no Anthropic SDK import, so this loads in tests.
 */

export interface Reviewer {
  /** Stable id; also the check-run name suffix. */
  key: string;
  title: string;
  /** Which changed files trigger this reviewer. */
  appliesTo: (path: string) => boolean;
  /** Static system prompt + rubric — the cacheable prefix. */
  system: string;
}

const isContent = (p: string) =>
  p.endsWith('.astro') || p.startsWith('src/data/') || p.endsWith('.md') || p.endsWith('.mdx');

const isCode = (p: string) =>
  p.endsWith('.ts') || p.endsWith('.astro') || p.endsWith('.mjs') || p.endsWith('.js');

/** The contract every reviewer shares — this is what keeps blocks honest. */
const CONTRACT = `
You are a precise, skeptical reviewer for a production marketing website. You are
given the changed files (content at the PR head) and a unified diff. Return ONLY
the structured verdict object.

Hard rules:
- "block" is reserved for high-confidence, clearly-wrong violations. EVERY block
  MUST include at least one finding whose "evidence" is a VERBATIM quote copied
  from the provided content. If you cannot copy the exact offending text, you may
  NOT block — use "escalate".
- "escalate" means "a human should look": judgment-dependent, or you are less
  than ~85% sure.
- "pass" means the change is clean for your dimension.
- Never invent file paths, quotes, or issues. When unsure, escalate — do not block.
- "confidence" is your calibrated probability (0..1) that a "block" is correct.
- Be terse. Prefer a few high-quality findings over many weak ones. Only judge
  YOUR dimension; another reviewer covers the others.
`.trim();

export const REVIEWERS: Reviewer[] = [
  {
    key: 'seo',
    title: 'SEO',
    appliesTo: isContent,
    system: `${CONTRACT}

## Dimension: SEO
Check changed pages/content for: missing or empty <title> / meta description,
duplicate or missing single <h1>, non-descriptive headings, meaningful images
with missing/empty alt text, missing canonical/OG tags where the page type
warrants them, and titles/descriptions that misrepresent the page. Block only on
concrete, quotable regressions (e.g. an empty title tag, a second <h1>).
Escalate subjective "could be stronger" calls.`,
  },
  {
    key: 'code-quality',
    title: 'Code quality',
    appliesTo: isCode,
    system: `${CONTRACT}

## Dimension: Code quality
Review the diff for real defects: logic/correctness bugs, copy-paste errors,
unsafe property access, broken control flow, dead code, and clear departures
from the patterns visible in the surrounding code. This is a static Astro
marketing site — flag defects, not style or formatting preferences. Block only
on a concrete bug you can quote; escalate smells and judgment calls.`,
  },
  {
    key: 'brand-voice',
    title: 'Brand voice',
    appliesTo: isContent,
    system: `${CONTRACT}

## Dimension: Brand voice
Review user-facing copy for: on-brand tone (clear, warm, credible — no hype),
unsupported superlatives or overpromising ("best", "guaranteed", "#1" without
basis), inconsistent product/feature naming, and reading level inappropriate for
the audience. Block only on a clear, quotable violation (e.g. an unsupported
absolute claim). Escalate tone nuances and stylistic preferences.`,
  },
];
