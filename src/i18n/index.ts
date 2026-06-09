// i18n core — locale list, text direction, and URL helpers.
// English is the default locale and lives at the site root (no prefix);
// Spanish, French, and Arabic are served under /es, /fr, /ar.

export const LOCALES = ['en', 'es', 'fr', 'ar'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

/** Native language names, shown in the language switcher. */
export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  ar: 'العربية',
};

/** Locales that read right-to-left. */
export const RTL_LOCALES: readonly Locale[] = ['ar'];

/** BCP-47 `lang` attribute value for a locale. */
export const LANG_ATTR: Record<Locale, string> = {
  en: 'en',
  es: 'es',
  fr: 'fr',
  ar: 'ar',
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

/** Text direction for a locale. */
export function dir(locale: Locale): 'ltr' | 'rtl' {
  return RTL_LOCALES.includes(locale) ? 'rtl' : 'ltr';
}

/**
 * Resolve the active locale from a URL pathname. The first path segment
 * decides it; anything else (including `/`) is the default locale.
 */
export function getLocaleFromPath(pathname: string): Locale {
  const seg = pathname.split('/').filter(Boolean)[0];
  return isLocale(seg) ? seg : DEFAULT_LOCALE;
}

/** Strip a leading locale segment, returning the canonical (English) path. */
export function stripLocale(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean);
  if (isLocale(parts[0])) parts.shift();
  return '/' + parts.join('/');
}

/**
 * Prefix a canonical (English) path with a locale. The default locale keeps
 * the bare path; other locales get a `/es`, `/fr`, `/ar` prefix.
 * Accepts paths with or without a leading slash and preserves a trailing slash.
 */
export function localizePath(path: string, locale: Locale): string {
  const canonical = stripLocale(path.startsWith('/') ? path : '/' + path);
  if (locale === DEFAULT_LOCALE) return canonical;
  if (canonical === '/') return `/${locale}`;
  return `/${locale}${canonical}`;
}

/** A "continue/forward" arrow that points the reading direction's way. */
export function arrowEnd(locale: Locale): string {
  return dir(locale) === 'rtl' ? '←' : '→';
}
