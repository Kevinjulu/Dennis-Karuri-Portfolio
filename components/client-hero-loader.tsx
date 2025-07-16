"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { SocialOverlay } from "@/components/social-overlay"

// Selected high-quality images of Dennis Karuri (solo images only)
const carouselImages = [
  "/images/Other images/Karuri (55).jpg",
  "/images/Other images/Karuri (73).jpg",
  "/images/Other images/Karuri (52).jpg"
]

// This component is dynamically imported with ssr: false to avoid hydration issues
export default function ClientHeroLoader() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [imageErrors, setImageErrors] = useState<boolean[]>(Array(carouselImages.length).fill(false))
  
  // Set up the carousel after component mounts
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Mark component as loaded on client side
    setIsLoaded(true)
    
    // Preload images
    const preloadImages = async () => {
      const promises = carouselImages.map((src, index) => {
        return new Promise<void>((resolve) => {
          const img = new (window.Image as any)()
          img.src = src
          img.onload = () => resolve()
          img.onerror = () => {
            console.error(`Failed to load image: ${src}`)
            setImageErrors(prev => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
            resolve()
          }
        })
      })
      
      await Promise.all(promises)
    }
    
    preloadImages().catch(err => console.error('Error preloading images:', err))
    
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
  
  // Show a placeholder during SSR and initial client-side load
  if (typeof window === 'undefined' || !isLoaded) {
    return (
      <div className="aspect-[4/5] lg:aspect-[3/4] w-full h-full min-h-[320px] bg-gradient-to-br from-rose-100 to-pink-50 rounded-2xl animate-pulse flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-rose-200 border-t-rose-400 rounded-full animate-spin"></div>
      </div>
    )
  }
  
  return (
    <div className="relative aspect-[4/5] lg:aspect-[3/4] w-full h-full min-h-[320px]">
      {/* Decorative background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-rose-100 to-pink-50 rounded-2xl blur-xl opacity-70 animate-pulse-slow"></div>
      
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <Image
              src={imageErrors[currentIndex] ? "/images/Karuri (2).jpg" : carouselImages[currentIndex]}
              alt={`Dennis Karuri Portrait ${currentIndex + 1}`}
              fill
              className="object-cover object-center rounded-2xl"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={currentIndex === 0}
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIiB2ZXJzaW9uPSIxLjEiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjZmZlNGU2Ii8+PC9zdmc+"
              unoptimized
              onError={() => {
                console.error(`Failed to load image at index ${currentIndex}`)
                setImageErrors(prev => {
                  const newState = [...prev]
                  newState[currentIndex] = true
                  return newState
                })
              }}
            />
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Overlay and decorative elements */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 shadow-inner"></div>
      
      <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-red-500/20 to-rose-400/20 rounded-full blur-md"></div>
      <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-amber-300/20 rounded-full blur-md"></div>

      {/* Social Media Follower Count Overlays */}
      <SocialOverlay />
      
      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-4 bg-white" : "w-1.5 bg-white/50"
            } ${imageErrors[index] ? "opacity-30" : ""}`}
            disabled={imageErrors[index]}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
