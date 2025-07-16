"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { SocialOverlay } from "@/components/social-overlay"
import { OptimizedImage } from "@/components/optimized-image"
import { preloadImages } from "@/lib/utils"

// Selected high-quality images of Dennis Karuri (solo images only)
const carouselImages = [
  "/images/Other images/Karuri (55).jpg",
  "/images/Other images/Karuri (73).jpg",
  "/images/Other images/Karuri (52).jpg"
]

export function HeroImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const [imageErrors, setImageErrors] = useState<boolean[]>(Array(carouselImages.length).fill(false))
  
  // Set up the carousel after component mounts
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Mark that we're now on the client side
    setIsClient(true)
    
    // Preload all carousel images
    preloadImages(carouselImages).catch(err => console.error('Error preloading images:', err))
    
    // Set up auto-rotation
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Skip images that failed to load
        let nextIndex = (prevIndex + 1) % carouselImages.length
        let attempts = 0
        
        // If the next image has an error, skip it (but avoid infinite loop)
        while (imageErrors[nextIndex] && attempts < carouselImages.length) {
          nextIndex = (nextIndex + 1) % carouselImages.length
          attempts++
        }
        
        return nextIndex
      })
    }, 5000)
    
    return () => clearInterval(interval)
  }, [imageErrors])
  
  return (
    <div className="relative aspect-[3/4] lg:aspect-[2/3] w-full max-w-[240px] mx-auto min-h-[180px] max-h-[240px]">
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-red-200 to-rose-100 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
      
      {/* Image container - conditionally render based on client/server */}
      {!isClient ? (
        // Static version for server-side rendering
        <div className="absolute inset-0">
          <OptimizedImage
            src={carouselImages[0]}
            alt="Dennis Karuri Portrait"
            className="rounded-2xl shadow-2xl"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 320px, (max-width: 1024px) 380px, 450px"
            quality={85}
            aspectRatio="aspect-[3/4]"
          />
        </div>
      ) : (
        // Animated version for client-side rendering
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <OptimizedImage
              src={imageErrors[currentIndex] ? "/placeholder.svg" : carouselImages[currentIndex]}
              alt={`Dennis Karuri Portrait ${currentIndex + 1}`}
              className="rounded-2xl shadow-2xl"
              priority={currentIndex === 0}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 320px, (max-width: 1024px) 380px, 450px"
              quality={85}
              aspectRatio="aspect-[3/4]"
              onError={() => {
                console.error(`Failed to load image at index ${currentIndex}`)
                setImageErrors(prev => {
                  const newState = [...prev]
                  newState[currentIndex] = true
                  return newState
                })
              }}
            />
          </motion.div>
        </AnimatePresence>
      )}
      
      {/* Overlay and decorative elements */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 shadow-inner"></div>
      <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-red-500/20 to-rose-400/20 rounded-full blur-md"></div>
      <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-amber-300/20 rounded-full blur-md"></div>
      
      {/* Social overlays */}
      <SocialOverlay />
    </div>
  )
}
