import type { ReactNode } from "react"

import { typography } from "@/styles/typography"
import { cn } from "@/lib/utils"

type PhoneMockupProps = {
  children: ReactNode
  screenTitle: string
}

export function PhoneMockup({ children, screenTitle }: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[280px] rounded-[2.25rem] border border-border bg-muted p-2 shadow-sm"
      )}
    >
      <div className="overflow-hidden rounded-[1.85rem] border border-border bg-background">
        <div className="flex items-center justify-between border-b border-border bg-muted/50 px-3 py-2">
          <span className={cn(typography.mockupChromeLabel, "flex-1 text-center")}>
            {screenTitle}
          </span>
        </div>
        <div className="min-h-[420px] bg-background p-3">{children}</div>
      </div>
    </div>
  )
}
