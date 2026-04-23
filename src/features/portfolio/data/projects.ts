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
    skills: ["Next.js", "shadcn/ui", "Tailwind CSS", "Supabase", "BetterAuth"],
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
    skills: ["Next.js", "shadcn/ui", "Tailwind CSS"],
    image: "/images/tftodds-og.jpg",
    isExpanded: false,
  },
  {
    id: "offresRenault",
    title: "Offres Renault Belgium",
    role: "Lead Front-end Developer @ Bureau347",
    period: {
      start: "2014",
    },
    link: "https://offres.renault.be/vehicules-particuliers",
    skills: ["Laravel", "Svelte", "Tailwind CSS"],
    image: "/images/offres-renault-og.jpg",
    isExpanded: false,
  },
  {
    id: "alpine",
    title: "Alpine Groupe Autosphere",
    role: "Lead Front-end Developer @ Bureau347",
    period: {
      start: "2023",
    },
    link: "https://www.alpine-groupeautosphere.be/fr",
    skills: ["Laravel", "Tailwind CSS"],
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
    skills: ["Vue.js"],
    image: "/images/jx-og.jpg",
    isExpanded: false,
  },
]
