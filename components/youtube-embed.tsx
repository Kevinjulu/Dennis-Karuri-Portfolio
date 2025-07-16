"use client"

import { useEffect, useState, useRef } from "react"
import { Play, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface YouTubeEmbedProps {
  videoId: string
  title: string
  startAt?: number
  className?: string
  autoplay?: boolean
  thumbnail?: string
}

export function YouTubeEmbed({ 
  videoId, 
  title, 
  startAt = 0, 
  className = "", 
  autoplay = false,
  thumbnail
}: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false)
  const [thumbnailError, setThumbnailError] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Use webp format for better compression and faster loading
  // Fallback to standard thumbnail if webp fails
  const thumbnailUrl = thumbnail || (thumbnailError
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : `https://i.ytimg.com/vi_webp/${videoId}/maxresdefault.webp`)

  // Set initial state after component mounts to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true)
    if (autoplay) {
      setIsPlaying(true)
      setIsLoaded(true)
    }
  }, [autoplay])

  // Intersection Observer for lazy loading - only on client side
  useEffect(() => {
    if (!isMounted || !containerRef.current || autoplay) return
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoaded(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "200px" }
    )
    
    observer.observe(containerRef.current)
    
    return () => observer.disconnect()
  }, [autoplay, isMounted])

  const handleThumbnailClick = () => {
    setIsPlaying(true)
  }

  const handleThumbnailLoad = () => {
    setThumbnailLoaded(true)
  }

  const handleThumbnailError = () => {
    setThumbnailError(true)
    // Try HD thumbnail if maxres fails
    const img = new Image()
    img.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    img.onload = handleThumbnailLoad
  }

  // Simple placeholder during server rendering
  if (!isMounted) {
    return (
      <div className={`relative aspect-video bg-black/5 rounded-xl overflow-hidden ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center shadow-lg">
            <Play className="w-6 h-6 text-white ml-1" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div 
      ref={containerRef}
      className={`relative aspect-video bg-black/5 overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isPlaying && (
        <motion.div 
          className="absolute inset-0 cursor-pointer group" 
          onClick={handleThumbnailClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Thumbnail with loading state */}
          {!thumbnailLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              <Loader2 className="w-8 h-8 text-red-500 animate-spin" />
            </div>
          )}
          
          <motion.img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700"
            style={{ scale: isHovered ? 1.05 : 1 }}
            loading="lazy"
            onLoad={handleThumbnailLoad}
            onError={handleThumbnailError}
          />
          
          {/* Play button overlay with animation */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors duration-300"
            style={{ 
              backgroundColor: isHovered ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.3)"
            }}
          >
            <motion.div 
              className="relative w-16 h-16 md:w-20 md:h-20"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-red-500/30"
                initial={{ scale: 1 }}
                animate={{ scale: isHovered ? 1.4 : 1, opacity: isHovered ? 0 : 0.3 }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              
              {/* Play button */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-red-500 flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-8 h-8 text-white ml-1" />
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Title overlay */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white text-sm md:text-base font-medium line-clamp-2">{title}</h3>
          </motion.div>
        </motion.div>
      )}

      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/80">
                <Loader2 className="w-8 h-8 text-red-500 animate-spin" />
              </div>
            )}
            
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?start=${startAt}&autoplay=1&rel=0&modestbranding=1&loading=lazy&mute=0&controls=1&showinfo=0&playsinline=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              className="absolute inset-0"
              loading="lazy"
              style={{ opacity: isLoaded ? 1 : 0 }}
              onLoad={() => setIsLoaded(true)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

