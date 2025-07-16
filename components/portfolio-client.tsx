"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Film, Camera, Mic, Play } from "lucide-react"
import dynamic from "next/dynamic"
import { ClientOnly } from "@/components/client-only"
import Image from "next/image"

interface Video {
  id: string
  title: string
  description: string
  type: string
  category: string
  thumbnail: string
}

// Dynamically import YouTube component
const YouTubeEmbed = dynamic(() => import("@/components/youtube-embed").then(mod => mod.YouTubeEmbed), {
  ssr: false,
  loading: () => (
    <div className="aspect-video bg-black/10 rounded-xl animate-pulse flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
})

export default function ClientPortfolioPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [showAllVideos, setShowAllVideos] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Featured videos with YouTube IDs and thumbnails
  const featuredVideos = [
    {
      id: "NORP0g2LU4I",
      title: "Makeup Artistry Showcase",
      description: "A showcase of my best makeup transformations and artistic creations.",
      type: "showcase",
      category: "makeup",
      thumbnail: "/images/Karuri (15).jpg"
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Behind the Scenes",
      description: "Get a glimpse of what goes into creating stunning makeup looks.",
      type: "tutorial",
      category: "makeup",
      thumbnail: "/images/Karuri (33).jpg"
    },
    {
      id: "9bZkp7q19f0",
      title: "Bridal Makeup Special",
      description: "Special bridal makeup techniques and transformations.",
      type: "tutorial",
      category: "bridal",
      thumbnail: "/images/Karuri (52).jpg"
    },
    {
      id: "M7FIvfx5J10",
      title: "Makeup Tips & Tricks",
      description: "Essential makeup tips and techniques for a flawless look.",
      type: "tutorial",
      category: "tips",
      thumbnail: "/images/Karuri (67).jpg"
    },
    {
      id: "31sebfGnj2A",
      title: "Celebrity Makeup Transformation",
      description: "Creating celebrity-inspired makeup looks.",
      type: "transformation",
      category: "celebrity",
      thumbnail: "/images/Karuri (44).jpg"
    },
    {
      id: "K9P7wxJGJkQ",
      title: "Professional Beauty Tips",
      description: "Expert beauty advice and professional makeup techniques.",
      type: "tutorial",
      category: "professional",
      thumbnail: "/images/Karuri (19).jpg"
    }
  ]

  const displayedVideos = showAllVideos ? featuredVideos : featuredVideos.slice(0, 3)

  return (
    <ClientOnly>
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Makeup Artistry</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore my collection of makeup tutorials, transformations, and behind-the-scenes content.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {selectedVideo === video.id ? (
                  <div className="aspect-video rounded-xl overflow-hidden">
                    <YouTubeEmbed videoId={video.id} title={video.title} />
                  </div>
                ) : (
                  <div 
                    className="aspect-video rounded-xl overflow-hidden relative cursor-pointer"
                    onClick={() => setSelectedVideo(video.id)}
                  >
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-all duration-300">
                      <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-white font-semibold text-lg">{video.title}</h3>
                      <p className="text-white/80 text-sm line-clamp-2">{video.description}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {featuredVideos.length > 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center mt-8"
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAllVideos(!showAllVideos)}
                className="min-w-[200px]"
              >
                {showAllVideos ? "Show Less" : "Show More"}
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </ClientOnly>
  )
}


