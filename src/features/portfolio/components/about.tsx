"use client"

import { MarkdownClient } from "@/components/markdown-client"
import { ProseMono } from "@/components/ui/typography"
import { useLocale } from "@/i18n/context"

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

const careerStartDate = new Date(2013, 8)
const yearsOfExperience = Math.floor(
  (Date.now() - careerStartDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000)
)

export function About() {
  const { t } = useLocale()
  const content = t.about.content.replace(
    "{yearsOfExperience}",
    String(yearsOfExperience)
  )

  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle>{t.about.title}</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <ProseMono>
          <MarkdownClient>{content}</MarkdownClient>
        </ProseMono>
      </PanelContent>
    </Panel>
  )
}
