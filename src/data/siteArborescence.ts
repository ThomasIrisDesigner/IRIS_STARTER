/** Point d’entrée (colonne Accueil). */
export type ArborescenceRoot = {
  title: string
  subtitle: string
}

/** Bloc de navigation principal (colonne Niveau 1). */
export type ArborescenceSection = {
  id: string
  title: string
}

/** Sous-page rattachée à une section (colonne Niveau 2). */
export type ArborescencePage = {
  id: string
  sectionId: string
  title: string
}

/** Gabarit / type d’écran associé à une page (colonne Niveau 3). */
export type ArborescenceTemplate = {
  pageId: string
  title: string
  lines: string[]
}

export const SITE_ARB_ROOT: ArborescenceRoot = {
  title: "Hub projet",
  subtitle: "Point d’entrée et navigation principale",
}

export const SITE_ARB_SECTIONS: ArborescenceSection[] = [
  { id: "s1", title: "Pilotage & synthèse" },
  { id: "s2", title: "Opérations terrain" },
  { id: "s3", title: "Relation client" },
  { id: "s4", title: "Données & conformité" },
  { id: "s5", title: "Administration" },
]

export const SITE_ARB_PAGES: ArborescencePage[] = [
  { id: "p1", sectionId: "s1", title: "Tableau de bord" },
  { id: "p2", sectionId: "s1", title: "Indicateurs clés" },
  { id: "p3", sectionId: "s2", title: "Planning des équipes" },
  { id: "p4", sectionId: "s2", title: "Interventions du jour" },
  { id: "p5", sectionId: "s2", title: "Rapports d’activité" },
  { id: "p6", sectionId: "s3", title: "Annuaire contacts" },
  { id: "p7", sectionId: "s3", title: "Historique des échanges" },
  { id: "p8", sectionId: "s4", title: "Archives réglementaires" },
  { id: "p9", sectionId: "s4", title: "Exports et restitutions" },
  { id: "p10", sectionId: "s5", title: "Utilisateurs et rôles" },
  { id: "p11", sectionId: "s5", title: "Paramètres organisation" },
]

export const SITE_ARB_TEMPLATES: ArborescenceTemplate[] = [
  {
    pageId: "p1",
    title: "Page synthèse",
    lines: ["1. En-tête contexte", "2. Tuiles indicateurs", "3. Actions rapides"],
  },
  {
    pageId: "p2",
    title: "Page listing",
    lines: ["1. Filtres", "2. Tableau paginé", "3. Export"],
  },
  {
    pageId: "p3",
    title: "Page planning",
    lines: ["1. Navigation période", "2. Grille planning", "3. Légende"],
  },
  {
    pageId: "p4",
    title: "Page agenda jour",
    lines: ["1. Liste interventions", "2. Carte synthétique"],
  },
  {
    pageId: "p5",
    title: "Page rapport",
    lines: ["1. Sélecteur période", "2. Corps du rapport", "3. Pièces jointes"],
  },
  {
    pageId: "p6",
    title: "Page annuaire",
    lines: ["1. Recherche", "2. Résultats", "3. Fiche contact"],
  },
  {
    pageId: "p7",
    title: "Page fil chronologique",
    lines: ["1. Filtres canal", "2. Fil d’événements"],
  },
  {
    pageId: "p8",
    title: "Page archives",
    lines: ["1. Arborescence dossiers", "2. Prévisualisation"],
  },
  {
    pageId: "p9",
    title: "Page exports",
    lines: ["1. Paramètres export", "2. Historique des fichiers"],
  },
  {
    pageId: "p10",
    title: "Page administration",
    lines: ["1. Liste utilisateurs", "2. Matrice des rôles"],
  },
  {
    pageId: "p11",
    title: "Page paramètres",
    lines: ["1. Sections réglages", "2. Formulaires contextuels"],
  },
]

export function getTemplateForPage(
  pageId: string
): ArborescenceTemplate | undefined {
  return SITE_ARB_TEMPLATES.find((t) => t.pageId === pageId)
}

export function getPagesForSection(sectionId: string): ArborescencePage[] {
  return SITE_ARB_PAGES.filter((p) => p.sectionId === sectionId)
}

/** Couleurs de repère par section (variables définies dans `theme.css`). */
export const ARBO_ACCENT_VARS = [
  "var(--arbo-accent-1)",
  "var(--arbo-accent-2)",
  "var(--arbo-accent-3)",
  "var(--arbo-accent-4)",
  "var(--arbo-accent-5)",
] as const
