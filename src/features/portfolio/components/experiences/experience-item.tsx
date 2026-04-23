"use client"

import Image from "next/image"

import { UTM_PARAMS } from "@/config/site"
import { useLocale } from "@/i18n/context"
import { addQueryParams } from "@/utils/url"

import type { Experience } from "../../types/experiences"
import { ExperiencePositionItem } from "./experience-position-item"

export function ExperienceItem({ experience }: { experience: Experience }) {
  const { locale, t } = useLocale()

  return (
    <div
      id={`experience-${experience.id}`}
      className="screen-line-bottom scroll-mt-14 space-y-4 py-4"
    >
      <div className="flex items-center gap-3">
        <div className="flex size-6 shrink-0 items-center justify-center select-none">
          {experience.companyLogo ? (
            <Image
              src={experience.companyLogo}
              alt={`${experience.companyName} logo`}
              width={24}
              height={24}
              quality={100}
              className="rounded-full"
              unoptimized
              aria-hidden
            />
          ) : (
            <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
          )}
        </div>

        <h3 className="text-lg leading-snug font-semibold">
          {experience.companyWebsite ? (
            <a
              className="underline-offset-4 hover:underline"
              href={addQueryParams(experience.companyWebsite, UTM_PARAMS)}
              target="_blank"
              rel="noopener"
            >
              {experience.companyName}
            </a>
          ) : (
            experience.companyName
          )}
        </h3>

        {experience.positions.length > 1 && (() => {
          const starts = experience.positions.map((p) => p.employmentPeriod.start)
          const ends = experience.positions.map((p) => p.employmentPeriod.end)
          const earliest = starts.sort()[0]
          const hasOngoing = ends.some((e) => !e)
          const latest = hasOngoing ? null : ends.filter(Boolean).sort().reverse()[0]

          const parseDate = (d: string) => {
            const parts = d.split(".")
            if (parts.length === 2) return new Date(Number(parts[1]), Number(parts[0]) - 1)
            return new Date(Number(parts[0]), 0)
          }

          const startDate = parseDate(earliest)
          const endDate = latest ? parseDate(latest) : new Date()
          const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth()
          const years = Math.floor(months / 12)
          const remainingMonths = months % 12

          const yrLabel = locale === "fr" ? "an" : "yr"
          const yrsPluralLabel = locale === "fr" ? "ans" : "yrs"
          const moLabel = locale === "fr" ? "mois" : "mo"
          const mosPluralLabel = locale === "fr" ? "mois" : "mos"

          const duration = years > 0
            ? remainingMonths > 0
              ? `${years} ${years > 1 ? yrsPluralLabel : yrLabel} ${remainingMonths} ${remainingMonths > 1 ? mosPluralLabel : moLabel}`
              : `${years} ${years > 1 ? yrsPluralLabel : yrLabel}`
            : `${remainingMonths} ${remainingMonths > 1 ? mosPluralLabel : moLabel}`

          return (
            <span className="text-sm text-muted-foreground">{duration}</span>
          )
        })()}

        {experience.isCurrentEmployer && (
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-info" />
            <span className="sr-only">{t.experience.currentEmployer}</span>
          </span>
        )}
      </div>

      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        {experience.positions.map((position) => (
          <ExperiencePositionItem key={position.id} position={position} />
        ))}
      </div>
    </div>
  )
}
