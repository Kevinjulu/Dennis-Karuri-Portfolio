import { Metadata } from 'next/types'

export interface PageMetadataProps {
  title?: string
  description?: string
  ogImage?: string
  ogType?: "article" | "website" | "book" | "profile" | "music.song" | "music.album" | "music.playlist" | "music.radio_station" | "video.movie" | "video.episode" | "video.tv_show" | "video.other"
  twitterCard?: string
  canonicalUrl?: string
  noIndex?: boolean
}

export function generateMetadata({
  title = "Dennis Karuri | Makeup Artist & Beauty Influencer",
  description = "Dennis Karuri is a renowned Kenyan makeup artist and beauty influencer known for his exceptional artistry and transformative makeup looks.",
  ogImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dennis_profile-9Vb3YMjYbHYlCUdxcGfbwgfFQfnYBh.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  canonicalUrl,
  noIndex = false,
}: PageMetadataProps): Metadata {
  const siteUrl = "https://denniskaruri.com"
  const fullTitle = title.includes("Dennis Karuri") ? title : `${title} | Dennis Karuri`

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      type: ogType as "article" | "website" | "book" | "profile" | "music.song" | "music.album" | "music.playlist" | "music.radio_station" | "video.movie" | "video.episode" | "video.tv_show" | "video.other",
      siteName: "Dennis Karuri",
      url: canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl,
    },
    twitter: {
      card: twitterCard as "summary" | "summary_large_image" | "app" | "player",
      site: "@denniskaruri",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl,
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    manifest: '/site.webmanifest',
  }
}
