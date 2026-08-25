import { CodeXmlIcon, GraduationCapIcon } from "@/components/icons"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "bureau347",
    companyName: "Bureau347",
    companyWebsite: "https://bureau347.com",
    positions: [
      {
        id: "lead",
        title: "Senior Developer • Front-end, UI/UX, Back-end",
        employmentPeriod: {
          start: "09.2018",
          end: "08.2026",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: "Owned the front-end architecture and tech choices.",
        isExpanded: true,
        skills: [
          "TypeScript",
          "React",
          "Next.js",
          "Laravel",
          "Tailwind CSS",
          "Vue.js",
          "Notion",
          "Make",
          "UI/UX",
          "Product",
        ],
      },
      {
        id: "frontend",
        title: "Front-end Developer",
        employmentPeriod: {
          start: "04.2014",
          end: "09.2018",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        skills: ["JavaScript", "HTML", "CSS", "jQuery", "PHP", "Laravel"],
      },
    ],
  },
  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "freelance",
        title: "Developer",
        employmentPeriod: {
          start: "09.2013",
          end: "04.2014",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: "Freelance front-end development for various clients.",
        skills: ["HTML", "CSS", "JavaScript", "PHP"],
      },
    ],
  },
  {
    id: "celluleVerte",
    companyName: "Cellule Verte",
    positions: [
      {
        id: "celluleVerte",
        title: "Developer (Internship)",
        employmentPeriod: {
          start: "10.2012",
          end: "01.2013",
        },
        employmentType: "Internship",
        icon: <CodeXmlIcon />,
        skills: ["HTML", "CSS", "JavaScript"],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "education",
        title: "Haute Ecole Albert Jacquard",
        employmentPeriod: {
          start: "2010",
          end: "2013",
        },
        icon: <GraduationCapIcon />,
        description:
          "Baccalaureate in Infography, Web Design & Multimedia.",
        skills: ["Web Design", "Multimedia", "Infography"],
      },
    ],
  },
]
