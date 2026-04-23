"use client"

import { useMotionValueEvent, useScroll } from "motion/react"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

import { LogoMark } from "./logo-mark"

const calcDistance = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect()
  const scrollTop = document.documentElement.scrollTop
  const headerHeight = 56
  return scrollTop + rect.top + rect.height - headerHeight
}

function LogoMarkMotion() {
  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(false)
  const distanceRef = useRef(160)

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible(latestValue >= distanceRef.current)
  })

  useEffect(() => {
    const coverMark = document.getElementById("js-cover-mark")
    if (!coverMark) return

    distanceRef.current = calcDistance(coverMark)

    const resizeObserver = new ResizeObserver(() => {
      distanceRef.current = calcDistance(coverMark)
    })
    resizeObserver.observe(coverMark)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      data-visible={visible}
      className={cn(
        "group/mark-motion relative flex px-2 py-1.5 data-[visible=true]:before:opacity-0",
        "before:absolute before:inset-0 before:rounded-lg before:border before:border-dashed before:border-line",
        "before:transition-opacity before:duration-500"
      )}
    >
      <LogoMark short className={cn(
        "!text-2xl -translate-y-1 opacity-0 transition-[opacity,translate] duration-300",
        "group-data-[visible=true]/mark-motion:translate-y-0 group-data-[visible=true]/mark-motion:opacity-80"
      )} />
    </div>
  )
}

export function SiteHeaderMark() {
  const pathname = usePathname()
  const isHome = ["/", "/index"].includes(pathname)
  return isHome ? <LogoMarkMotion /> : <LogoMark short className="!text-2xl opacity-80" />
}
