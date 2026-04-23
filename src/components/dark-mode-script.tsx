"use client"

import { useEffect } from "react"

import { META_THEME_COLORS } from "@/config/site"

export function DarkModeScript() {
  useEffect(() => {
    try {
      if (
        localStorage.theme === "dark" ||
        ((!(("theme" in localStorage)) || localStorage.theme === "system") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document
          .querySelector('meta[name="theme-color"]')
          ?.setAttribute("content", META_THEME_COLORS.dark)
      }
    } catch {}

    try {
      if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
        document.documentElement.classList.add("os-macos")
      }
    } catch {}
  }, [])

  return null
}
