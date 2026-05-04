import { useId, type ReactNode } from "react"

import { cn } from "@/lib/utils"

type PhoneMockupProps = {
  children: ReactNode
  screenTitle: string
}

export function PhoneMockup({ children, screenTitle }: PhoneMockupProps) {
  const reactId = useId()
  const titleId = `mockup-title-${reactId.replace(/:/g, "")}`

  return (
    <div
      role="region"
      aria-labelledby={titleId}
      className={cn(
        "mx-auto flex aspect-[9/19] h-[min(34rem,calc(100svh-10rem))] w-auto max-w-[min(270px,92vw)] shrink-0 flex-col"
      )}
    >
      <span id={titleId} className="sr-only">
        {screenTitle}
      </span>
      <div
        className={cn(
          "flex min-h-0 flex-1 flex-col rounded-[2.75rem] p-[11px]",
          "bg-[var(--color-mockup-bezel)]"
        )}
      >
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-[2.05rem] bg-background">
          <div
            className="flex shrink-0 flex-col items-center justify-center bg-[var(--color-mockup-bezel)] pb-2 pt-2.5"
            aria-hidden
          >
            <div className="h-[1.35rem] w-[4.5rem] shrink-0 rounded-full bg-[var(--color-mockup-island)]" />
          </div>
          <div className="min-h-0 flex-1 overflow-auto px-2.5 pb-2 pt-1.5">
            {children}
          </div>
          <div className="flex shrink-0 justify-center bg-background pb-2 pt-1">
            <div
              className="h-[3px] w-9 rounded-full bg-[var(--color-mockup-home-bar)]"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </div>
  )
}
