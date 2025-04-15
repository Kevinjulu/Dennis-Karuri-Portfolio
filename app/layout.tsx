import type React from "react"
import type { Metadata } from "next"
import "@/styles/globals.css"
import { Inter, Playfair_Display, Montserrat } from "next/font/google"
import dynamic from "next/dynamic"
import { NavMenu } from "@/components/ui/nav-menu"

// Dynamically import components to reduce initial load time
const Footer = dynamic(() => import("@/components/footer").then(mod => mod.Footer), {
  ssr: true,
  loading: () => <footer className="py-10 md:py-12 px-4 md:px-6 mt-12 md:mt-16"><div className="container mx-auto"></div></footer>
})

const AuthProvider = dynamic(() => import("@/contexts/auth-context").then(mod => mod.AuthProvider), {
  ssr: true
})

// Import service worker registration component
const ServiceWorkerRegistration = dynamic(() => import("./service-worker-registration"), {
  ssr: false
})

// Import Vercel Analytics
const VercelAnalytics = dynamic(() => import("./analytics").then(mod => mod.VercelAnalytics), {
  ssr: false
})

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  preload: true,
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "Diana Luvanda | Actress, Model & Content Creator",
    template: "%s | Diana Luvanda",
  },
  description:
    "Diana Luvanda is a Kenyan actress, model, and digital content creator with appearances on Netflix, Showmax, and a strong social media presence.",
  keywords: [
    "Diana Luvanda",
    "Actress",
    "Model",
    "Content Creator",
    "Kenya",
    "Netflix",
    "Showmax",
    "Digital Influencer",
    "Brand Ambassador",
    "African Talent",
  ],
  authors: [{ name: "Diana Luvanda" }],
  creator: "Diana Luvanda",
  publisher: "Diana Luvanda",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dianaluvanda.com"),
  alternates: {
    canonical: "https://dianaluvanda.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dianaluvanda.com",
    title: "Diana Luvanda | Actress, Model & Content Creator",
    description:
      "Diana Luvanda is a Kenyan actress, model, and digital content creator with appearances on Netflix, Showmax, and a strong social media presence.",
    siteName: "Diana Luvanda",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562512871.jpg-q9lkUNUDP7EpnTom59EzNu67VE7Y3r.jpeg",
        width: 1200,
        height: 630,
        alt: "Diana Luvanda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diana Luvanda | Actress, Model & Content Creator",
    description:
      "Diana Luvanda is a Kenyan actress, model, and digital content creator with appearances on Netflix, Showmax, and a strong social media presence.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562512871.jpg-q9lkUNUDP7EpnTom59EzNu67VE7Y3r.jpeg",
    ],
    creator: "@dianaluvanda",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "google-site-verification=YOUR_VERIFICATION_CODE",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${montserrat.variable}`}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Performance optimizations */}
        {/* Preconnect to domains for faster resource loading */}
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="dns-prefetch" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        
        {/* Preload critical fonts */}
        <link rel="preload" as="font" href="/fonts/inter.woff2" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Preload critical CSS */}
        <link rel="preload" href="/_next/static/css/app.css" as="style" />
        
        {/* Add resource hints for faster navigation */}
        <link rel="prefetch" href="/about" />
        <link rel="prefetch" href="/portfolio" />
        
        {/* Add browser hints for better performance */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
      </head>
      <body className="font-montserrat bg-gradient-to-b from-[#FFF5F5] to-[#FFF8F8] min-h-screen">
        <AuthProvider>
          <NavMenu />
          <main className="content-wrapper">
            {children}
          </main>
          <Footer />
          <ServiceWorkerRegistration />
          <VercelAnalytics />
        </AuthProvider>
      </body>
    </html>
  )
}