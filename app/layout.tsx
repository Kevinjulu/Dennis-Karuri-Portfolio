import type React from "react"
import type { Metadata } from "next"
import "@/styles/globals.css"
import { Inter, Playfair_Display, Montserrat } from "next/font/google"
import { NavMenu } from "@/components/ui/nav-menu"
import { ToasterProvider } from "@/components/providers/toaster-provider"
import { Footer } from "@/components/footer"
import { ClientOnly } from "@/components/client-only"

// We'll handle auth context differently to avoid client/server component conflicts

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
    default: "Dennis Karuri | Makeup Artist & Beauty Influencer",
    template: "%s | Dennis Karuri",
  },
  description:
    "Dennis Karuri is a Kenyan makeup artist and beauty influencer, celebrated for his creative looks, gender-defying style, and confidence. He runs a makeup studio and works with top brands.",
  keywords: [
    "Dennis Karuri",
    "Makeup Artist",
    "Beauty Influencer",
    "Fashion Personality",
    "Kenya",
    "Makeup Studio",
    "Beauty Brands",
    "Digital Influencer",
    "Brand Ambassador",
    "African Talent",
  ],
  authors: [{ name: "Dennis Karuri" }],
  creator: "Dennis Karuri",
  publisher: "Dennis Karuri",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://denniskaruri.com"),
  alternates: {
    canonical: "https://denniskaruri.com",
    types: {
      'application/rss+xml': 'https://denniskaruri.com/rss.xml',
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://denniskaruri.com",
    title: "Dennis Karuri | Makeup Artist & Beauty Influencer",
    description:
      "Dennis Karuri is a Kenyan makeup artist and beauty influencer, celebrated for his creative looks, gender-defying style, and confidence. He runs a makeup studio and works with top brands.",
    siteName: "Dennis Karuri",
    images: [
      {
        url: "/images/Karuri (1).jpg",
        width: 1200,
        height: 630,
        alt: "Dennis Karuri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dennis Karuri | Makeup Artist & Beauty Influencer",
    description:
      "Dennis Karuri is a Kenyan makeup artist and beauty influencer, celebrated for his creative looks, gender-defying style, and confidence. He runs a makeup studio and works with top brands.",
    images: [
      "/images/Karuri (1).jpg",
    ],
    creator: "@_denniskaruri",
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
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: [
      { url: "/favicon.ico" },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google-site-verification=YOUR_VERIFICATION_CODE",
  },
  other: {
    "theme-color": "#ffffff",
    "x-dns-prefetch-control": "on",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <body className="font-montserrat bg-gradient-to-b from-[#FFF5F5] to-[#FFF8F8] min-h-screen" suppressHydrationWarning>
        {/* Wrap client components in ClientOnly to prevent hydration mismatches */}
        <ClientOnly fallback={<div className="h-16"></div>}>
          <NavMenu />
        </ClientOnly>
        
        <main className="content-wrapper">
          {children}
        </main>
        
        <ClientOnly>
          <Footer />
          <ToasterProvider />
        </ClientOnly>
      </body>
    </html>
  )
}