import type { MetadataRoute } from "next"

import { SITE_INFO } from "@/config/site"
import { locales } from "@/i18n"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = locales.flatMap((locale) => [
    {
      url: `${SITE_INFO.url}/${locale}`,
      lastModified: new Date().toISOString(),
    },
  ])

  return routes
}
