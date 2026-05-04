import { useState } from "react"
import { Navigate, useLocation, useNavigate } from "react-router-dom"

import { useAuth } from "@/auth/AuthContext"
import { PROJECT_DISPLAY_NAME } from "@/config/project"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { typography } from "@/styles/typography"
import { cn } from "@/lib/utils"

export function Login() {
  const { isAuthenticated, login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as { from?: { pathname?: string } } | null)
    ?.from?.pathname

  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  if (isAuthenticated) {
    return <Navigate to={from && from !== "/login" ? from : "/"} replace />
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(false)
    const ok = login(password)
    if (ok) {
      navigate(from && from !== "/login" ? from : "/", { replace: true })
    } else {
      setError(true)
    }
  }

  return (
    <div className="flex min-h-svh items-center justify-center bg-[var(--color-login-canvas)] px-4 py-10">
      <div
        className={cn(
          "w-full max-w-sm rounded-2xl border border-border bg-card p-8 shadow-sm"
        )}
      >
        <p className={cn(typography.projectBadge, "mb-6 text-center")}>
          {PROJECT_DISPLAY_NAME}
        </p>
        <h1 className={cn(typography.loginTitle, "mb-2 text-center")}>
          Accès sécurisé
        </h1>
        <p className={cn(typography.loginSubtitle, "mb-8 text-center")}>
          Entrez le mot de passe pour accéder au projet.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-invalid={error}
              className="h-10"
            />
            {error ? (
              <p className="text-xs text-destructive" role="alert">
                Mot de passe incorrect.
              </p>
            ) : null}
          </div>
          <Button type="submit" className="h-10 w-full" variant="default">
            Se connecter
          </Button>
        </form>
        <p className={cn(typography.footerCredit, "mt-10")}>
          Prototype réalisé par Thomas IRIS — Designer.
        </p>
      </div>
    </div>
  )
}
