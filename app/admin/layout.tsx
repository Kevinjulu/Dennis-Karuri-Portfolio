"use client"

import type React from "react"

// Temporarily comment out auth imports and checks
// import { AuthProvider } from "@/contexts/auth-context"
// import { useAuth } from "@/contexts/auth-context"
// import { useRouter } from "next/navigation"
// import { useEffect } from "react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Temporarily return children directly without auth checks
  return <>{children}</>
}

