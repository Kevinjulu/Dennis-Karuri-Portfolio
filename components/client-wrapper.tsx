"use client"

import { ReactNode, useEffect, useState } from "react"

// This component serves as a wrapper for client-side functionality
// It ensures that client-side code only runs in the browser
export default function ClientWrapper({ children }: { children: ReactNode }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    // Return a simple placeholder during server-side rendering
    return <div className="min-h-screen animate-pulse bg-gray-50"></div>
  }

  return <>{children}</>
}
