"use client"

import { useState, useRef, useEffect } from "react"

interface PortfolioVideoProps {
  src: string
  poster?: string
  className?: string
}

export function PortfolioVideo({ src, poster, className = "" }: PortfolioVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Set mounted state after component mounts to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Simple static version for server-side rendering
  if (!isMounted) {
    return (
      <div className={`relative w-full h-full ${className}`}>
        <div className="w-full h-full bg-black/10">
          {poster && (
            <img 
              src={poster} 
              alt="Video thumbnail" 
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
        onClick={handlePlayPause}
      />
      {!isPlaying && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
          onClick={handlePlayPause}
        >
          <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center hover:scale-110 transition-transform">
            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1" />
          </div>
        </div>
      )}
    </div>
  )
}
