"use client"

import Image from "next/image"

import {
  CodeXmlIcon,
  GraduationCapIcon,
  LinkIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/icons"
import { EXPERIENCES } from "@/features/portfolio/data/experiences"
import { TECH_STACK } from "@/features/portfolio/data/tech-stack"
import { USER } from "@/features/portfolio/data/user"
import { useLocale } from "@/i18n/context"
import { Twemoji } from "@/registry/components/twemoji/twemoji"

const careerStartDate = new Date(2013, 8)
const yearsOfExperience = Math.floor(
  (Date.now() - careerStartDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000)
)

export default function CVPage() {
  const { locale, t } = useLocale()

  const experiencesData = t.experiencesData as Record<
    string,
    { title?: string; description?: string }
  >

  const mainStack = TECH_STACK.filter((s) => s.group === "main")
  const alsoStack = TECH_STACK.filter((s) => s.group === "also")

  return (
    <>
      {/* Print button */}
      <div className="fixed top-4 right-4 z-50 print:hidden">
        <button
          onClick={() => window.print()}
          className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80"
        >
          {locale === "fr" ? "Imprimer / PDF" : "Print / PDF"}
        </button>
      </div>

      {/* CV */}
      <div className="cv-page relative mx-auto max-w-3xl overflow-hidden bg-white text-[12px] leading-[1.6] text-zinc-700 print:max-w-[210mm]">

        {/* ═══ HEADER – Same as site ═══ */}
        <div>
          {/* Profile row: avatar + name + role */}
          <div className="flex items-end gap-5 px-5 pt-6">
            <div className="shrink-0">
              <img
                className="size-28 rounded-full"
                alt="Avatar"
                src={USER.avatar}
              />
            </div>

            <div className="flex flex-1 flex-col">

              <div>
                <div className="flex items-center gap-2 pb-1.5">
                  <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
                    {USER.displayName}
                  </h1>
                </div>

                <div className="space-y-0.5 pb-1.5">
                  <p className="font-pixel-square text-lg text-zinc-900">
                    Fullstack Developer
                  </p>
                  <p className="font-pixel-square text-xs text-zinc-500">
                    {t.profile.flipSentences.slice(0, -1).join(" – ")}
                    <br />
                    {t.profile.flipSentences[t.profile.flipSentences.length - 1]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Open to work + Contact info */}
          <div className="mx-5 mt-4 overflow-hidden rounded-lg border border-zinc-200 p-0.5">
            <div className="rounded-md border border-dashed border-emerald-500/40 bg-emerald-50 px-3 py-2 text-center text-sm leading-none text-emerald-700">
              <span className="mr-2 inline-block size-2 rounded-full bg-emerald-500" />
              <span className="font-medium">{t.overview.openToWork}</span>
              <span className="text-emerald-600/50">
                {t.overview.openToWorkDetails}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-2 px-3 py-2.5 text-[13px]">
              <div className="flex items-center gap-2">
                <LinkIcon size={14} />
                <span>yannickferire.be</span>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon size={14} />
                <span>yannick.ferire@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon size={14} />
                <span>
                  <span className="text-zinc-400">+32</span> 470 95 05 79
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon size={14} />
                <span>
                  {t.overview.location}{" "}
                  <Twemoji className="inline-block size-4 align-[-3px]">🇧🇪</Twemoji>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ TWO COLUMNS ═══ */}
        <div className="grid grid-cols-[1fr_190px] gap-8 px-5 py-6">
          {/* ─── LEFT: Main content ─── */}
          <div className="space-y-5">
            {/* About */}
            <section>
              <SectionTitle>{t.about.title}</SectionTitle>
              <div className="space-y-2 text-zinc-600">
                {locale === "fr" ? (
                  <>
                    <p>
                      <strong>Développeur front-end depuis {yearsOfExperience}+ ans</strong>, fidèle à la même entreprise.
                    </p>
                    <p>
                      <strong>Seul front-end developer depuis 6 ans</strong>, en charge de toute la couche UI de bout en bout.
                    </p>
                    <p>
                      Profil <strong>polyvalent</strong> : UI, UX, vision produit, front-end, back-end.
                      J'ai touché à tout, ce qui me donne une compréhension profonde de chaque rôle.
                    </p>
                    <p>
                      Passionné par les <strong>side projects</strong> et les nouvelles technologies.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      <strong>Front-end developer for {yearsOfExperience}+ years</strong>, dedicated to the same company.
                    </p>
                    <p>
                      <strong>Sole front-end developer for the past 6 years</strong>, owning the full UI layer end-to-end.
                    </p>
                    <p>
                      A truly <strong>versatile profile</strong>: UI, UX, product thinking, front-end, back-end.
                      I've touched it all, giving me a deep understanding of every role.
                    </p>
                    <p>
                      Passionate about <strong>side projects</strong> and new technologies.
                    </p>
                  </>
                )}
              </div>
            </section>

            {/* Experience */}
            <section>
              <SectionTitle>{t.experience.title}</SectionTitle>
              <div className="space-y-3.5">
                {EXPERIENCES.map((exp) =>
                  exp.positions.map((pos) => {
                    const translated = experiencesData[pos.id] || {}
                    const title = translated.title || pos.title
                    const description =
                      translated.description || pos.description
                    const isOngoing = !pos.employmentPeriod.end

                    return (
                      <div key={`${exp.id}-${pos.id}`} className="flex gap-3">
                        <div className="mt-[3px] flex size-5 shrink-0 items-center justify-center rounded text-zinc-400">
                          {exp.id === "education" ? (
                            <GraduationCapIcon size={16} />
                          ) : (
                            <CodeXmlIcon size={16} />
                          )}
                        </div>
                        <div className="flex-1">
                        <div className="flex items-baseline justify-between gap-2">
                          <div>
                            <h3 className="text-[12px] font-bold text-zinc-900">
                              {title}
                            </h3>
                            <p className="text-[11px] text-zinc-400">
                              {exp.companyName}
                              {pos.employmentType && <> – {pos.employmentType}</>}
                            </p>
                          </div>
                          <span className="shrink-0 text-[11px] tabular-nums text-zinc-400">
                            {pos.employmentPeriod.start} –{" "}
                            {isOngoing
                              ? locale === "fr" ? "Auj." : "Present"
                              : pos.employmentPeriod.end}
                          </span>
                        </div>
                        {description && (
                          <p className="mt-1 text-zinc-600">{description}</p>
                        )}
                      </div>
                      </div>
                    )
                  })
                )}
              </div>
            </section>

            {/* Stack */}
            <section>
              <SectionTitle>Stack</SectionTitle>
              <div className="flex flex-wrap gap-2">
                {mainStack.map((tech) => (
                  <div
                    key={tech.key}
                    className="flex items-center gap-1.5 rounded-md bg-zinc-50 px-2 py-1"
                  >
                    <Image
                      src={`/images/tech-stack-icons/${tech.theme ? `${tech.key}-light` : tech.key}.svg`}
                      alt={tech.title}
                      width={14}
                      height={14}
                      className="size-3.5"
                      unoptimized
                    />
                    <span className="text-[11px] font-medium text-zinc-600">
                      {tech.title}
                    </span>
                  </div>
                ))}
              </div>

              {alsoStack.length > 0 && (
                <>
                  <h3 className="mt-3 mb-1.5 text-[11px] font-medium text-zinc-400">
                    {t.stack.alsoTitle}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {alsoStack.map((tech) => (
                      <div
                        key={tech.key}
                        className="flex items-center gap-1.5 rounded-md bg-zinc-50/50 px-2 py-1"
                      >
                        <Image
                          src={`/images/tech-stack-icons/${tech.theme ? `${tech.key}-light` : tech.key}.svg`}
                          alt={tech.title}
                          width={14}
                          height={14}
                          className="size-3.5 opacity-50"
                          unoptimized
                        />
                        <span className="text-[11px] font-medium text-zinc-400">
                          {tech.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </section>
          </div>

          {/* ─── RIGHT: Sidebar ─── */}
          <aside className="space-y-5 border-l border-zinc-100 pl-6">
            {/* Links */}
            <section>
              <SmallTitle>{locale === "fr" ? "En ligne" : "Online"}</SmallTitle>
              <div className="space-y-2">
                <SidebarLink icon="/images/github.svg" text="yannickferire" />
                <SidebarLink icon="/images/linkedin.svg" text="yannick-ferire" />
                <SidebarLink icon="/images/x.svg" text="@yannick_ferire" />
              </div>
            </section>

            {/* Languages */}
            <section>
              <SmallTitle>{locale === "fr" ? "Langues" : "Languages"}</SmallTitle>
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="font-medium text-zinc-700">
                    {locale === "fr" ? "Français" : "French"}
                  </span>
                  <span className="text-zinc-400">
                    {locale === "fr" ? "Natif" : "Native"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-zinc-700">
                    {locale === "fr" ? "Anglais" : "English"}
                  </span>
                  <span className="text-zinc-400">
                    {locale === "fr" ? "Professionnel" : "Professional"}
                  </span>
                </div>
              </div>
            </section>

            {/* Interests */}
            <section>
              <SmallTitle>{locale === "fr" ? "Intérêts" : "Interests"}</SmallTitle>
              <ul className="space-y-0.5">
                <li>Nature</li>
                <li>Padel, Football, Cycling</li>
                <li>Tech</li>
              </ul>
            </section>
          </aside>
        </div>

        {/* ═══ WATERMARK SIGNATURE ═══ */}
        <div
          className="pointer-events-none absolute inset-x-0 -bottom-5 select-none text-center text-[72px] leading-none opacity-[0.06]"
          style={{ fontFamily: "var(--font-handwritten)" }}
          aria-hidden
        >
          Yannick Ferire
        </div>
      </div>

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          header[class*="sticky"],
          footer,
          [class*="fixed"] {
            display: none !important;
          }
          .cv-page {
            width: 210mm;
            min-height: 297mm;
            max-height: 297mm;
            overflow: hidden;
          }
        }

        @media screen {
          .cv-page {
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.06);
            min-height: 297mm;
          }
        }
      `}</style>
    </>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-2.5 border-b border-zinc-200 pb-1.5 font-pixel-square text-[13px] uppercase tracking-wider text-zinc-800">
      {children}
    </h2>
  )
}

function SmallTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-2 font-pixel-square text-[10px] uppercase tracking-widest text-zinc-400">
      {children}
    </h2>
  )
}

function SidebarLink({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={icon}
        alt=""
        width={14}
        height={14}
        className="size-3.5 shrink-0"
        unoptimized
      />
      <span className="text-zinc-600">{text}</span>
    </div>
  )
}
