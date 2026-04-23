"use client"

import { GlobeIcon } from "@/components/icons"
import { usePathname, useRouter } from "next/navigation"
import { useHotkeys } from "react-hotkeys-hook"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import { type Locale, locales } from "@/i18n"
import { useLocale } from "@/i18n/context"

export function LocaleSwitcher() {
  const { locale } = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchTo: Locale = locale === "en" ? "fr" : "en"
  const label = switchTo === "fr" ? "Passer en francais" : "Switch to English"

  const switchLocale = () => {
    const segments = pathname.split("/")
    if (locales.includes(segments[1] as Locale)) {
      segments[1] = switchTo
    } else {
      segments.splice(1, 0, switchTo)
    }
    const newPath = segments.join("/") || `/${switchTo}`
    router.push(newPath, { scroll: false })
  }

  useHotkeys("l", () => switchLocale())

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            variant="ghost"
            size="icon-sm"
            className="border-none"
            onClick={switchLocale}
            aria-label={label}
          >
            <GlobeIcon size={18} />
          </Button>
        }
      />
      <TooltipContent className="pr-2 pl-3">
        <div className="flex items-center gap-3">
          {label}
          <Kbd>L</Kbd>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}
