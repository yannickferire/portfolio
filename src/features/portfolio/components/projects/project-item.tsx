"use client"

import { BoxIcon, InfinityIcon, LinkIcon } from "lucide-react"
import Image from "next/image"

import {
  Collapsible,
  CollapsibleChevronsIcon,
} from "@/components/base/collapsible-animated"
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/base/ui/collapsible"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"
import { MarkdownClient } from "@/components/markdown-client"
import { Tag } from "@/components/ui/tag"
import { ProseMono } from "@/components/ui/typography"
import { UTM_PARAMS } from "@/config/site"
import { useLocale } from "@/i18n/context"
import { addQueryParams } from "@/utils/url"

import type { Project } from "../../types/projects"

export function ProjectItem({
  className,
  project,
}: {
  className?: string
  project: Project
}) {
  const { t } = useLocale()
  const { start, end } = project.period
  const isOngoing = !end
  const isSinglePeriod = end === start

  // Pick translated description and role based on project id
  const projectsData = t.projectsData as Record<
    string,
    { description?: string; role?: string }
  >
  const translatedData = projectsData[project.id] || {}
  const description = translatedData.description || project.description
  const role = translatedData.role || project.role

  return (
    <Collapsible className={className} defaultOpen={project.isExpanded}>
      <div className="flex items-center hover:bg-accent-muted">
        {project.image ? (
          <a
            href={addQueryParams(project.link, UTM_PARAMS)}
            target="_blank"
            rel="noopener"
            className="shrink-0"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={120}
              height={120}
              quality={100}
              className="aspect-[1200/630] w-48 object-cover select-none"
              unoptimized
            />
          </a>
        ) : project.logo ? (
          <Image
            src={project.logo}
            alt={project.title}
            width={32}
            height={32}
            quality={100}
            className="mx-4 flex size-6 shrink-0 select-none"
            unoptimized
            aria-hidden
          />
        ) : (
          <div className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-line ring-offset-1 ring-offset-background select-none">
            <BoxIcon className="size-4" />
          </div>
        )}

        <div className="flex-1 border-l border-dashed border-line">
          <CollapsibleTrigger className="flex w-full items-center gap-2 p-4 pr-2 text-left">
            <div className="flex-1">
              <h3 className="mb-1 leading-snug font-medium text-balance">
                {project.title}
              </h3>

              {role && (
                <p className="mb-0.5 text-sm text-muted-foreground">{role}</p>
              )}
              <dl className="text-sm text-muted-foreground">
                <dt className="sr-only">{t.projects.period}</dt>
                <dd className="flex items-center gap-0.5">
                  <span>{start}</span>
                  {!isSinglePeriod && (
                    <>
                      <span className="font-mono">—</span>
                      {isOngoing ? (
                        <>
                          <InfinityIcon className="size-4.5 translate-y-[0.5px]" />
                          <span className="sr-only">{t.projects.present}</span>
                        </>
                      ) : (
                        <span>{end}</span>
                      )}
                    </>
                  )}
                </dd>
              </dl>
            </div>

            <Tooltip>
              <TooltipTrigger
                render={
                  <a
                    className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
                    href={addQueryParams(project.link, UTM_PARAMS)}
                    target="_blank"
                    rel="noopener"
                  >
                    <LinkIcon className="pointer-events-none size-4" />
                    <span className="sr-only">{t.projects.openLink}</span>
                  </a>
                }
              />
              <TooltipContent>
                <p>{t.projects.openLink}</p>
              </TooltipContent>
            </Tooltip>

            <div className="shrink-0 text-muted-foreground [&_svg]:size-4">
              <CollapsibleChevronsIcon duration={0.15} />
            </div>
          </CollapsibleTrigger>
        </div>
      </div>

      <CollapsibleContent className="overflow-hidden">
        <div className="space-y-4 border-t border-line p-4">
          {description && (
            <ProseMono>
              <MarkdownClient>{description}</MarkdownClient>
            </ProseMono>
          )}

          {project.skills.length > 0 && (
            <ul className="flex flex-wrap gap-1.5">
              {project.skills.map((skill, index) => (
                <li key={index} className="flex">
                  <Tag>{skill}</Tag>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
