import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Yannick",
  lastName: "Ferire",
  displayName: "Yannick Ferire",
  username: "yannickferire",
  gender: "male",
  pronouns: "he/him",
  bio: "Fullstack Developer. 12 years shipping web products, from interface to production.",
  flipSentences: [],
  address: "Berloz, Belgium",
  phoneNumber: "KzMyNDcwOTUwNTc5", // E.164 format, base64 encoded
  email: "eWFubmljay5mZXJpcmVAZ21haWwuY29t", // base64 encoded
  website: "https://yannickferire.be",
  jobTitle: "Fullstack Developer",
  jobs: [],
  about: "",
  avatar: "/images/avatar.jpg",
  ogImage: "/og-image.jpg",
  namePronunciationUrl: "",
  timeZone: "Europe/Brussels",
  keywords: [
    "yannick ferire",
    "yannickferire",
    "fullstack developer",
    "frontend developer",
    "react",
    "next.js",
    "typescript",
    "laravel",
    "belgium",
    "remote",
    "portfolio",
  ],
  dateCreated: "2026-04-07", // YYYY-MM-DD
}
