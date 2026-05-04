import { Link } from "react-router-dom"
import { ChevronRight, ExternalLink } from "lucide-react"

import { ProjectBrandLink } from "@/components/ProjectBrandLink"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { typography } from "@/styles/typography"
import { cn } from "@/lib/utils"

const hubCardClass =
  "border border-transparent transition-colors hover:border-border hover:bg-muted/20"

export function Home() {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-4 py-12 sm:px-6 sm:py-16">
        <header className="flex flex-col items-center text-center">
          <h1 className="m-0 max-w-full p-0">
            <ProjectBrandLink
              className={cn(
                typography.homeHeroTitle,
                "inline-block max-w-full"
              )}
            />
          </h1>
          <p className={cn(typography.homeHeroSubtitle, "mt-3 text-pretty")}>
            Espace partagé pour construction collective
          </p>
        </header>

        <div className="mx-auto mt-10 grid w-full gap-3 sm:max-w-none sm:grid-cols-2 sm:gap-5">
          <Link
            to="/presentation"
            className="group block min-w-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Card
              size="sm"
              className={cn(hubCardClass, "h-full ring-1 ring-border/50")}
            >
              <CardHeader className="gap-1.5 pb-3 pt-4">
                <div className="flex items-center justify-between gap-3">
                  <CardTitle className={typography.homeHubCardTitle}>
                    Structure et ergonomie
                  </CardTitle>
                  <ChevronRight
                    className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground"
                    aria-hidden
                  />
                </div>
                <CardDescription
                  className={cn(
                    typography.homeHubCardDescription,
                    "sm:whitespace-nowrap"
                  )}
                >
                  Arborescence et wireframes annotés
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <a
            href="/prototype"
            target="_blank"
            rel="noopener noreferrer"
            className="group block min-w-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Card
              size="sm"
              className={cn(hubCardClass, "h-full ring-1 ring-border/50")}
            >
              <CardHeader className="gap-1.5 pb-3 pt-4">
                <div className="flex items-center justify-between gap-3">
                  <CardTitle className={typography.homeHubCardTitle}>
                    Prototype
                  </CardTitle>
                  <ExternalLink
                    className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
                    aria-hidden
                  />
                </div>
                <CardDescription
                  className={cn(
                    typography.homeHubCardDescription,
                    "sm:whitespace-nowrap"
                  )}
                >
                  Interface interactive en conditions réelles
                </CardDescription>
              </CardHeader>
            </Card>
          </a>
        </div>
      </main>
    </div>
  )
}
