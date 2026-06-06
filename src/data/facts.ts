// Single source-of-truth for the site's authoritative facts.
// The agent edits facts HERE, pages render FROM here, and the content/fact
// gate (CI) checks the built HTML against here. Changing a fact's value is a
// CODEOWNER-gated change (a human approves fact edits by design).
//
// Validation: malformed facts throw at module-eval time, which fails
// `astro check` / `astro build` (the CI build gate) — so a fact can never be
// blank or shapeless. (A Zod schema can replace this guard once `astro/zod`
// availability is confirmed in CI; the guard meets the same "malformed → build
// fails" contract with zero extra import surface.)

import { TG_PRICING } from './content';

export interface StatFact {
  /** Rendered value, e.g. "65+", "5M+". */
  value: string;
  /** Default human label for the stat. Pages may override the wording. */
  label: string;
}

const STATS_RAW = {
  assessments: { value: '5M+', label: 'assessments & surveys conducted' },
  countries: { value: '65+', label: 'countries' },
  organizations: { value: '80+', label: 'organizations' },
  languages: { value: '100+', label: 'languages' },
} satisfies Record<string, StatFact>;

function validate<T extends Record<string, StatFact>>(stats: T): T {
  for (const [key, s] of Object.entries(stats)) {
    if (!s || !s.value?.trim() || !s.label?.trim()) {
      throw new Error(`facts.ts: malformed stat "${key}" — value and label are required`);
    }
  }
  return stats;
}

/** Canonical site statistics. Render these; never hardcode a stat in a page. */
export const STATS = validate(STATS_RAW);

/**
 * Prices stay structured in TG_PRICING (content.ts); exposed here so the
 * content/fact gate has one facts entry point. No duplication — derived, not copied.
 */
export const PRICES = TG_PRICING.map((t) => ({ name: t.name, price: t.price }));

/** Trademark rules for the brand/content gate. */
export const TRADEMARK = {
  /** Registered form, required in titles, hero headline, and the product name. */
  registeredName: 'Tangerine®',
  /** Verbatim RTI legal line (footer). */
  rtiLegalLine: 'The Tangerine Logo is a registered trademark of Research Triangle Institute.',
} as const;
