/**
 * Classes Tailwind réutilisables pour la typographie du prototype.
 * Préférer ces constantes aux styles inline sur les textes.
 */
export const typography = {
  projectBadge:
    "text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground",
  loginTitle: "text-2xl font-semibold tracking-tight text-foreground",
  loginSubtitle: "text-sm leading-relaxed text-muted-foreground",
  homePlaceholder: "text-sm font-medium uppercase tracking-[0.35em] text-muted-foreground",
  presentationTitle: "text-xl font-semibold tracking-tight text-foreground",
  presentationSubtitle: "text-sm text-muted-foreground",
  wireframeTitle: "text-lg font-semibold tracking-tight text-foreground",
  annotationNumber:
    "flex size-7 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-xs font-semibold text-foreground",
  annotationLabel: "text-sm font-medium text-foreground",
  annotationDescription: "text-sm leading-relaxed text-muted-foreground",
  footerCredit: "text-center text-xs text-muted-foreground",
  mockupChromeLabel: "truncate text-xs font-medium text-muted-foreground",
} as const
