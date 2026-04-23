"use client"

import { useRef } from "react"

import { LogoMark } from "@/components/logo-mark"
import { Magnet } from "@/components/react-bits/magnet"
import { cn } from "@/lib/utils"

export function ProfileCover() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className={cn(
        "h-28 border-x border-line select-none sm:h-32",
        "flex items-center justify-center text-black dark:text-white",
        "screen-line-top screen-line-bottom before:-top-px after:-bottom-px",
        "bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
      )}
    >
      <Magnet containerRef={containerRef} magnetStrength={6}>
        <LogoMark id="js-cover-mark" className="opacity-60" />
      </Magnet>
    </div>
  )
}
