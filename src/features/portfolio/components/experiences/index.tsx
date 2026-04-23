"use client"

import React from "react"

import { useLocale } from "@/i18n/context"

import { EXPERIENCES } from "../../data/experiences"
import { Panel, PanelHeader, PanelTitle } from "../panel"
import { ExperienceItem } from "./experience-item"

export function Experiences() {
  const { t } = useLocale()

  return (
    <Panel id="experience">
      <PanelHeader>
        <PanelTitle>{t.experience.title}</PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        {EXPERIENCES.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
    </Panel>
  )
}
