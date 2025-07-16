"use client"

import { useState, useRef, useEffect } from "react"
import { Play } from "lucide-react"
import { motion } from "framer-motion"

interface VideoPlayerProps {
  src: string
  title?: string
  poster?: string
  className?: string
  autoPlay?: boolean
  controls?: boolean
  onClick?: () => void
}

export function VideoPlayer({ 
  src, 
  title = "Video", 
  poster, 
  className = "", 
  autoPlay = false,
  controls = true,
  onClick
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isLoaded, setIsLoaded] = useState(false)
  const [thumbnailLoaded, setThumbnailLoaded] = useState(!!poster)
  const videoRef = useRef<HTMLVideoElement>(null)
  
  // Handle autoPlay prop changes
  useEffect(() => {
    if (autoPlay && videoRef.current) {
      setIsPlaying(true)
      videoRef.current.play().catch(err => console.error("Autoplay failed:", err))
    }
  }, [autoPlay])

  const handlePlay = () => {
    setIsPlaying(true)
    if (onClick) onClick()
  }

  const handleThumbnailLoad = () => {
    setThumbnailLoaded(true)
  }

  // Generate a default thumbnail if none provided
  // Use only existing images
  const existingImages = [1, 3, 10, 20]
  const defaultPoster = poster || `/images/Karuri (${existingImages[Math.floor(Math.random() * existingImages.length)]}).jpg`

  return (
    <div className={`relative bg-black/5 overflow-hidden ${className}`}>
      {!isPlaying ? (
        <div 
          className="absolute inset-0 cursor-pointer group" 
          onClick={handlePlay}
        >
          {/* Thumbnail with loading state */}
          {!thumbnailLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          
          <img
            src={defaultPoster}
            alt={title}
            className={`w-full h-full object-cover transition-opacity duration-300 ${thumbnailLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            onLoad={handleThumbnailLoad}
          />
          
          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-white text-sm font-medium truncate">{title}</p>
          </div>
          
          {/* Play button overlay with animation */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
            <motion.div 
              className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-red-500 flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Play className="w-7 h-7 text-white ml-1" />
            </motion.div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-red-500/20 to-rose-400/20 rounded-full blur-md"></div>
          <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-amber-300/20 rounded-full blur-md"></div>
        </div>
      ) : (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/80">
              <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <video 
            ref={videoRef}
            src={src} 
            autoPlay={isPlaying}
            controls={controls}
            className={`w-full h-full transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            title={title}
            poster={poster}
            onLoadedData={() => setIsLoaded(true)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </>
      )}
    </div>
  )
}
