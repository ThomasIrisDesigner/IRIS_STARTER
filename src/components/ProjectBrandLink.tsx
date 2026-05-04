import { Link } from "react-router-dom"

import { PROJECT_DISPLAY_NAME } from "@/config/project"
import { cn } from "@/lib/utils"

type ProjectBrandLinkProps = {
  className?: string
  children?: React.ReactNode
}

/** Nom du projet : lien vers l’accueil `/`. */
export function ProjectBrandLink({ className, children }: ProjectBrandLinkProps) {
  return (
    <Link
      to="/"
      title="Retour à l’accueil"
      className={cn(
        "cursor-pointer rounded-sm text-inherit no-underline outline-none transition-opacity",
        "hover:opacity-80 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      {children ?? PROJECT_DISPLAY_NAME}
    </Link>
  )
}
