"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Maximize2, Minimize2 } from "lucide-react"
import { YouTubeEmbed } from "./youtube-embed"
import { VideoPlayer } from "./video-player"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoId?: string
  localVideoSrc?: string
  title: string
}

// This is a workaround for the serialization issue
// The component that uses VideoModal should use useCallback for the onClose function

export function VideoModal({ isOpen, onClose, videoId, localVideoSrc, title }: VideoModalProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const modalRef = useRef<HTMLDivElement>(null)
  
  // Handle loading state
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true)
      const timer = setTimeout(() => setIsLoading(false), 1000)
      return () => clearTimeout(timer)
    }
  }, [isOpen, videoId, localVideoSrc])
  
  // Close on escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }
    
    window.addEventListener("keydown", handleEsc)
    
    // Prevent body scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden"
    }
    
    return () => {
      window.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])
  
  // Handle fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement && modalRef.current) {
      modalRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`)
      })
      setIsFullscreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
        setIsFullscreen(false)
      }
    }
  }
  
  // Monitor fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop with animated gradient */}
          <motion.div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <div className="absolute -z-10 top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-red-500/10 to-transparent opacity-30"></div>
            <div className="absolute -z-10 bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-red-500/10 to-transparent opacity-30"></div>
          </motion.div>
          
          {/* Modal Content */}
          <motion.div 
            ref={modalRef}
            className="relative z-10 w-full max-w-5xl rounded-xl overflow-hidden shadow-2xl bg-black"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 300 
            }}
          >
            {/* Control buttons */}
            <div className="absolute top-3 right-3 z-20 flex gap-2">
              <button 
                className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                onClick={toggleFullscreen}
                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              >
                {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
              </button>
              <button 
                className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                onClick={onClose}
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Loading indicator */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
                <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            {/* Video Content */}
            <div className={localVideoSrc && localVideoSrc.includes('1744962971520.mp4') ? "aspect-[9/16] bg-black mx-auto" : "aspect-video bg-black"}>
              {videoId && (
                <YouTubeEmbed 
                  videoId={videoId} 
                  title={title} 
                  className="w-full h-full"
                  autoplay={true}
                />
              )}
              
              {localVideoSrc && (
                <VideoPlayer 
                  src={localVideoSrc} 
                  title={title}
                  className="w-full h-full"
                  autoPlay
                  controls
                />
              )}
            </div>
            
            {/* Video Title */}
            <motion.div 
              className="p-4 bg-gradient-to-t from-black to-black/90 text-white"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="text-sm text-white/70 mt-1">{videoId ? "YouTube Video" : "Original Content"}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
