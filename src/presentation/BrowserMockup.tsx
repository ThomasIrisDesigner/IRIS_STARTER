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
        "overflow-hidden rounded-xl border border-border bg-background shadow-sm"
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-muted/60 px-3 py-2">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-border" aria-hidden />
          <span className="size-2.5 rounded-full bg-border" aria-hidden />
          <span className="size-2.5 rounded-full bg-border" aria-hidden />
        </div>
        <div className="min-w-0 flex-1 rounded-md border border-border bg-background px-2 py-1 text-left">
          <span className={typography.mockupChromeLabel}>
            prototype.local / {screenTitle.toLowerCase().replace(/\s+/g, "-")}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between border-b border-border px-3 py-2">
        <span className={cn(typography.mockupChromeLabel, "text-foreground")}>
          {screenTitle}
        </span>
      </div>
      <div className="min-h-[320px] bg-background p-4 lg:min-h-[380px]">{children}</div>
    </div>
  )
}
