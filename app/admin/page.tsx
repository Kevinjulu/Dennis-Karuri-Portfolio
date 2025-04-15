"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lock, User, AlertCircle, Loader2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useAuth } from "@/contexts/auth-context"
import Image from "next/image"
import Link from "next/link"

export default function AdminLoginPage() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { login, isAuthenticated } = useAuth()

  // If already authenticated, redirect to dashboard
  if (isAuthenticated) {
    router.push("/admin/dashboard")
    return null
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const { error } = await login(credentials.email, credentials.password)

      if (error) {
        setError("Invalid email or password. Please try again.")
        setIsLoading(false)
      } else {
        router.push("/admin/dashboard")
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-white p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo and Header */}
        <div className="text-center">
          <Link href="/" className="inline-block mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562595365.jpg-i5hFfoSILVYzJcvykuEVUukufxsIwX.jpeg"
              alt="Diana Luvanda"
              width={80}
              height={80}
              className="rounded-full border-2 border-red-100"
            />
          </Link>
          <h1 className="text-3xl font-bold font-playfair mb-2">Admin Login</h1>
          <p className="text-muted-foreground">Sign in to manage your website content</p>
        </div>

        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <Alert variant="destructive" className="animate-shake">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    type="email"
                    placeholder="admin@dianaluvanda.com"
                    className="pl-10"
                    value={credentials.email}
                    onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="pl-10"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-rose-400 hover:from-red-600 hover:to-rose-500"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>

            {/* Development Credentials Notice */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="rounded-lg bg-blue-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-blue-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">Development Credentials</h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p>
                        Email: <code className="font-mono">admin@dianaluvanda.com</code>
                      </p>
                      <p>
                        Password: <code className="font-mono">diana2024</code>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Back to Website Link */}
        <div className="text-center">
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← Back to website
          </Link>
        </div>
      </div>
    </main>
  )
}

