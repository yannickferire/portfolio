export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      aria-hidden
      {...props}
    >
      <text
        x="256"
        y="204"
        fill="currentColor"
        fontFamily="var(--font-geist-sans), Geist, ui-sans-serif, system-ui, sans-serif"
        fontSize="240"
        fontWeight="700"
        textAnchor="middle"
        letterSpacing="-12"
      >
        YF
      </text>
    </svg>
  )
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 256"><text x="256" y="204" fill="${color}" font-family="Geist, ui-sans-serif, system-ui, sans-serif" font-size="240" font-weight="700" text-anchor="middle" letter-spacing="-12">YF</text></svg>`
}
