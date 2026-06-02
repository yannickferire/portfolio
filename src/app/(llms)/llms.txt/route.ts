import { SITE_INFO } from "@/config/site"

const content = `# yannickferire.be

> Portfolio of Yannick Ferire, Senior Front-end Developer.

- [About](${SITE_INFO.url}/about.md): A quick intro, tech stack, and how to connect.
- [Experience](${SITE_INFO.url}/experience.md): Highlights from my career and key roles.
- [Projects](${SITE_INFO.url}/projects.md): Selected projects.
`

export const revalidate = false
export const dynamic = "force-static"

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}
