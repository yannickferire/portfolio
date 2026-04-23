"use client"

import Link from "next/link"

import { Overview } from "@/features/portfolio/components/overview"
import { SocialLinks } from "@/features/portfolio/components/social-links"
import { useLocale } from "@/i18n/context"
import { Twemoji } from "@/registry/components/twemoji/twemoji"

export function SiteFooter() {
  const { locale, t } = useLocale()

  return (
    <footer className="max-w-screen overflow-x-hidden px-2 pb-[env(safe-area-inset-bottom,0px)]">
      <div className="mx-auto md:max-w-3xl">
        <Overview />
        <SocialLinks />

        <div className="screen-line-top flex items-center justify-between border-x border-line px-4 py-4 font-mono text-xs text-muted-foreground">
          <Link href={`/${locale}/cv`} scroll className="transition-colors hover:text-foreground">
            Curriculum Vitae
          </Link>
          <p className="flex items-center gap-1">
            {t.footer.madeWith}{" "}<Twemoji className="inline-block size-3.5 align-[-2px]">☕</Twemoji>{" "}{t.footer.by} Yannick Ferire
          </p>
        </div>
      </div>
    </footer>
  )
}
