"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { OptimizedImage } from "@/components/optimized-image"
import { preloadImages } from "@/lib/utils"

interface ImageCarouselProps {
  images: string[]
  interval?: number
  showControls?: boolean
  className?: string
  aspectRatio?: "square" | "video" | "portrait" | "auto"
}

export function ImageCarousel({
  images,
  interval = 5000,
  showControls = true,
  className = "",
  aspectRatio = "square"
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [imageErrors, setImageErrors] = useState<boolean[]>(Array(images.length).fill(false))

  // Preload images after component mounts
  useEffect(() => {
    preloadImages(images)
      .catch(err => console.error('Error preloading carousel images:', err))
  }, [images])

  useEffect(() => {
    if (isHovering) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        let nextIndex = (prevIndex + 1) % images.length
        let attempts = 0
        
        // Skip images that failed to load
        while (imageErrors[nextIndex] && attempts < images.length) {
          nextIndex = (nextIndex + 1) % images.length
          attempts++
        }
        
        return nextIndex
      })
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval, isHovering, imageErrors])

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      let nextIndex = (prevIndex + 1) % images.length
      let attempts = 0
      
      while (imageErrors[nextIndex] && attempts < images.length) {
        nextIndex = (nextIndex + 1) % images.length
        attempts++
      }
      
      return nextIndex
    })
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      let nextIndex = (prevIndex - 1 + images.length) % images.length
      let attempts = 0
      
      while (imageErrors[nextIndex] && attempts < images.length) {
        nextIndex = (nextIndex - 1 + images.length) % images.length
        attempts++
      }
      
      return nextIndex
    })
  }

  const aspectRatioClass = 
    aspectRatio === "square" ? "aspect-square" :
    aspectRatio === "video" ? "aspect-video" :
    aspectRatio === "portrait" ? "aspect-[3/4]" : ""

  return (
    <div 
      className={`relative overflow-hidden rounded-xl ${aspectRatioClass} ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <OptimizedImage
            src={imageErrors[currentIndex] ? "/placeholder.svg" : images[currentIndex]}
            alt={`Carousel image ${currentIndex + 1}`}
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            priority={currentIndex === 0}
            quality={85}
            aspectRatio={aspectRatioClass}
            preload={true}
            onError={() => {
              console.error(`Failed to load carousel image at index ${currentIndex}`)
              setImageErrors(prev => {
                const newState = [...prev]
                newState[currentIndex] = true
                return newState
              })
            }}
          />
        </motion.div>
      </AnimatePresence>

      {showControls && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all ${
              currentIndex === index ? "w-6 bg-white" : "w-1.5 bg-white/50"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
