import { NextRequest, NextResponse } from "next/server"

import { defaultLocale, locales } from "@/i18n"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return NextResponse.next()

  // Skip static files, API routes, and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/r/") ||
    pathname.includes(".") ||
    pathname.startsWith("/og") ||
    pathname.startsWith("/vcard") ||
    pathname.startsWith("/llms") ||
    pathname.startsWith("/sitemap") ||
    pathname.startsWith("/robots")
  ) {
    return NextResponse.next()
  }

  // Detect locale from Accept-Language header
  const acceptLanguage = request.headers.get("accept-language") || ""
  const prefersFrench = acceptLanguage.toLowerCase().includes("fr")
  const locale = prefersFrench ? "fr" : defaultLocale

  // Redirect to locale-prefixed URL
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
}
