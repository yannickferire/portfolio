"use client"

import { createContext, useContext } from "react"

import type { Locale } from "."
import { defaultLocale, getDictionary } from "."

type Dictionary = ReturnType<typeof getDictionary>

const LocaleContext = createContext<{
  locale: Locale
  t: Dictionary
}>({
  locale: defaultLocale,
  t: getDictionary(defaultLocale),
})

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale
  children: React.ReactNode
}) {
  const t = getDictionary(locale)
  return (
    <LocaleContext.Provider value={{ locale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  return useContext(LocaleContext)
}
