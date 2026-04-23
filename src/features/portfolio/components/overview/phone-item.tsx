"use client"

import { PhoneIcon } from "@/components/icons"
import { useHotkeys } from "react-hotkeys-hook"
import { toast } from "sonner"
import { useWebHaptics } from "web-haptics/react"

import { useIsClient } from "@/hooks/use-is-client"
import { useLocale } from "@/i18n/context"
import { trackEvent } from "@/lib/events"
import { CopyButton } from "@/registry/components/copy-button"
import { copyToClipboardWithEvent } from "@/utils/copy"
import { decodePhoneNumber, formatPhoneNumber } from "@/utils/string"

import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item"

type PhoneItemProps = {
  phoneNumber: string
}

export function PhoneItem({ phoneNumber }: PhoneItemProps) {
  const { t } = useLocale()
  const isClient = useIsClient()
  const phoneNumberDecoded = decodePhoneNumber(phoneNumber)
  const phoneNumberFormatted = formatPhoneNumber(phoneNumberDecoded)

  useHotkeys("shift+p", () => {
    copyToClipboardWithEvent(phoneNumberDecoded, {
      name: "copy_phone_number",
      properties: {
        method: "keyboard",
        key: "shift+p",
      },
    })
    toast.success("Phone number copied")
  })

  const { trigger } = useWebHaptics({ debug: true })

  return (
    <IntroItem className="group">
      <IntroItemIcon>
        <PhoneIcon />
      </IntroItemIcon>

      <IntroItemContent>
        <IntroItemLink
          href={isClient ? `tel:${phoneNumberDecoded}` : "#"}
          aria-label={
            isClient ? `Call ${phoneNumberFormatted}` : "Phone number"
          }
        >
          {isClient ? (
            <>
              <span className="text-muted-foreground">+32</span>
              {" 470 95 05 79"}
            </>
          ) : (
            t.overview.phoneProtected
          )}
        </IntroItemLink>
      </IntroItemContent>

      <div className="-translate-x-3 opacity-0 transition-opacity ease-out group-hover:opacity-100">
        <CopyButton
          className="rounded-md border-none text-muted-foreground [&_svg:not([class*='size-'])]:size-3.5"
          variant="ghost"
          size="icon-xs"
          text={isClient ? phoneNumberDecoded : t.overview.phoneProtected}
          onCopySuccess={() => {
            trigger("success")
            trackEvent({
              name: "copy_phone_number",
              properties: {
                method: "button",
              },
            })
          }}
          onCopyError={() => trigger("error")}
        />
      </div>
    </IntroItem>
  )
}
