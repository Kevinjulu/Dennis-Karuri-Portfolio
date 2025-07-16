'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'
import Link from 'next/link'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-b from-[#FFF5F5] to-[#FFF8F8]">
          <div className="text-center max-w-md">
            <h1 className="text-4xl font-bold text-red-500 mb-4">Something went wrong!</h1>
            <p className="text-muted-foreground mb-8">
              We apologize for the inconvenience. Please try refreshing the page or return to the home page.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => reset()}
                className="bg-gradient-to-r from-red-500 to-rose-400 hover:from-red-600 hover:to-rose-500"
              >
                Try again
              </Button>
              <Link href="/">
                <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
