import { cn } from "@/lib/utils"

export function ChanhDaiMark({
  className,
  short = false,
  ...props
}: React.ComponentProps<"span"> & { short?: boolean }) {
  return (
    <span
      style={{ fontFamily: "var(--font-handwritten)" }}
      className={cn("text-4xl leading-none", className)}
      {...props}
    >
      {short ? "YF" : "Yannick Ferire"}
    </span>
  )
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 256"><text x="256" y="200" fill="${color}" font-family="Homemade Apple, cursive" font-size="100" font-weight="400" text-anchor="middle">YF</text></svg>`
}
