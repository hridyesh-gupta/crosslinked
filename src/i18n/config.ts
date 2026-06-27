export const locales = ["en", "de"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
};

export const localeShort: Record<Locale, string> = {
  en: "EN",
  de: "DE",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Prefix an internal path with the active locale. Leaves external/anchor/protocol links untouched. */
export function withLocale(locale: Locale, href: string): string {
  if (/^(https?:|tel:|mailto:|#)/.test(href)) return href;
  if (href === "/") return `/${locale}`;
  return `/${locale}${href}`;
}
