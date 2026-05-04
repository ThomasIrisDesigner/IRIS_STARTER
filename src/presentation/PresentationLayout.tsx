import { ProjectBrandLink } from "@/components/ProjectBrandLink"
import { SiteArborescencePanel } from "@/presentation/SiteArborescencePanel"
import { WireframeScreen } from "@/presentation/WireframeScreen"
import { typography } from "@/styles/typography"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

const demoMobileAnnotations = [
  {
    number: 1,
    label: "Navigation principale",
    description:
      "Barre fixe en bas pour accéder aux sections clés du prototype mobile.",
  },
  {
    number: 2,
    label: "Contenu prioritaire",
    description:
      "Zone scrollable réservée au message principal ou à l’action attendue.",
  },
  {
    number: 3,
    label: "État vide",
    description:
      "Placeholder illustrant le comportement lorsqu’aucune donnée n’est encore saisie.",
  },
] as const

const demoDesktopAnnotations = [
  {
    number: 1,
    label: "En-tête de page",
    description:
      "Titre de l’écran et actions contextuelles alignées sur la grille desktop.",
  },
  {
    number: 2,
    label: "Tableau de synthèse",
    description:
      "Vue dense pour comparer plusieurs éléments ; colonnes ajustables au besoin.",
  },
  {
    number: 3,
    label: "Panneau latéral",
    description:
      "Espace pour filtres, détails secondaires ou aide contextuelle.",
  },
] as const

/** 40px (pt-10) sous le header sticky, puis contenu. */
const tabPanelClass = "pt-10 pb-12 data-[state=inactive]:hidden"

export function PresentationLayout() {
  return (
    <Tabs defaultValue="arborescence" className="w-full">
      <div className="min-h-svh bg-background">
        <header
          className={cn(
            "sticky top-0 z-30 border-b border-border",
            "bg-card/90 backdrop-blur-md supports-[backdrop-filter]:bg-card/80"
          )}
        >
          <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            <div
              className={cn(
                "flex flex-col items-stretch gap-4",
                "sm:relative sm:min-h-[2.75rem] sm:flex-row sm:items-center sm:justify-center sm:gap-0"
              )}
            >
              <div className="min-w-0 shrink-0 sm:absolute sm:start-0 sm:top-1/2 sm:max-w-[42%] sm:-translate-y-1/2">
                <h1 className="m-0 min-w-0 p-0">
                  <ProjectBrandLink
                    className={cn(
                      typography.presentationHeaderTitle,
                      "inline-block max-w-full truncate"
                    )}
                  />
                </h1>
                <p className={typography.presentationHeaderSubtitle}>
                  Présentation des wireframes
                </p>
              </div>

              <TabsList
                variant="line"
                className={cn(
                  "relative z-10 h-8 w-full justify-center gap-0.5 p-0",
                  "rounded-none border-0 bg-transparent sm:w-auto sm:shrink-0"
                )}
              >
                <TabsTrigger
                  value="arborescence"
                  className="h-8 rounded-md px-3 py-0 text-xs sm:px-3.5"
                >
                  Arborescence
                </TabsTrigger>
                <TabsTrigger
                  value="ecran-1"
                  className="h-8 rounded-md px-3 py-0 text-xs sm:px-3.5"
                >
                  Écrans mobiles
                </TabsTrigger>
                <TabsTrigger
                  value="ecran-2"
                  className="h-8 rounded-md px-3 py-0 text-xs sm:px-3.5"
                >
                  Écrans desktop
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
        </header>

        <main className="mx-auto w-full max-w-6xl px-4 pb-12 pt-0 sm:px-6 sm:pb-16">
          <TabsContent value="arborescence" className={tabPanelClass}>
            <div className="mx-auto w-full max-w-[min(100%,72rem)]">
              <SiteArborescencePanel />
            </div>
          </TabsContent>

          <TabsContent value="ecran-1" className={tabPanelClass}>
            <WireframeScreen
              title="Connexion rapide"
              device="mobile"
              annotations={[...demoMobileAnnotations]}
            >
              <div className="space-y-2 rounded-md border border-dashed border-border bg-muted/30 p-3">
                <div className="h-2 w-2/3 rounded bg-muted-foreground/20" />
                <div className="h-2 w-full rounded bg-muted-foreground/15" />
                <div className="h-2 w-5/6 rounded bg-muted-foreground/15" />
                <div className="mt-3 h-8 w-full rounded-md bg-muted-foreground/10" />
              </div>
            </WireframeScreen>
          </TabsContent>

          <TabsContent value="ecran-2" className={tabPanelClass}>
            <WireframeScreen
              title="Tableau de bord"
              device="desktop"
              annotations={[...demoDesktopAnnotations]}
            >
              <div className="grid gap-2 sm:grid-cols-3">
                <div className="h-20 rounded-md border border-dashed border-border bg-muted/30 sm:h-24" />
                <div className="h-20 rounded-md border border-dashed border-border bg-muted/30 sm:h-24" />
                <div className="h-20 rounded-md border border-dashed border-border bg-muted/30 sm:h-24" />
                <div className="h-28 rounded-md border border-dashed border-border bg-muted/30 sm:col-span-3 sm:h-32" />
              </div>
            </WireframeScreen>
          </TabsContent>
        </main>
      </div>
    </Tabs>
  )
}
