import { USER } from "@/features/portfolio/data/user"
import { TextFlip } from "@/registry/components/text-flip"


export function ProfileHeader() {
  return (
    <div className="screen-line-bottom flex border-x border-line">
      <div className="shrink-0 border-r border-line">
        <div className="mx-0.5 my-0.75">
          <img
            className="size-30 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt="Avatar"
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex grow items-end pb-1 pl-4" />

        <div className="border-t border-line">
          <div className="flex items-center gap-2 py-1.5 pl-4">
            <h1 className="translate-y-px text-3xl font-semibold tracking-tight">
              {USER.displayName}
            </h1>
          </div>

          <div className="h-12 translate-y-[0.5px] border-t border-line py-0.5 pl-4 sm:h-8">
            <span className="font-pixel-square text-sm text-muted-foreground">
              Fullstack Developer –{" "}
            </span>
            <TextFlip
              className="inline font-pixel-square text-sm text-balance text-muted-foreground"
              variants={{
                initial: { y: -10, opacity: 0 },
                animate: { y: -1, opacity: 1 },
                exit: { y: 10, opacity: 0 },
              }}
              interval={4}
            >
              {USER.flipSentences}
            </TextFlip>
          </div>
        </div>
      </div>
    </div>
  )
}
