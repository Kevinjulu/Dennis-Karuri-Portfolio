"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562494874.jpg-QqdOUvy4fxWDFqNdE8q5e4NUeL7Sz3.jpeg",
    alt: "Diana in Red",
    caption: "Style & Grace",
    category: "Fashion",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562595365.jpg-fj7KH4HbKgMTVKYJfwUk5IbfYC8bF6.jpeg",
    alt: "Diana in Pink",
    caption: "Elegance",
    category: "Glamour",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562964522.jpg-RIuqkkI2u9dMi98VnQ3nNv19XYzttR.jpeg",
    alt: "Diana Casual",
    caption: "Natural Beauty",
    category: "Lifestyle",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562381812.jpg-HMHb2DddAP5Mti0hDcgoBbBGT62MzO.jpeg",
    alt: "Diana Evening",
    caption: "Evening Glamour",
    category: "Fashion",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562751954.jpg-EDdNbEs5omH4VKkB7TUrLwteNj0CM9.jpeg",
    alt: "Diana Studio",
    caption: "Studio Elegance",
    category: "Fashion",
  },
]

export function GallerySlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + images.length) % images.length)
  }, [])

  useEffect(() => {
    if (!isHovered) {
      const timer = setTimeout(() => {
        paginate(1)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [isHovered, paginate])

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white to-pink-50 py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-playfair text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio Highlights
        </motion.h2>

        <div
          className="relative h-[80vh] max-h-[800px] overflow-hidden rounded-2xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
              className="absolute inset-0"
            >
              <div className="relative w-full h-full">
                <Image
                  src={images[currentIndex].url || "/placeholder.svg"}
                  alt={images[currentIndex].alt}
                  fill
                  className="object-cover"
                  priority
                  quality={80}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiB2ZXJzaW9uPSIxLjEiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjZmZlNGU2Ii8+PC9zdmc+"
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
              <Image 
                src={image.url || "/placeholder.svg"} 
                alt={image.alt} 
                fill 
                className="object-cover"
                quality={60}
                sizes="(max-width: 768px) 20vw, 150px"
                loading="lazy"
              />
              <div className={`absolute inset-0 bg-black/20 ${index === currentIndex ? "bg-black/0" : ""}`} />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
