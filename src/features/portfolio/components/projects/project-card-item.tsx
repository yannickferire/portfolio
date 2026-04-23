"use client"

import Image from "next/image"

import { UTM_PARAMS } from "@/config/site"
import { useLocale } from "@/i18n/context"
import { cn } from "@/lib/utils"
import { addQueryParams } from "@/utils/url"

import type { Project } from "../../types/projects"

const SKILL_ICONS: Record<string, string> = {
  "Next.js": "/images/tech-stack-icons/nextjs2-light.svg",
  "Tailwind CSS": "/images/tech-stack-icons/tailwindcss.svg",
  Supabase: "/images/tech-stack-icons/supabase.svg",
  BetterAuth: "/images/tech-stack-icons/betterauth-light.svg",
  "shadcn/ui": "/images/tech-stack-icons/shadcn-ui-light.svg",
  Laravel: "/images/tech-stack-icons/laravel.svg",
  Svelte: "/images/tech-stack-icons/svelte.svg",
  "Vue.js": "/images/tech-stack-icons/vuejs.svg",
}

export function ProjectCardItem({ project }: { project: Project }) {
  const { t } = useLocale()

  const projectsData = t.projectsData as Record<
    string,
    { description?: string; role?: string }
  >
  const translatedData = projectsData[project.id] || {}
  const role = translatedData.role || project.role
  const description = translatedData.description || project.description

  return (
    <a
      href={addQueryParams(project.link, UTM_PARAMS)}
      target="_blank"
      rel="noopener"
      className={cn(
        "group flex flex-col gap-2 p-2 transition-[background-color] ease-out hover:bg-accent-muted",
        "max-sm:screen-line-top max-sm:screen-line-bottom",
        "sm:nth-[2n+1]:screen-line-top sm:nth-[2n+1]:screen-line-bottom"
      )}
    >
      {project.image && (
        <div className="relative select-none [&_img]:aspect-[1200/630] [&_img]:rounded-xl">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={630}
            quality={100}
            unoptimized
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />
        </div>
      )}

      <div className="flex flex-col gap-1 p-2">
        <h3 className="text-lg leading-snug font-medium text-balance">
          {project.title}
        </h3>

        {role && (
          <p className="text-sm text-muted-foreground">{role}</p>
        )}

        {description && (
          <p className="text-sm">{description}</p>
        )}

        {project.skills.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {project.skills.map((skill, index) => {
              const icon = SKILL_ICONS[skill]
              if (!icon) return null
              return (
                <Image
                  key={index}
                  src={icon}
                  alt={skill}
                  title={skill}
                  width={20}
                  height={20}
                  className="size-5 grayscale opacity-40"
                  unoptimized
                />
              )
            })}
          </div>
        )}
      </div>
    </a>
  )
}
