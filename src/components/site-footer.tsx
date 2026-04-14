import { Overview } from "@/features/portfolio/components/overview"
import { SocialLinks } from "@/features/portfolio/components/social-links"
import { Twemoji } from "@/registry/components/twemoji/twemoji"

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2 pb-[env(safe-area-inset-bottom,0px)]">
      <div className="mx-auto md:max-w-3xl">
        <Overview />
        <SocialLinks />

        <div className="screen-line-top border-x border-line px-4 py-4">
          <p className="flex items-center justify-center gap-1 text-center font-mono text-xs text-muted-foreground">
            Made with <Twemoji className="inline-block size-3.5 align-[-2px]">☕</Twemoji> by Yannick Ferire
          </p>
        </div>
      </div>
    </footer>
  )
}
