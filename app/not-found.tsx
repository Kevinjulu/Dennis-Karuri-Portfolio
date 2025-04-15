import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SEO } from "@/components/seo"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <SEO
        title="Page Not Found | Diana Luvanda"
        description="The page you are looking for does not exist."
        noIndex={true}
      />

      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link href="/">
          <Button className="bg-gradient-to-r from-red-500 to-rose-400 hover:from-red-600 hover:to-rose-500">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}

