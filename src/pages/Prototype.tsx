import { ProjectBrandLink } from "@/components/ProjectBrandLink"
import { typography } from "@/styles/typography"
import { cn } from "@/lib/utils"

export function Prototype() {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <header className="flex h-16 max-h-16 shrink-0 items-center border-b border-border bg-card px-4 sm:px-5">
        <div className="min-w-0 space-y-0.5">
          <h1 className="m-0 min-w-0 p-0">
            <ProjectBrandLink
              className={cn(
                typography.presentationHeaderTitle,
                "inline-block max-w-full truncate"
              )}
            />
          </h1>
          <p className={typography.presentationHeaderSubtitle}>Prototype</p>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-4 py-16">
        <p className={cn(typography.prototypePlaceholder, "text-center")}>
          Prototype — à venir
        </p>
      </main>
    </div>
  )
}
