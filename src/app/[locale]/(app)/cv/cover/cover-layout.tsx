"use client"

import {
  LinkIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/icons"
import { USER } from "@/features/portfolio/data/user"
import { useLocale } from "@/i18n/context"
import { Twemoji } from "@/registry/components/twemoji/twemoji"

export function CoverLayout({ children }: { children: React.ReactNode }) {
  const { locale, t } = useLocale()

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

      {/* Cover Letter */}
      <div className="cv-page relative mx-auto max-w-3xl overflow-hidden bg-white text-[13px] leading-[1.7] text-zinc-700 print:max-w-[210mm]">

        {/* ═══ HEADER ═══ */}
        <div>
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
                    Frontend Developer
                  </p>
                  <p className="font-pixel-square text-xs text-zinc-500">
                    {t.profile.flipSentences.slice(0, -1).join(" / ")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="mx-5 mt-4 overflow-hidden rounded-lg border border-zinc-200 p-0.5">
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

        {/* ═══ LETTER CONTENT ═══ */}
        <div className="space-y-4 px-5 pt-8 pb-6">
          {children}
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
