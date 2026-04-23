"use client"

import { useLocale } from "@/i18n/context"

import { PROJECTS } from "../../data/projects"
import { Panel, PanelHeader, PanelTitle } from "../panel"
import { ProjectCardItem } from "./project-card-item"

export function Projects() {
  const { t } = useLocale()

  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>{t.projects.title}</PanelTitle>
      </PanelHeader>

      <div className="relative py-4">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-line" />
          <div className="border-l border-line" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCardItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Panel>
  )
}
