import Head from "next/head"

interface SEOProps {
  title?: string
  description?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  canonicalUrl?: string
  noIndex?: boolean
}

export function SEO({
  title = "Diana Luvanda | Actress, Model & Content Creator",
  description = "Diana Luvanda is a Kenyan actress, model, and digital content creator with appearances on Netflix, Showmax, and a strong social media presence.",
  ogImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562595365.jpg-i5hFfoSILVYzJcvykuEVUukufxsIwX.jpeg",
  ogType = "website",
  twitterCard = "summary_large_image",
  canonicalUrl,
  noIndex = false,
}: SEOProps) {
  const siteUrl = "https://dianaluvanda.com"
  const fullTitle = title.includes("Diana Luvanda") ? title : `${title} | Diana Luvanda`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Diana Luvanda" />
      {canonicalUrl && <meta property="og:url" content={`${siteUrl}${canonicalUrl}`} />}

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@dianaluvanda" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={`${siteUrl}${canonicalUrl}`} />}

      {/* No index if specified */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  )
}

