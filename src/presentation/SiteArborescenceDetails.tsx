import { SITE_ARB_DETAIL_ZONES } from "@/data/siteArborescenceDetails"
import { typography } from "@/styles/typography"
import { cn } from "@/lib/utils"

export function SiteArborescenceDetails() {
  return (
    <div className="space-y-6">
      {SITE_ARB_DETAIL_ZONES.map((zone) => (
        <article
          key={zone.id}
          className="overflow-hidden rounded-lg border border-border bg-card ring-1 ring-border/50"
        >
          <header className="border-b border-border bg-muted/40 px-4 py-3 sm:px-5">
            <h3 className={typography.wireframeTitleCompact}>{zone.title}</h3>
            <p className={cn(typography.treeIntro, "mt-1 text-xs sm:text-sm")}>
              {zone.subtitle}
            </p>
          </header>
          <ul className="divide-y divide-border">
            {zone.lines.map((line) => (
              <li
                key={`${zone.id}-${line.label}`}
                className="flex flex-col gap-0.5 px-4 py-3 sm:flex-row sm:items-baseline sm:gap-6 sm:px-5"
              >
                <span className="shrink-0 text-sm font-medium text-foreground sm:w-44">
                  {line.label}
                </span>
                <span className="min-w-0 text-sm leading-snug text-muted-foreground">
                  {line.description}
                </span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}
