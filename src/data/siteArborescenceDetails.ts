export type ArborescenceDetailLine = {
  label: string
  description: string
}

export type ArborescenceDetailZone = {
  id: string
  title: string
  subtitle: string
  lines: ArborescenceDetailLine[]
}

/** Blocs « transverses » pour la vue détails de l’arborescence (placeholder). */
export const SITE_ARB_DETAIL_ZONES: ArborescenceDetailZone[] = [
  {
    id: "header",
    title: "En-tête global",
    subtitle: "Barre supérieure commune aux gabarits",
    lines: [
      {
        label: "Marque",
        description: "Logo, lien vers l’accueil, éventuelle baseline.",
      },
      {
        label: "Zone de recherche",
        description: "Champ principal, raccourcis, lien vers la page résultats.",
      },
      {
        label: "Navigation primaire",
        description: "Liens sections ou menus déroulants (méga-menu).",
      },
      {
        label: "Utilitaires",
        description: "Langue, aide, contact, accès compte ou connexion.",
      },
    ],
  },
  {
    id: "footer",
    title: "Pied de page (footer)",
    subtitle: "Liens de second niveau et obligations",
    lines: [
      {
        label: "Colonnes thématiques",
        description: "Regroupement par familles de liens (légal, réseaux, etc.).",
      },
      {
        label: "Mentions & légal",
        description: "Mentions légales, confidentialité, gestion des cookies.",
      },
      {
        label: "Fil d’Ariane bas de page",
        description: "Optionnel — rappel de contexte ou partenaires.",
      },
    ],
  },
  {
    id: "transverse",
    title: "Zones transverses",
    subtitle: "Hors gabarit page à page",
    lines: [
      {
        label: "Bandeaux d’information",
        description: "Alertes maintenance, messages globaux, consentement.",
      },
      {
        label: "Panneau latéral contextuel",
        description: "Filtres persistants, aide, panier ou mini-résumé.",
      },
      {
        label: "Retour haut de page",
        description: "Affixe sur longs contenus éditoriaux.",
      },
    ],
  },
  {
    id: "components",
    title: "Composants réutilisables",
    subtitle: "Présents sur plusieurs écrans",
    lines: [
      {
        label: "Modales & tiroirs",
        description: "Confirmation, formulaires courts, détail sans quitter la page.",
      },
      {
        label: "Notifications",
        description: "Toasts, bannières de succès ou d’erreur.",
      },
      {
        label: "Pagination & chargement",
        description: "Blocs liste, infinite scroll ou chargement différé.",
      },
    ],
  },
]
