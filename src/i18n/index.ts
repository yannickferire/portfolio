import en from "./en"
import fr from "./fr"

export const locales = ["en", "fr"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "en"

const dictionaries = { en, fr } as const

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries[defaultLocale]
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}
