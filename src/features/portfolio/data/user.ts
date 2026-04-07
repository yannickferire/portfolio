import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Yannick",
  lastName: "Ferire",
  displayName: "Yannick Ferire",
  username: "yannickferire",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Developer",
  ],
  address: "Berloz, Belgium",
  phoneNumber: "KzMyNDcwOTUwNTc5", // E.164 format, base64 encoded
  email: "eWFubmljay5mZXJpcmVAZ21haWwuY29t", // base64 encoded
  website: "https://yannickferire.be",
  jobTitle: "Developer",
  jobs: [],
  about: `
- **Design Engineer** with 5+ years of experience, known for pixel-perfect execution and strong attention to small details.
- Skilled in **Next.js**, **React**, **TypeScript**, and modern front-end technologies; building high-quality, user-centric web and mobile applications.
- Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted personal projects.
- Creator of [ZaDark](https://zadark.com) (2022): enhances the Zalo experience on PC & Web
  - 80k+ downloads on [SourceForge](https://sourceforge.net/projects/zadark)*
  - 30k+ active users on the [Chrome Web Store](https://chromewebstore.google.com/detail/llfhpkkeljlgnjgkholeppfnepmjppob)*
- Creator of [React Wheel Picker](https://react-wheel-picker.chanhdai.com): iOS-like wheel picker with inertia scrolling & infinite loop
  - 12k+ weekly downloads on [npm](https://www.npmjs.com/package/@ncdai/react-wheel-picker)*
  - [▲Vercel OSS Program](https://vercel.com/blog/summer-2025-oss-program#react-wheel-picker) summer 2025 cohort

<p class="text-muted-foreground">* Peak metrics recorded; actual current figures may vary.</p>
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
