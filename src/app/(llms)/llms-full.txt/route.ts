import { SITE_INFO } from "@/config/site"
import { EXPERIENCES } from "@/features/portfolio/data/experiences"
import { PROJECTS } from "@/features/portfolio/data/projects"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"
import { TECH_STACK } from "@/features/portfolio/data/tech-stack"
import { USER } from "@/features/portfolio/data/user"

const aboutText = `## About

Senior Front-end Developer with 12+ years of experience, dedicated to the same company.
Sole front-end developer for the past 6 years, owning the full UI layer end-to-end.
Versatile profile: UI, UX, product thinking, front-end, back-end.
Passionate about side projects and new technologies.

### Personal Information

- Name: ${USER.displayName}
- Location: ${USER.address}
- Website: ${USER.website}

### Social Links

${SOCIAL_LINKS.map((item) => `- [${item.title}](${item.href})`).join("\n")}

### Tech Stack

${TECH_STACK.map((item) => `- [${item.title}](${item.href})`).join("\n")}\n`

const experienceText = `## Experience

${EXPERIENCES.map((item) =>
  item.positions
    .map((position) => {
      const skills = position.skills?.join(", ") || "N/A"
      return `### ${position.title} | ${item.companyName}\n\nDuration: ${position.employmentPeriod.start} - ${position.employmentPeriod.end || "Present"}\n\nSkills: ${skills}\n\n${position.description?.trim() || ""}`
    })
    .join("\n\n")
).join("\n\n")}
`

const projectsText = `## Projects

${PROJECTS.map((item) => {
  const skills = `\n\nSkills: ${item.skills.join(", ")}`
  const description = item.description ? `\n\n${item.description.trim()}` : ""
  return `### ${item.title}\n\nProject URL: ${item.link}${skills}${description}`
}).join("\n\n")}
`

function getContent() {
  return `<SYSTEM>This document contains comprehensive information about ${USER.displayName}'s professional profile and portfolio. It includes personal details, work experience, projects, and skills.</SYSTEM>

# yannickferire.be

> Portfolio of Yannick Ferire, Senior Front-end Developer.

${aboutText}
${experienceText}
${projectsText}`
}

export const revalidate = false
export const dynamic = "force-static"

export async function GET() {
  return new Response(getContent(), {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}
