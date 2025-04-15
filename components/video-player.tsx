"use client"

import { useState } from "react"
import { Play } from "lucide-react"

interface VideoPlayerProps {
  src: string
  title: string
  poster?: string
}

export function VideoPlayer({ src, title, poster }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="relative aspect-video bg-black/5">
      {!isPlaying ? (
        <div 
          className="absolute inset-0 cursor-pointer group" 
          onClick={() => setIsPlaying(true)}
          style={{
            backgroundImage: poster ? `url(${poster})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-white ml-1" />
            </div>
          </div>
        </div>
      ) : (
        <video 
          src={src} 
          autoPlay 
          controls 
          className="w-full h-full" 
          title={title}
          poster={poster}
        >
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  )
}
