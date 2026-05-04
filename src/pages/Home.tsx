import { PROJECT_DISPLAY_NAME } from "@/config/project"
import { typography } from "@/styles/typography"
import { cn } from "@/lib/utils"

export function Home() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background px-4">
      <p className={cn(typography.homePlaceholder, "text-center")}>
        {PROJECT_DISPLAY_NAME}
      </p>
    </div>
  )
}
