"use client"

import { SocialStats } from "@/components/social-stats"
import { AboutSection } from "@/components/about-section"
import { ActingSection } from "@/components/acting-section"
import { InfluencingSection } from "@/components/influencing-section"
import { PresenterSection } from "@/components/presenter-section"
import { PressSection } from "@/components/press-section"
import { ContactForm } from "@/components/contact-form"
import { GallerySlider } from "@/components/gallery-slider"
import { RotatingTaglineHero } from "@/components/rotating-tagline-hero"

// Metadata is now defined in app/layout.tsx instead of here
// This page needs to be a client component because it uses client components with animations

export default function Home() {
  return (
    <main className="min-h-screen">
      <RotatingTaglineHero />

      <div className="py-4 md:py-8" data-component-name="Home">
        <SocialStats />
      </div>

      <div className="space-y-12 md:space-y-16">
        <GallerySlider />
        <AboutSection />
        <ActingSection />
        <InfluencingSection />
        <PresenterSection />
        <PressSection />
        <ContactForm />
      </div>
    </main>
  )
}
