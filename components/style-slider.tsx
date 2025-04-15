"use client"

import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    id: 1,
    title: "Style",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20(8)-0obSNKTrIy1t6gGzbszW5RoX6Wde4U.jpeg",
  },
  {
    id: 2,
    title: "Fashion",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20(2)-GuxB2Cb4XC7mbAEV24mDdgf1kjEvHI.jpeg",
  },
  {
    id: 3,
    title: "Model",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20(5)-5a64sXWcM02Kgh3nfyuvrgLnun9AVs.jpeg",
  },
]

export function StyleSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, nextSlide])

  return (
    <section className="relative h-[90vh] w-full overflow-hidden mt-8 mb-16">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image || "/placeholder.svg"}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-black/20 rounded-full h-12 w-12"
          onClick={() => {
            prevSlide()
            setAutoplay(false)
          }}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <motion.h2
          key={slides[currentSlide].title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl md:text-8xl font-playfair text-white text-center drop-shadow-lg"
        >
          {slides[currentSlide].title}
        </motion.h2>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-black/20 rounded-full h-12 w-12"
          onClick={() => {
            nextSlide()
            setAutoplay(false)
          }}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white w-8" : "bg-white/50"}`}
            onClick={() => {
              setCurrentSlide(index)
              setAutoplay(false)
            }}
          />
        ))}
      </div>
    </section>
  )
}

