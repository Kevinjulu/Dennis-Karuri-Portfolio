"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"
import { apiClient } from "@/lib/api-client"

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<{ error: any }>
  logout: () => Promise<void>
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Check active session
    const initializeAuth = async () => {
      try {
        const userData = await apiClient.auth.getUser();
        setUser(userData);
      } catch (error) {
        console.error("Error checking auth session:", error)
        setUser(null);
      } finally {
        setIsLoading(false)
      }
    }

    initializeAuth()
  }, [])

  // Redirect if accessing admin pages without authentication
  useEffect(() => {
    if (!isLoading && pathname?.startsWith("/admin") && pathname !== "/admin" && !user) {
      router.push("/admin")
    }
  }, [isLoading, user, pathname, router])

  const login = async (email: string, password: string) => {
    try {
      const response = await apiClient.auth.login(email, password);
      setUser(response.user);
      return { error: null }
    } catch (error) {
      console.error("Login error:", error)
      return { error }
    }
  }

  const logout = async () => {
    try {
      await apiClient.auth.logout();
      setUser(null);
      router.push("/admin")
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
