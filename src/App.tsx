import { Navigate, Route, Routes } from "react-router-dom"

import { AuthProvider } from "@/auth/AuthContext"
import { ProtectedRoute } from "@/components/ProtectedRoute"
import { PresentationLayout } from "@/presentation/PresentationLayout"
import { Home } from "@/pages/Home"
import { Login } from "@/pages/Login"
import { Prototype } from "@/pages/Prototype"

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/presentation" element={<PresentationLayout />} />
          <Route path="/prototype" element={<Prototype />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  )
}
