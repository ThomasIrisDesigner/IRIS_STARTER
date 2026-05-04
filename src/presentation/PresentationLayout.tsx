import { WireframeScreen } from "@/presentation/WireframeScreen"
import { PROJECT_DISPLAY_NAME } from "@/config/project"
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

export function PresentationLayout() {
  return (
    <div className="min-h-svh bg-background">
      <header className="border-b border-border bg-card px-4 py-8 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h1 className={typography.presentationTitle}>{PROJECT_DISPLAY_NAME}</h1>
          <p className={cn(typography.presentationSubtitle, "mt-2 max-w-2xl")}>
            Présentation des wireframes
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-8">
        <Tabs defaultValue="ecran-1" className="gap-6">
          <TabsList variant="line" className="w-full sm:w-auto">
            <TabsTrigger value="ecran-1" className="flex-1 sm:flex-none">
              Écran 1 — mobile
            </TabsTrigger>
            <TabsTrigger value="ecran-2" className="flex-1 sm:flex-none">
              Écran 2 — desktop
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ecran-1" className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <WireframeScreen
              title="Connexion rapide"
              device="mobile"
              annotations={[...demoMobileAnnotations]}
            >
              <div className="space-y-3 rounded-lg border border-dashed border-border bg-muted/30 p-4">
                <div className="h-2 w-2/3 rounded bg-muted-foreground/20" />
                <div className="h-2 w-full rounded bg-muted-foreground/15" />
                <div className="h-2 w-5/6 rounded bg-muted-foreground/15" />
                <div className="mt-4 h-9 w-full rounded-md bg-muted-foreground/10" />
              </div>
            </WireframeScreen>
          </TabsContent>

          <TabsContent value="ecran-2" className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <WireframeScreen
              title="Tableau de bord"
              device="desktop"
              annotations={[...demoDesktopAnnotations]}
            >
              <div className="grid gap-3 lg:grid-cols-3">
                <div className="h-24 rounded-lg border border-dashed border-border bg-muted/30" />
                <div className="h-24 rounded-lg border border-dashed border-border bg-muted/30" />
                <div className="h-24 rounded-lg border border-dashed border-border bg-muted/30" />
                <div className="h-40 rounded-lg border border-dashed border-border bg-muted/30 lg:col-span-3" />
              </div>
            </WireframeScreen>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
