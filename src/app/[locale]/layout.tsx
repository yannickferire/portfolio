import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { SITE_INFO, X_USERNAME } from "@/config/site"
import { USER } from "@/features/portfolio/data/user"
import { isValidLocale, locales } from "@/i18n"
import { LocaleProvider } from "@/i18n/context"

import { HtmlLangUpdater } from "./html-lang-updater"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const validLocale = isValidLocale(locale) ? locale : "en"

  return {
    alternates: {
      canonical: `/${validLocale}`,
      languages: {
        en: "/en",
        fr: "/fr",
      },
    },
    openGraph: {
      siteName: SITE_INFO.name,
      url: `/${validLocale}`,
      type: "profile",
      locale: validLocale === "fr" ? "fr_BE" : "en_US",
      firstName: USER.firstName,
      lastName: USER.lastName,
      username: USER.username,
      gender: USER.gender,
      images: [
        {
          url: SITE_INFO.ogImage,
          width: 1200,
          height: 630,
          alt: SITE_INFO.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: X_USERNAME,
      creator: X_USERNAME,
      images: [SITE_INFO.ogImage],
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isValidLocale(locale)) {
    notFound()
  }

  return (
    <LocaleProvider locale={locale}>
      <HtmlLangUpdater locale={locale} />
      {children}
    </LocaleProvider>
  )
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}
