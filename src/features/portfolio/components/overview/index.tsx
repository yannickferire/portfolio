import { LinkIcon, MapPinIcon } from "lucide-react"

import { USER } from "@/features/portfolio/data/user"
import { urlToName } from "@/utils/url"

import { Panel, PanelContent } from "../panel"
import { EmailItem } from "./email-item"
import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item"
import { JobItem } from "./job-item"
import { PhoneItem } from "./phone-item"

export function Overview() {
  return (
    <Panel className="after:content-none">
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="space-y-2.5">
        <div className="mb-4 border border-dashed border-emerald-500/40 bg-emerald-500/5 px-3 py-2 text-center text-sm leading-none text-emerald-600 dark:text-emerald-400">
          <span className="font-medium">Open to new opportunities</span>
          <span className="text-emerald-600/60 dark:text-emerald-400/60">
            {" – Remote / Hybrid (Brussels – Liège – Namur)"}
          </span>
        </div>

        {USER.jobs.map((job, index) => {
          return (
            <JobItem
              key={index}
              title={job.title}
              company={job.company}
              website={job.website}
              experienceId={job.experienceId}
            />
          )
        })}

        <div className="grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
          <IntroItem>
            <IntroItemIcon>
              <LinkIcon />
            </IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink
                href={USER.website}
                aria-label={`Personal website: ${urlToName(USER.website)}`}
              >
                {urlToName(USER.website)}
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>

          <EmailItem email={USER.email} />

          <PhoneItem phoneNumber={USER.phoneNumber} />

          <IntroItem>
            <IntroItemIcon>
              <MapPinIcon />
            </IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(USER.address)}`}
                aria-label={`Location: ${USER.address}`}
              >
                Berloz,{" "}
                <span className="inline-block size-4 overflow-hidden rounded-[2px] align-[-2px]">
                  <svg
                    className="size-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 900 600"
                    aria-hidden
                  >
                    <rect width="300" height="600" fill="#000" />
                    <rect x="300" width="300" height="600" fill="#FAE042" />
                    <rect x="600" width="300" height="600" fill="#ED2939" />
                  </svg>
                </span>
                {" Belgium"}
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>

        </div>
      </PanelContent>
    </Panel>
  )
}
