"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ImageCarousel } from "./image-carousel"

const taglines = [
  "Makeup Artist & Beauty Influencer",
  "Creative Visionary & Trendsetter",
  "Brand Ambassador & Content Creator",
  "Beauty Industry Expert"
]

export function RotatingTaglineHero() {
  const [currentTagline, setCurrentTagline] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-[80vh] px-0 sm:px-4 md:px-6 py-4 md:py-6 relative overflow-hidden flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 lg:gap-12 items-center relative z-10">
        <div className="space-y-3 lg:space-y-4 flex flex-col justify-center mt-2 lg:mt-0 px-4 sm:px-0">
          {/* Rotating tagline */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/50 backdrop-blur-sm border border-white/20 shadow-sm">
            <span className="h-5 w-5 bg-yellow-500 rounded-full animate-pulse"></span>
            <span className="h-5 w-[1px] bg-gray-300/50"></span>
            <AnimatePresence mode="wait">
              <motion.span 
                key={currentTagline}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-base md:text-lg font-medium h-6 overflow-hidden"
              >
                {taglines[currentTagline]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold space-y-3">
              <span className="block">Hey, I&apos;m</span>
              <span className="block font-playfair italic gradient-text">Dennis Karuri</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-md">
              Transforming faces and breaking boundaries in the beauty industry with creative expression and artistry.
            </p>
          </div>

          {/* Buttons */}
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

        {/* Image carousel */}
        <div className="relative aspect-[4/5] lg:aspect-[3/4] w-full h-full min-h-[320px]">
          <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-rose-100 to-pink-50 rounded-2xl blur-xl opacity-70"></div>
          <div className="relative w-full h-full rounded-2xl shadow-2xl overflow-hidden">
            <ImageCarousel 
              images={[
                "/images/Other images/Karuri (55).jpg",
                "/images/Other images/Karuri (73).jpg",
                "/images/Other images/Karuri (52).jpg"
              ]}
              aspectRatio="portrait"
              interval={6000}
              className="rounded-2xl"
            />
          </div>
          
          {/* Overlay and decorative elements */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 shadow-inner"></div>
          <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-red-500/20 to-rose-400/20 rounded-full blur-md"></div>
          <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-amber-300/20 rounded-full blur-md"></div>
          
          {/* Social overlays */}
          {/* TikTok followers */}
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{ 
              delay: 0.3, 
              duration: 4,
              repeat: Infinity,
              type: "spring",
              stiffness: 100,
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            whileHover={{ scale: 1.05 }}
            className="absolute right-0 sm:-right-4 md:right-4 top-1/4 glass-card p-3 sm:p-4 rounded-xl shadow-xl z-10 backdrop-blur-sm bg-white/50 border border-white/30 transition-shadow" 
            style={{ maxWidth: "130px", minWidth: "120px" }}
          >
            <div className="flex items-center gap-2">
              <div className="bg-black rounded-full p-1.5">
                <motion.svg 
                  className="h-4 w-4 text-white" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  animate={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </motion.svg>
              </div>
              <div>
                <motion.p 
                  className="font-bold text-sm sm:text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >231.5K+</motion.p>
                <p className="text-[10px] sm:text-xs text-black/70">TikTok Followers</p>
              </div>
            </div>
          </motion.div>
          
          {/* Instagram followers */}
          <motion.div 
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              scale: 1,
              y: [0, -12, 0]
            }}
            transition={{ 
              delay: 0.5, 
              duration: 5,
              repeat: Infinity,
              type: "spring",
              stiffness: 100,
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }
            }}
            whileHover={{ scale: 1.05 }}
            className="absolute left-0 sm:-left-4 md:left-4 top-2/3 glass-card p-3 sm:p-4 rounded-xl shadow-xl z-10 backdrop-blur-sm bg-white/50 border border-white/30 transition-shadow" 
            style={{ maxWidth: "130px", minWidth: "120px" }}
          >
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-tr from-purple-600 to-pink-500 rounded-full p-1.5">
                <motion.svg 
                  className="h-4 w-4 text-white" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </motion.svg>
              </div>
              <div>
                <motion.p 
                  className="font-bold text-sm sm:text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >238K+</motion.p>
                <p className="text-[10px] sm:text-xs text-black/70">Instagram Followers</p>
              </div>
            </div>
          </motion.div>

          {/* Facebook followers */}
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              scale: 1,
              y: [0, -8, 0]
            }}
            transition={{ 
              delay: 0.7, 
              duration: 4.5,
              repeat: Infinity,
              type: "spring",
              stiffness: 100,
              y: {
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }
            }}
            whileHover={{ scale: 1.05 }}
            className="absolute right-0 sm:-right-4 md:right-4 bottom-1/4 glass-card p-3 sm:p-4 rounded-xl shadow-xl z-10 backdrop-blur-sm bg-white/50 border border-white/30 transition-shadow" 
            style={{ maxWidth: "130px", minWidth: "120px" }}
          >
            <div className="flex items-center gap-2">
              <div className="bg-[#1877F2] rounded-full p-1.5">
                <motion.svg 
                  className="h-4 w-4 text-white" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </motion.svg>
              </div>
              <div>
                <motion.p 
                  className="font-bold text-sm sm:text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >185K+</motion.p>
                <p className="text-[10px] sm:text-xs text-black/70">Facebook Followers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
