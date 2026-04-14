import { CodeXmlIcon, GraduationCapIcon } from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "bureau347",
    companyName: "Bureau347",
    companyWebsite: "https://bureau347.com",
    positions: [
      {
        id: "2",
        title: "Lead Front-end Developer",
        employmentPeriod: {
          start: "09.2018",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description:
          "Sole front-end developer, owning the full UI layer. Collaborating with designers, back-end engineers, and product stakeholders across a wide range of projects.",
        skills: [
          "TypeScript",
          "React",
          "Next.js",
          "Tailwind CSS",
          "Vue.js",
          "UI/UX",
          "Product",
        ],
        isExpanded: true,
      },
      {
        id: "1",
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
    isCurrentEmployer: true,
  },
  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "1",
        title: "Front-end Developer",
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
    id: "cellule-verte",
    companyName: "Cellule Verte",
    positions: [
      {
        id: "1",
        title: "Front-end Developer (Internship)",
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
        id: "1",
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
