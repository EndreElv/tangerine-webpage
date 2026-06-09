// Locale content loader. English is the source of truth (src/data/content.ts);
// each locale module under this folder provides a partial set of translated
// overrides. Anything not yet translated falls back to English, so every page
// renders in every locale even while translation is in progress.
import {
  TG_PRODUCTS,
  TG_FAQS,
  TG_TEAM,
  TG_PRINCIPLES,
  TG_PRICING,
  TG_STORIES,
  TG_HELP,
} from '../../data/content.ts';
import type { Locale } from '../index.ts';
import { es } from './es.ts';
import { fr } from './fr.ts';
import { ar } from './ar.ts';

export interface SiteContent {
  products: typeof TG_PRODUCTS;
  faqs: typeof TG_FAQS;
  team: typeof TG_TEAM;
  principles: typeof TG_PRINCIPLES;
  pricing: typeof TG_PRICING;
  stories: typeof TG_STORIES;
  help: typeof TG_HELP;
}

const EN: SiteContent = {
  products: TG_PRODUCTS,
  faqs: TG_FAQS,
  team: TG_TEAM,
  principles: TG_PRINCIPLES,
  pricing: TG_PRICING,
  stories: TG_STORIES,
  help: TG_HELP,
};

const OVERRIDES: Record<Locale, Partial<SiteContent>> = { en: {}, es, fr, ar };

/** Full content for a locale, with English fallback for untranslated parts. */
export function getContent(locale: Locale): SiteContent {
  return { ...EN, ...OVERRIDES[locale] };
}
