import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "groar",
    title: "🐯 GROAR",
    role: "Solo Founder – Design, Product & Engineering",
    period: {
      start: "03.2026",
    },
    link: "https://groar.app",
    skills: [
      "SaaS",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "BetterAuth",
    ],
    description: `### Turn your growth into visuals that roar.

Built from scratch as a solo founder, GROAR lets indie hackers, founders, and creators transform their metrics (X, GitHub, Reddit, SaaS) into beautiful graphics in seconds. No design skills needed.

Designed, built, and shipped entirely on my own, from the UI to the payment integration.`,
    image: "/images/groar-og.png",
    isExpanded: true,
  },
  {
    id: "tftodds",
    title: "TFTOdds",
    role: "Solo Developer – Design & Engineering",
    period: {
      start: "01.2024",
    },
    link: "https://tftodds.com",
    skills: [
      "Web App",
      "Next.js",
      "Tailwind CSS",
    ],
    description: `### Stop guessing, start climbing.

A data-driven companion for Teamfight Tactics players. Born out of my own frustration with guessing probabilities in-game, I built TFTOdds to help players make smarter decisions based on real odds and statistics.

Solo side project, designed and developed from scratch. Still actively maintained and used by the TFT community.`,
    image: "/images/tftodds-og.jpg",
    isExpanded: false,
  },
  {
    id: "offres-renault",
    title: "Offres Renault Belgium",
    role: "Lead Front-end Developer @ Bureau347",
    period: {
      start: "2014",
    },
    link: "https://offres.renault.be/vehicules-particuliers",
    skills: [
      "Client Project",
      "Svelte",
      "Laravel",
      "Tailwind CSS",
      "CMS",
    ],
    description: `### 12 years of continuous development on the same project.

The Renault offers website for Belgium and Luxembourg. Showcasing vehicle deals, financing options, and promotions. A project I've been leading since the very beginning of my career at Bureau347.

Beyond the front-end, we also built a complete custom CMS with Svelte and Laravel, allowing the client to manage all offers and content autonomously.`,
    image: "/images/offres-renault-og.jpg",
    isExpanded: false,
  },
  {
    id: "alpine-autosphere",
    title: "Alpine Groupe Autosphere",
    role: "Lead Front-end Developer @ Bureau347",
    period: {
      start: "2023",
    },
    link: "https://www.alpine-groupeautosphere.be/fr",
    skills: [
      "Client Project",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
    ],
    description: `### The Alpine experience, online.

Website built for Groupe Autosphere, a Belgian dealer group with 2 Alpine concessions. Showcases the full Alpine range, test drive booking, and workshop appointments.

Built as lead front-end developer at Bureau347.`,
    image: "/images/alpine-og.jpg",
    isExpanded: false,
  },
  {
    id: "jeuxdhiver",
    title: "Jeux d'Hiver",
    role: "Lead Front-end Developer @ Bureau347",
    period: {
      start: "2020",
    },
    link: "https://jeuxdhiver.be",
    skills: [
      "Client Project",
      "Vue.js",
    ],
    description: `### Where Brussels goes out.

Website for Jeux d'Hiver, one of the most iconic nightlife venues in Brussels. Event listings, reservations, and everything you need before a night out.

Built as lead front-end developer at Bureau347. A fun change of pace from the automotive world.`,
    image: "/images/jx-og.jpg",
    isExpanded: false,
  },
]
