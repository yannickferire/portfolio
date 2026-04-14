"use client"

import Image from "next/image"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"

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
                  <Image
                    src={`/images/tech-stack-icons/${tech.key}-light.svg`}
                    alt={`${tech.title} light icon`}
                    width={32}
                    height={32}
                    className="hidden [html.light_&]:block"
                    unoptimized
                  />
                  <Image
                    src={`/images/tech-stack-icons/${tech.key}-dark.svg`}
                    alt={`${tech.title} dark icon`}
                    width={32}
                    height={32}
                    className="hidden [html.dark_&]:block"
                    unoptimized
                  />
                </>
              ) : (
                <Image
                  src={`/images/tech-stack-icons/${tech.key}.svg`}
                  alt={`${tech.title} icon`}
                  width={32}
                  height={32}
                  unoptimized
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
  const mainStack = TECH_STACK.filter((t) => t.group === "main")
  const alsoStack = TECH_STACK.filter((t) => t.group === "also")

  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Main Stack</PanelTitle>
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
            <PanelTitle>Also worked with</PanelTitle>
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
