import {
  ARBO_ACCENT_VARS,
  SITE_ARB_ROOT,
  SITE_ARB_SECTIONS,
  getPagesForSection,
  getTemplateForPage,
} from "@/data/siteArborescence"
import { typography } from "@/styles/typography"
import { cn } from "@/lib/utils"

const columnCell = "min-w-0 px-0 py-2 lg:px-5 lg:py-0"

function ColumnHeader({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        typography.arborescenceColumnHeader,
        "mb-4 border-b border-border pb-3"
      )}
    >
      {children}
    </div>
  )
}

export function SiteArborescenceBoard() {
  return (
    <div className="w-full overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch]">
      <div className="inline-block min-w-[min(100%,920px)] w-full lg:min-w-0">
        <div
          className={cn(
            "grid grid-cols-1 gap-y-10 divide-y divide-border",
            "lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)_minmax(0,1.25fr)_minmax(0,1.1fr)]",
            "lg:gap-x-0 lg:gap-y-0 lg:divide-x lg:divide-y-0"
          )}
        >
          {/* Accueil */}
          <section className={columnCell}>
            <ColumnHeader>Accueil</ColumnHeader>
            <div className="rounded-lg bg-primary px-5 py-6 text-primary-foreground ring-1 ring-foreground/10">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground/65">
                Entrée
              </p>
              <p className="mt-3 text-base font-semibold leading-snug tracking-tight">
                {SITE_ARB_ROOT.title}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-primary-foreground/75">
                {SITE_ARB_ROOT.subtitle}
              </p>
            </div>
          </section>

          {/* Niveau 1 */}
          <section className={columnCell}>
            <ColumnHeader>Niveau 1</ColumnHeader>
            <div className="flex flex-col gap-3">
              {SITE_ARB_SECTIONS.map((section, i) => (
                <div
                  key={section.id}
                  className={cn(
                    "rounded-lg border border-border bg-card py-3 pl-4 pr-3 ring-1 ring-border/50",
                    "border-l-[3px] bg-gradient-to-r from-muted/25 to-card"
                  )}
                  style={{
                    borderLeftColor: ARBO_ACCENT_VARS[i % ARBO_ACCENT_VARS.length],
                  }}
                >
                  <p className="text-sm font-semibold leading-snug text-foreground">
                    {section.title}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Niveau 2 — sous-pages */}
          <section className={columnCell}>
            <ColumnHeader>
              <span className="block">Niveau 2</span>
              <span className="mt-1 block font-normal normal-case tracking-normal text-muted-foreground">
                Sous-pages
              </span>
            </ColumnHeader>
            <div className="flex flex-col gap-8">
              {SITE_ARB_SECTIONS.map((section, i) => {
                const pages = getPagesForSection(section.id)
                if (pages.length === 0) return null
                const accent = ARBO_ACCENT_VARS[i % ARBO_ACCENT_VARS.length]
                return (
                  <div key={section.id}>
                    <p
                      className={cn(
                        typography.arborescenceGroupLabel,
                        "mb-2.5 flex items-center gap-2"
                      )}
                    >
                      <span
                        className="inline-block h-3 w-1 shrink-0 rounded-full"
                        style={{ backgroundColor: accent }}
                        aria-hidden
                      />
                      {section.title}
                    </p>
                    <div
                      className="space-y-1.5 pl-3"
                      style={{ borderLeft: `2px solid ${accent}` }}
                    >
                      {pages.map((page) => (
                        <div
                          key={page.id}
                          className="rounded-md border border-border bg-background px-3 py-2 text-sm font-medium leading-snug text-foreground"
                        >
                          {page.title}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Niveau 3 — gabarits */}
          <section className={columnCell}>
            <ColumnHeader>
              <span className="block">Niveau 3</span>
              <span className="mt-1 block font-normal normal-case tracking-normal text-muted-foreground">
                Gabarits
              </span>
            </ColumnHeader>
            <div className="flex flex-col gap-8">
              {SITE_ARB_SECTIONS.map((section) => {
                const pages = getPagesForSection(section.id)
                if (pages.length === 0) return null
                return (
                  <div key={`tpl-${section.id}`} className="space-y-2.5">
                    <p
                      className={cn(
                        typography.arborescenceGroupLabel,
                        "text-muted-foreground"
                      )}
                    >
                      {section.title}
                    </p>
                    <div className="space-y-2.5">
                      {pages.map((page) => {
                        const tpl = getTemplateForPage(page.id)
                        return (
                          <div
                            key={page.id}
                            className="overflow-hidden rounded-md border border-border bg-card ring-1 ring-border/40"
                          >
                            <div className="border-b border-border bg-muted px-3 py-2">
                              <p className="text-xs font-semibold leading-tight text-foreground">
                                {tpl?.title ?? "Gabarit"}
                              </p>
                              <p className="mt-0.5 text-[0.65rem] text-muted-foreground">
                                {page.title}
                              </p>
                            </div>
                            {tpl ? (
                              <ul className="space-y-1.5 px-3 py-2.5 text-xs leading-snug text-muted-foreground">
                                {tpl.lines.map((line, idx) => (
                                  <li key={`${page.id}-${idx}`}>{line}</li>
                                ))}
                              </ul>
                            ) : (
                              <p className="px-3 py-2.5 text-xs text-muted-foreground">
                                Structure à définir
                              </p>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
