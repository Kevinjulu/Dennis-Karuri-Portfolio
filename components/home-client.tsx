"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { SocialOverlay } from "@/components/social-overlay"
import { HeroImageCarousel } from "@/components/hero-image-carousel"
import { AnimatedTagline } from "@/components/animated-tagline"
import { motion } from "framer-motion"

export function HomeClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen px-0 sm:px-4 md:px-6 py-8 md:py-16 relative overflow-hidden flex items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/4 w-48 h-48 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 lg:gap-12 items-center relative z-10">
          <motion.div
            className="space-y-6 lg:space-y-8 flex flex-col justify-center mt-8 lg:mt-0 px-4 sm:px-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatedTagline />

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold space-y-3">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Hey, I&apos;m
              </motion.span>
              <motion.span
                className="block font-playfair italic gradient-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Dennis Karuri
              </motion.span>
            </h1>

            <motion.p
              className="text-lg text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Kenyan makeup artist and beauty influencer, celebrated for creative looks, gender-defying style, and confidence. I run a makeup studio, work with top brands, and inspire thousands through content and artistry.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Link href="/portfolio">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-rose-400 hover:from-red-600 hover:to-rose-500 text-white border-none shadow-lg shadow-red-500/20 group"
                >
                  EXPLORE MY WORK
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="glass-button border-red-200">
                  GET IN TOUCH
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative order-first lg:order-last w-full mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-red-200 to-rose-100 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
            <HeroImageCarousel />
          </motion.div>
        </div>
      </section>
    </>
  )
}
