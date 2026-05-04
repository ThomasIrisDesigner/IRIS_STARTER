import type { ReactNode } from "react"

import { typography } from "@/styles/typography"
import { cn } from "@/lib/utils"

type BrowserMockupProps = {
  children: ReactNode
  screenTitle: string
}

export function BrowserMockup({ children, screenTitle }: BrowserMockupProps) {
  return (
    <div
      className={cn(
        "flex min-h-0 w-full max-w-full flex-col",
        "max-h-[min(26rem,calc(100svh-10rem))]"
      )}
    >
      <div
        className={cn(
          "flex min-h-0 flex-1 flex-col rounded-2xl p-[11px]",
          "bg-[var(--color-mockup-bezel)]"
        )}
      >
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl bg-background">
          <div className="flex shrink-0 items-center gap-2 border-b border-border bg-muted/60 px-2.5 py-1.5">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-border" aria-hidden />
              <span className="size-2.5 rounded-full bg-border" aria-hidden />
              <span className="size-2.5 rounded-full bg-border" aria-hidden />
            </div>
            <div className="min-w-0 flex-1 rounded-md border border-border bg-background px-2 py-1 text-left">
              <span className={typography.mockupChromeLabel}>
                prototype.local /{" "}
                {screenTitle.toLowerCase().replace(/\s+/g, "-")}
              </span>
            </div>
          </div>
          <div className="flex shrink-0 items-center justify-between border-b border-border px-2.5 py-1.5">
            <span className={cn(typography.mockupChromeLabel, "text-foreground")}>
              {screenTitle}
            </span>
          </div>
          <div className="min-h-0 flex-1 overflow-auto bg-background p-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
