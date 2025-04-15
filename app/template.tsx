"use client"

import type React from "react"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0)
  }, [pathname]) // Add pathname as dependency to trigger on route changes

  return <>{children}</>
}

