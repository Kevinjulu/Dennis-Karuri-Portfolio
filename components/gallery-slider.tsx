"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { OptimizedImage } from "@/components/optimized-image"
import { preloadImages } from "@/lib/utils"

const images = [
  {
    url: "/images/Other images/Karuri (50).jpg",
    alt: "Dennis Karuri Makeup Work",
    caption: "Glamour Transformation",
    category: "Makeup",
  },
  {
    url: "/images/Other images/Karuri (51).jpg",
    alt: "Dennis Karuri Beauty Look",
    caption: "Bold Beauty",
    category: "Creative",
  },
  {
    url: "/images/Other images/Karuri (52).jpg",
    alt: "Dennis Karuri Editorial",
    caption: "Editorial Excellence",
    category: "Fashion",
  },
  {
    url: "/images/Other images/Karuri (53).jpg",
    alt: "Dennis Karuri Bridal",
    caption: "Bridal Perfection",
    category: "Wedding",
  },
  {
    url: "/images/Other images/Karuri (54).jpg",
    alt: "Dennis Karuri Artistic",
    caption: "Artistic Vision",
    category: "Creative",
  },
]

export function GallerySlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [imageErrors, setImageErrors] = useState<boolean[]>(Array(images.length).fill(false))

  // Preload images after component mounts
  useEffect(() => {
    preloadImages(images.map(img => img.url))
      .catch(err => console.error('Error preloading gallery images:', err))
  }, [])

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let nextIndex = (prevIndex + newDirection + images.length) % images.length
      let attempts = 0
      
      // Skip images that failed to load
      while (imageErrors[nextIndex] && attempts < images.length) {
        nextIndex = (nextIndex + newDirection + images.length) % images.length
        attempts++
      }
      
      return nextIndex
    })
  }, [imageErrors])

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="relative aspect-video rounded-2xl overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 1000 : -1000 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -1000 : 1000 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="relative w-full h-full">
                <OptimizedImage
                  src={imageErrors[currentIndex] ? "/placeholder.svg" : images[currentIndex].url}
                  alt={images[currentIndex].alt}
                  className="object-cover"
                  priority={currentIndex === 0}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  quality={85}
                  aspectRatio="aspect-video"
                  preload={true}
                  onError={() => {
                    console.error(`Failed to load gallery image at index ${currentIndex}`)
                    setImageErrors(prev => {
                      const newState = [...prev]
                      newState[currentIndex] = true
                      return newState
                    })
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-xl"
                  >
                    <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      {images[currentIndex].category}
                    </span>
                    <h3 className="text-4xl font-playfair mt-4">{images[currentIndex].caption}</h3>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full h-12 w-12"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full h-12 w-12"
            onClick={() => paginate(1)}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="mt-8 grid grid-cols-5 gap-4 px-4">
          {images.map((image, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`relative aspect-[3/4] rounded-lg overflow-hidden ${
                index === currentIndex ? "ring-2 ring-red-500" : ""
              }`}
            >
              <OptimizedImage 
                src={imageErrors[index] ? "/placeholder.svg" : image.url} 
                alt={image.alt} 
                className="object-cover"
                quality={60}
                sizes="(max-width: 768px) 20vw, 150px"
                aspectRatio="aspect-[3/4]"
                onError={() => {
                  console.error(`Failed to load thumbnail at index ${index}`)
                  setImageErrors(prev => {
                    const newState = [...prev]
                    newState[index] = true
                    return newState
                  })
                }}
              />
              <div className={`absolute inset-0 bg-black/20 ${index === currentIndex ? "bg-black/0" : ""}`} />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
