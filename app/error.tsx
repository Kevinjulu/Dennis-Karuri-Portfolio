"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <Button
        onClick={() => reset()}
        className="bg-gradient-to-r from-red-500 to-rose-400 hover:from-red-600 hover:to-rose-500"
      >
        Try again
      </Button>
    </div>
  )
}

