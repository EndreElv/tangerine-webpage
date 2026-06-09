/**
 * Language coverage gate — ensures every piece of translatable content exists in
 * all required locales (en/es/ar) before merge. Deterministic on purpose: parity
 * is a key-diff, not an LLM judgment. Translation *quality* (fluency, RTL) is a
 * separate, later (AI) concern.
 *
 * Convention (forward — i18n infra lands later): translatable strings live as
 *   src/data/i18n/<locale>.json
 * with an identical key tree across locales. Until that directory exists, this
 * gate is ARMED but a no-op pass — so it ships today and starts blocking the
 * moment the first locale files appear.
 *
 * Fails (exit 1) on: a non-base locale missing keys present in the base, any
 * empty/blank leaf, an unexpected key not in the base, or a missing required
 * locale file. A leaf identical to the base in es/ar is a WARNING (likely
 * untranslated) but does not fail — that judgment belongs to the deferred AI
 * translation-quality reviewer.
 *
 * Override the source dir with I18N_DIR (used by tests).
 */
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const REQUIRED_LOCALES = ['en', 'es', 'ar'] as const;
const BASE_LOCALE = 'en';
const I18N_DIR = process.env.I18N_DIR || 'src/data/i18n';

type Json = string | number | boolean | null | Json[] | { [k: string]: Json };

function loadLocale(locale: string): Json | undefined {
  const file = join(I18N_DIR, `${locale}.json`);
  if (!existsSync(file)) return undefined;
  return JSON.parse(readFileSync(file, 'utf8')) as Json;
}

/** Flatten to leaf key paths -> value (arrays indexed: `items[0].label`). */
function leaves(node: Json, prefix = '', out: Record<string, Json> = {}): Record<string, Json> {
  if (node === null || typeof node !== 'object') {
    out[prefix] = node;
    return out;
  }
  if (Array.isArray(node)) {
    node.forEach((v, i) => leaves(v, `${prefix}[${i}]`, out));
    return out;
  }
  for (const [k, v] of Object.entries(node)) {
    leaves(v, prefix ? `${prefix}.${k}` : k, out);
  }
  return out;
}

const failures: string[] = [];
const warnings: string[] = [];

// If i18n hasn't been set up yet, the gate is armed but passes.
if (!existsSync(I18N_DIR)) {
  console.log(
    `i18n-coverage: ${I18N_DIR} not present yet — gate ARMED, skipping ` +
      `(will enforce ${REQUIRED_LOCALES.join('/')} parity once locale files exist).`,
  );
  process.exit(0);
}

const base = loadLocale(BASE_LOCALE);
if (base === undefined) {
  console.error(`i18n-coverage: FAILED\n  - base locale '${BASE_LOCALE}.json' is missing from ${I18N_DIR}`);
  process.exit(1);
}

const baseLeaves = leaves(base);
const baseKeys = Object.keys(baseLeaves);

for (const locale of REQUIRED_LOCALES) {
  if (locale === BASE_LOCALE) continue;
  const data = loadLocale(locale);
  if (data === undefined) {
    failures.push(`required locale '${locale}.json' is missing from ${I18N_DIR}`);
    continue;
  }
  const localeLeaves = leaves(data);
  const localeKeys = new Set(Object.keys(localeLeaves));

  // Missing or empty values (present in base, absent/blank here).
  for (const key of baseKeys) {
    if (!localeKeys.has(key)) {
      failures.push(`[${locale}] missing key: ${key}`);
      continue;
    }
    const value = localeLeaves[key];
    if (value === null || (typeof value === 'string' && value.trim() === '')) {
      failures.push(`[${locale}] empty value for key: ${key}`);
    } else if (
      typeof value === 'string' &&
      typeof baseLeaves[key] === 'string' &&
      value.trim() === (baseLeaves[key] as string).trim()
    ) {
      warnings.push(`[${locale}] identical to ${BASE_LOCALE} (likely untranslated): ${key}`);
    }
  }

  // Extra keys (present here, absent in base) — keep the trees in lockstep.
  for (const key of localeKeys) {
    if (!(key in baseLeaves)) failures.push(`[${locale}] unexpected key not in ${BASE_LOCALE}: ${key}`);
  }
}

for (const w of warnings) console.warn(`warn: ${w}`);

if (failures.length) {
  console.error(`\ni18n-coverage: FAILED (${failures.length})`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}

console.log(
  `i18n-coverage: OK — all ${REQUIRED_LOCALES.length} locales (${REQUIRED_LOCALES.join('/')}) in parity` +
    `${warnings.length ? `, ${warnings.length} warning(s)` : ''}.`,
);
