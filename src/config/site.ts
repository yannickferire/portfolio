import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://yannickferire.be",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#f0f0f0",
  dark: "#161618",
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "About me",
    href: "/#about",
  },
  {
    title: "Stack",
    href: "/#stack",
  },
  {
    title: "Experience",
    href: "/#experience",
  },
  {
    title: "Projects",
    href: "/#projects",
  },
]

export const MOBILE_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  ...MAIN_NAV,
]

export const X_USERNAME = "@yannick_ferire"
export const GITHUB_USERNAME = "yannickferire"
export const SOURCE_CODE_GITHUB_REPO = "yannickferire/portfolio"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/yannickferire/portfolio"

export const SPONSORSHIP_URL = ""

export const UTM_PARAMS = {
  utm_source: "yannickferire.be",
}
