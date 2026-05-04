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
  homeHeroTitle:
    "text-xl font-semibold tracking-tight text-foreground sm:text-2xl",
  homeHeroSubtitle:
    "max-w-md text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]",
  homeHubCardTitle:
    "text-base font-semibold leading-snug tracking-tight text-foreground",
  homeHubCardDescription:
    "text-xs leading-relaxed text-muted-foreground sm:text-sm",
  prototypePlaceholder:
    "text-sm font-medium tracking-tight text-muted-foreground",
  presentationTitle: "text-xl font-semibold tracking-tight text-foreground",
  presentationSubtitle: "text-sm text-muted-foreground",
  presentationHeaderTitle:
    "truncate text-sm font-semibold leading-tight tracking-tight text-foreground",
  presentationHeaderSubtitle:
    "truncate text-xs leading-tight text-muted-foreground",
  wireframeTitle: "text-lg font-semibold tracking-tight text-foreground",
  wireframeTitleCompact:
    "text-base font-semibold leading-tight tracking-tight text-foreground",
  annotationNumber:
    "flex size-6 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-[0.65rem] font-semibold tabular-nums text-foreground",
  annotationLabel: "text-xs font-medium leading-snug text-foreground",
  annotationDescription: "text-xs leading-snug text-muted-foreground",
  footerCredit: "text-center text-xs text-muted-foreground",
  mockupChromeLabel: "truncate text-xs font-medium text-muted-foreground",
  treeIntro: "text-sm leading-relaxed text-muted-foreground",
  arborescenceColumnHeader:
    "text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground",
  arborescenceGroupLabel:
    "text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-foreground",
} as const
