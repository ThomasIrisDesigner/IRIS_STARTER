import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react"

import { AUTH_PASSWORD, AUTH_STORAGE_KEY } from "@/auth/constants"

type AuthContextValue = {
  isAuthenticated: boolean
  login: (password: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

const listeners = new Set<() => void>()

function subscribe(listener: () => void) {
  listeners.add(listener)
  const onStorage = (e: StorageEvent) => {
    if (e.key === AUTH_STORAGE_KEY || e.key === null) {
      listener()
    }
  }
  window.addEventListener("storage", onStorage)
  return () => {
    listeners.delete(listener)
    window.removeEventListener("storage", onStorage)
  }
}

function getSnapshot() {
  try {
    return window.localStorage.getItem(AUTH_STORAGE_KEY) === "1"
  } catch {
    return false
  }
}

function emit() {
  for (const l of listeners) l()
}

function setSession(active: boolean) {
  try {
    if (active) {
      window.localStorage.setItem(AUTH_STORAGE_KEY, "1")
    } else {
      window.localStorage.removeItem(AUTH_STORAGE_KEY)
    }
  } catch {
    /* navigation privée / stockage désactivé : l’UI reste utilisable */
  }
  emit()
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const isAuthenticated = useSyncExternalStore(subscribe, getSnapshot)

  const login = useCallback((password: string) => {
    if (password === AUTH_PASSWORD) {
      setSession(true)
      return true
    }
    return false
  }, [])

  const logout = useCallback(() => {
    setSession(false)
  }, [])

  const value = useMemo(
    () => ({ isAuthenticated, login, logout }),
    [isAuthenticated, login, logout]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error("useAuth doit être utilisé dans un AuthProvider")
  }
  return ctx
}
