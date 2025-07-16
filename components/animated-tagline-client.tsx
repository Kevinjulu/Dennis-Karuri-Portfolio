"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star } from "lucide-react"

// Creative taglines for Dennis Karuri
const taglines = [
  "Makeup Artist & Beauty Influencer",
  "Transforming Faces, Breaking Boundaries",
  "Creating Art Beyond Convention",
  "Kenya's Beauty Visionary",
  "Redefining Beauty Standards",
  "Makeup Maestro & Trendsetter"
]

export default function AnimatedTaglineClient() {
  // Start with a static state to avoid hydration mismatch
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    // Mark that we're now on the client
    setIsClient(true)
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % taglines.length)
    }, 4000) // Change every 4 seconds
    
    return () => clearInterval(interval)
  }, [])
  
  // Letter animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.04, // Stagger the letters
      },
    }),
    exit: (i: number) => ({
      opacity: 0,
      y: -20,
      transition: {
        delay: i * 0.02,
      },
    }),
  }

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/20 shadow-sm">
      <span className="h-4 w-4 bg-yellow-500 rounded-full animate-pulse"></span>
      <span className="h-4 w-[1px] bg-gray-300/50"></span>
      
      {!isClient ? (
        // Static version for server-side rendering
        <span className="text-sm font-medium">{taglines[0]}</span>
      ) : (
        // Animated version for client-side rendering
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-sm font-medium overflow-hidden"
          >
            <div className="flex">
              {taglines[currentIndex].split("").map((letter, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  className={letter === " " ? "w-1.5" : ""}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
}
