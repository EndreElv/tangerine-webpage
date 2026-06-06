/**
 * Content/fact gate (U4) — the gate that catches "valid but wrong".
 *
 * A typo'd price ($500 for $5,000) builds clean, passes a11y/links/smoke, and
 * ships. This gate compares the BUILT HTML against the source-of-truth
 * (src/data/facts.ts) so divergence is caught before merge:
 *   1. Stray-price scan — every $-amount in the built site must be an approved
 *      price; a hardcoded/typo'd $-amount anywhere fails.
 *   2. Price presence — each approved price renders on the pricing page.
 *   3. Stat presence — each stat value renders on the pages that should show it
 *      (this is what catches a recurrence of the 60+/65+ class).
 *
 * Run after a build (reads dist/). Override the build dir with DIST_DIR (used by
 * the negative test). Exits non-zero on any failure so CI blocks the merge.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { STATS, PRICES } from '../src/data/facts.ts';

const DIST = process.env.DIST_DIR || 'dist';

function htmlFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) out.push(...htmlFiles(p));
    else if (entry.endsWith('.html')) out.push(p);
  }
  return out;
}

const read = (f: string) => readFileSync(f, 'utf8');
const failures: string[] = [];

const files = htmlFiles(DIST);
if (files.length === 0) failures.push(`No built HTML found in ${DIST} — run a build first`);

// 1) Stray-price scan: every $-amount in built HTML must be an approved price.
const approvedPrices = new Set(PRICES.map((p) => p.price).filter((v) => /^\$/.test(v)));
for (const f of files) {
  for (const m of read(f).match(/\$[0-9][0-9,]*/g) ?? []) {
    if (!approvedPrices.has(m)) {
      failures.push(`Unapproved price "${m}" in ${f} — not in facts.ts PRICES`);
    }
  }
}

// 2) Price presence: each approved price must render on the pricing page.
const pricingPath = join(DIST, 'get-tangerine/index.html');
try {
  const html = read(pricingPath);
  for (const price of approvedPrices) {
    if (!html.includes(price)) failures.push(`Price "${price}" missing from /get-tangerine`);
  }
} catch {
  failures.push('Pricing page (/get-tangerine) not found in build');
}

// 3) Stat presence: each stat value must render on its expected page(s).
const statPages: Record<keyof typeof STATS, string[]> = {
  countries: ['index.html', 'impact/index.html'],
  languages: ['index.html', 'impact/index.html'],
  organizations: ['index.html', 'impact/index.html'],
  assessments: ['impact/index.html'],
};
for (const key of Object.keys(statPages) as (keyof typeof STATS)[]) {
  const { value } = STATS[key];
  for (const page of statPages[key]) {
    try {
      if (!read(join(DIST, page)).includes(value)) {
        failures.push(`Stat ${key} "${value}" missing from /${page}`);
      }
    } catch {
      failures.push(`Expected page /${page} not found in build`);
    }
  }
}

if (failures.length) {
  console.error('Content/fact gate FAILED:');
  for (const f of failures) console.error('  - ' + f);
  process.exit(1);
}
console.log(
  `Content/fact gate passed: ${files.length} pages, ${approvedPrices.size} prices, ${Object.keys(statPages).length} stats verified against facts.ts.`,
);
