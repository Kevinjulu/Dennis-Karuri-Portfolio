"use client"

import { useEffect, useState } from "react"

interface YouTubeEmbedProps {
  videoId: string
  title: string
  startAt?: number
  className?: string
}

export function YouTubeEmbed({ videoId, title, startAt = 0, className = "" }: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  // Lazy load the iframe to improve initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleThumbnailClick = () => {
    setIsPlaying(true)
  }

  return (
    <div className={`relative aspect-video bg-black/5 rounded-xl overflow-hidden ${className}`}>
      {!isPlaying && (
        <div className="absolute inset-0 cursor-pointer group" onClick={handleThumbnailClick}>
          {/* Thumbnail */}
          <img
            src={thumbnailUrl || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1" />
            </div>
          </div>
        </div>
      )}

      {isPlaying && isLoaded && (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?start=${startAt}&autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0"
        />
      )}

      {isPlaying && !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  )
}

