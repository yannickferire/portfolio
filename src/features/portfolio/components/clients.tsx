"use client"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"
import { UTM_PARAMS } from "@/config/site"
import { useLocale } from "@/i18n/context"
import { addQueryParams } from "@/utils/url"

import { CLIENTS } from "../data/clients"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

function ClientMark({ client }: { client: (typeof CLIENTS)[number] }) {
  const imgClass = "h-10 w-auto max-w-[130px] object-contain"

  const mark = client.themed ? (
    <>
      <img
        src={`/images/clients/${client.logo}-light.${client.ext ?? "svg"}`}
        alt={client.name}
        className={`${imgClass} hidden [html.light_&]:block`}
      />
      <img
        src={`/images/clients/${client.logo}-dark.${client.ext ?? "svg"}`}
        alt={client.name}
        className={`${imgClass} hidden [html.dark_&]:block`}
      />
    </>
  ) : client.logo ? (
    <img
      src={`/images/clients/${client.logo}`}
      alt={client.name}
      className={imgClass}
    />
  ) : (
    <span className="text-sm font-semibold tracking-tight whitespace-nowrap">
      {client.short}
    </span>
  )

  const inner = (
    <span className="client-mark flex h-10 shrink-0 items-center justify-center px-6">
      {mark}
    </span>
  )

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          client.href ? (
            <a
              className="flex shrink-0"
              href={addQueryParams(client.href, UTM_PARAMS)}
              target="_blank"
              rel="noopener"
              aria-label={client.name}
            >
              {inner}
            </a>
          ) : (
            <span className="flex shrink-0">{inner}</span>
          )
        }
      />
      <TooltipContent>
        <p className="font-medium">{client.name}</p>
        <p className="text-muted-foreground">{client.sector}</p>
      </TooltipContent>
    </Tooltip>
  )
}

export function Clients() {
  const { t } = useLocale()

  return (
    <Panel id="clients">
      <PanelHeader>
        <PanelTitle>{t.clients.title}</PanelTitle>
      </PanelHeader>

      <PanelContent className="px-0">
        <p className="px-4 pb-5 text-sm text-muted-foreground">
          {t.clients.subtitle}
        </p>

        <div className="client-marquee group relative overflow-hidden">
          <div className="client-track flex w-max items-center">
            {/* Two passes so the loop is seamless at -50%. */}
            {[0, 1].map((pass) => (
              <div key={pass} className="flex items-center" aria-hidden={pass === 1}>
                {CLIENTS.map((client) => (
                  <ClientMark key={`${pass}-${client.key}`} client={client} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </PanelContent>

      <style jsx global>{`
        @keyframes client-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .client-marquee {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 8%,
            black 92%,
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent,
            black 8%,
            black 92%,
            transparent
          );
        }

        .client-track {
          animation: client-scroll 40s linear infinite;
        }

        .client-marquee:hover .client-track {
          animation-play-state: paused;
        }

        .client-mark {
          filter: grayscale(1);
          opacity: 0.7;
          transition:
            filter 0.25s ease,
            opacity 0.25s ease;
        }

        .client-mark:hover {
          filter: grayscale(0);
          opacity: 1;
        }

        @media (prefers-reduced-motion: reduce) {
          .client-track {
            animation: none;
          }
        }
      `}</style>
    </Panel>
  )
}
