"use client"

/**
 * @deprecated Use the Next.js Metadata API instead
 * Import { generateMetadata } from "@/lib/metadata" in your page files
 * 
 * Example usage in page.tsx:
 * ```tsx
 * import { Metadata } from "next"
 * import { generateMetadata as baseMetadata } from "@/lib/metadata"
 * 
 * export const metadata: Metadata = baseMetadata({
 *   title: "Page Title",
 *   description: "Page description",
 *   canonicalUrl: "/page-path"
 * })
 * ```
 */

import { useEffect } from "react"

interface SEOProps {
  title?: string
  description?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  canonicalUrl?: string
  noIndex?: boolean
}

/**
 * @deprecated Use the Next.js Metadata API instead
 * This component is kept for backward compatibility with pages router
 */
export function SEO({
  title = "Dennis Karuri | Makeup Artist & Beauty Influencer",
  description = "Dennis Karuri is a renowned Kenyan makeup artist and beauty influencer known for his exceptional artistry and transformative makeup looks.",
  ogImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dennis_profile-9Vb3YMjYbHYlCUdxcGfbwgfFQfnYBh.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  canonicalUrl,
  noIndex = false,
}: SEOProps) {
  useEffect(() => {
    console.warn(
      "The SEO component is deprecated. Use the Next.js Metadata API instead. " +
      "Import { generateMetadata } from \"@/lib/metadata\" in your page files."
    )
  }, [])
  
  return null
}

