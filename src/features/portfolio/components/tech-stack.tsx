"use client"

import Image from "next/image"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"
import { useLocale } from "@/i18n/context"

import { TECH_STACK } from "../data/tech-stack"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

function TechItem({ tech }: { tech: (typeof TECH_STACK)[number] }) {
  return (
    <li className="flex">
      <Tooltip>
        <TooltipTrigger
          render={
            <a
              className="flex"
              href={tech.href}
              target="_blank"
              rel="noopener"
              aria-label={tech.title}
            >
              {tech.theme ? (
                <>
                  <img
                    src={`/images/tech-stack-icons/${tech.key}-light.svg`}
                    alt={tech.title}
                    width={32}
                    height={32}
                    className="hidden [html.light_&]:block"
                  />
                  <img
                    src={`/images/tech-stack-icons/${tech.key}-dark.svg`}
                    alt={tech.title}
                    width={32}
                    height={32}
                    className="hidden [html.dark_&]:block"
                  />
                </>
              ) : (
                <img
                  src={`/images/tech-stack-icons/${tech.key}.svg`}
                  alt={tech.title}
                  width={32}
                  height={32}
                />
              )}
            </a>
          }
        />
        <TooltipContent>
          <p>{tech.title}</p>
        </TooltipContent>
      </Tooltip>
    </li>
  )
}

export function TechStack() {
  const { t } = useLocale()
  const mainStack = TECH_STACK.filter((tech) => tech.group === "main")
  const alsoStack = TECH_STACK.filter((tech) => tech.group === "also")

  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>{t.stack.mainTitle}</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <ul className="flex flex-wrap gap-4 select-none">
          {mainStack.map((tech) => (
            <TechItem key={tech.key} tech={tech} />
          ))}
        </ul>
      </PanelContent>

      {alsoStack.length > 0 && (
        <>
          <PanelHeader className="screen-line-top">
            <PanelTitle>{t.stack.alsoTitle}</PanelTitle>
          </PanelHeader>

          <PanelContent>
            <ul className="flex flex-wrap gap-4 select-none">
              {alsoStack.map((tech) => (
                <TechItem key={tech.key} tech={tech} />
              ))}
            </ul>
          </PanelContent>
        </>
      )}
    </Panel>
  )
}
