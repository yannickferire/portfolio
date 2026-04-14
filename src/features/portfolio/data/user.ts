import type { User } from "@/features/portfolio/types/user"

const careerStartDate = new Date(2013, 8) // September 2013
const yearsOfExperience = Math.floor(
  (Date.now() - careerStartDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000)
)

export const USER: User = {
  firstName: "Yannick",
  lastName: "Ferire",
  displayName: "Yannick Ferire",
  username: "yannickferire",
  gender: "male",
  pronouns: "he/him",
  bio: "Fullstack Developer. UI obsessed, pixel perfect.",
  flipSentences: [
    "UI obsessed, pixel perfect",
    "Strong UX knowledge",
    "Product mindset oriented",
    "Frontend at heart, fullstack when needed",
  ],
  address: "Berloz, Belgium",
  phoneNumber: "KzMyNDcwOTUwNTc5", // E.164 format, base64 encoded
  email: "eWFubmljay5mZXJpcmVAZ21haWwuY29t", // base64 encoded
  website: "https://yannickferire.be",
  jobTitle: "Developer",
  jobs: [],
  about: `
- **Senior Front-end Developer** with ${yearsOfExperience}+ years of experience, dedicated to the same company.
- Skilled in **Next.js**, **React**, **TypeScript**, and modern front-end technologies; building high-quality, user-centric web applications.
- Sole front-end developer for the past 6 years, owning the full UI layer end-to-end while collaborating closely with designers, back-end engineers, and product stakeholders.
- A truly **versatile profile**: UI, UX, product thinking, front-end, back-end. I've touched it all. This gives me a deep understanding of every role around the table and makes me a strong team player.
- Passionate about **side projects**, from SaaS products to creative experiments. Always exploring new ideas and technologies on my own time.

**Beyond the code:**<br/>
🌿 Nature lover, living in rural Belgium<br/>
👧 Proud dad of a 2-year-old girl<br/>
🎾 Padel enthusiast (terrible at it)
`,
  avatar: "/images/avatar.jpg",
  ogImage: "/images/og-image.png",
  namePronunciationUrl: "",
  timeZone: "Europe/Brussels",
  keywords: [
    "yannick ferire",
    "yannickferire",
    "developer",
    "portfolio",
  ],
  dateCreated: "2026-04-07", // YYYY-MM-DD
}
