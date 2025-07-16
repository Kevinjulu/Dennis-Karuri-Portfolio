import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import dynamic from "next/dynamic"

// Dynamically import client components to avoid hydration issues
const ClientHeroLoader = dynamic(() => import("./client-hero-loader"), {
  ssr: false
})

const AnimatedTaglineClient = dynamic(() => import("./animated-tagline-client"), {
  ssr: false,
  loading: () => <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/20 shadow-sm">
    <span className="h-4 w-4 bg-yellow-500 rounded-full"></span>
    <span className="h-4 w-[1px] bg-gray-300/50"></span>
    <span className="text-sm font-medium">Makeup Artist & Beauty Influencer</span>
  </div>
})
// Remove this import as we're using the client version dynamically

// This is a server component that serves as a placeholder for the hero section
// It includes client components for interactive elements
export function HeroPlaceholder() {
  return (
    <section className="min-h-screen px-0 sm:px-4 md:px-6 py-8 md:py-16 relative overflow-hidden flex items-center">
      {/* Static background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 lg:gap-12 items-center relative z-10">
        <div className="space-y-6 lg:space-y-8 flex flex-col justify-center mt-8 lg:mt-0 px-4 sm:px-0">
          {/* Animated tagline - client component loaded dynamically */}
          <AnimatedTaglineClient />

          {/* Static heading */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold space-y-3">
              <span className="block">Hey, I&apos;m</span>
              <span className="block font-playfair italic gradient-text">Dennis Karuri</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-md">
              Transforming faces and breaking boundaries in the beauty industry with creative expression and artistry.
            </p>
          </div>

          {/* Static buttons */}
          <div className="flex flex-wrap gap-4">
            <Link href="/portfolio">
              <Button className="bg-gradient-to-r from-red-500 to-rose-400 hover:from-red-600 hover:to-rose-500 text-white px-6 py-3 rounded-full">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="bg-white/50 backdrop-blur-sm border-white/20 hover:bg-white/70 px-6 py-3 rounded-full">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>

        {/* Client component for the image carousel - loaded dynamically */}
        <div className="relative aspect-[4/5] lg:aspect-[3/4] w-full h-full min-h-[400px]">
          <ClientHeroLoader />
        </div>
      </div>
    </section>
  )
}
