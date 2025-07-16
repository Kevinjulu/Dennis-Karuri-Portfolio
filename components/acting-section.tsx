"use client"

import { motion } from "framer-motion"
import { Award, Brush, Sparkles } from "lucide-react"
import Image from "next/image"
import { YouTubeEmbed } from "@/components/youtube-embed"
import { VideoPlayer } from "@/components/video-player"
import { VideoModal } from "@/components/video-modal"
import { useState } from "react"

export function ActingSection() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<{
    videoId?: string;
    localVideoSrc?: string;
    title: string;
  } | null>(null)
  const credits = [
    {
      title: "Celebrity Bridal Makeup",
      role: "Lead Makeup Artist",
      year: "2023",
      production: "Fashion Magazine Cover",
      image: "/images/Karuri (24).jpg",
    },
    {
      title: "Red Carpet Glam",
      role: "Celebrity Makeup Artist",
      year: "2023",
      production: "Award Show",
      image: "/images/Karuri (25).jpg",
    },
    {
      title: "Editorial Photoshoot",
      role: "Creative Director & Makeup Artist",
      year: "2022",
      production: "Fashion Magazine",
      image: "/images/Karuri (26).jpg",
    },
    {
      title: "Masterclass Workshop",
      role: "Instructor & Demonstrator",
      year: "2022",
      production: "Beauty Academy",
      image: "/images/Karuri (27).jpg",
    },
  ]

  // Define YouTube video IDs and local video paths
  const youtubeVideos = [
    {
      id: "1Yb00blInuw", // Dennis Karuri YouTube video 1
      title: "Makeup Tutorial | Dennis Karuri",
      thumbnail: "/images/Karuri (42).jpg"
    },
    {
      id: "S4im3wGxSP8", // Dennis Karuri YouTube video 2
      title: "Glamour Transformation | Dennis Karuri",
      thumbnail: "/images/Karuri (35).jpg"
    },
    {
      id: "dr2_8S1NWAA", // Dennis Karuri YouTube video 3
      title: "Beauty Masterclass | Dennis Karuri",
      thumbnail: "/images/Karuri (36).jpg"
    },
    {
      id: "Wj844oPp2ro", // Dennis Karuri YouTube video 4
      title: "Celebrity Makeup Session | Dennis Karuri",
      thumbnail: "/images/Karuri (38).jpg"
    },
    {
      id: "cpPVer2HyWY", // Dennis Karuri YouTube video 5
      title: "Red Carpet Ready | Dennis Karuri",
      thumbnail: "/images/Karuri (40).jpg"
    },
    {
      id: "mbhBNVvJUvI", // Dennis Karuri YouTube video 6
      title: "Bridal Makeup Tutorial | Dennis Karuri",
      thumbnail: "/images/Karuri (41).jpg"
    }
  ]
  
  // Removed local portrait videos array

  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">Makeup Artistry</h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            From celebrity clients to editorial shoots, I create stunning makeup looks with creativity and precision
          </p>
        </motion.div>

        {/* Featured Showreel */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Featured Videos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* YouTube Videos */}
            {youtubeVideos.map((video, index) => (
              <motion.div
                key={index}
                className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => {
                  setSelectedVideo({
                    videoId: video.id,
                    title: video.title
                  })
                  setModalOpen(true)
                }}
              >
                {/* Custom thumbnail with play button overlay */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-center">
                    <motion.div 
                      className="bg-red-500 rounded-full p-3 shadow-lg mb-4"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ scale: 0.9, opacity: 0.8 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </motion.div>
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 p-4"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h4 className="text-white font-medium text-sm md:text-base truncate">{video.title}</h4>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Removed local portrait videos */}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {credits.map((credit, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                <Image
                  src={credit.image || "/placeholder.svg?height=400&width=600"}
                  alt={credit.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-red-500/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                    {credit.year}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-white text-xl font-bold">{credit.title}</h3>
                  <p className="text-white/80 text-sm">{credit.production}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Brush className="h-5 w-5 text-red-500" />
                  <p className="font-medium text-lg">{credit.role}</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {credit.title === "Celebrity Bridal Makeup" &&
                    "Created a stunning bridal look for a high-profile client featured on a magazine cover."}
                  {credit.title === "Red Carpet Glam" &&
                    "Designed glamorous makeup looks for celebrities attending a major award show."}
                  {credit.title === "Editorial Photoshoot" &&
                    "Directed and executed creative makeup concepts for a fashion magazine editorial."}
                  {credit.title === "Masterclass Workshop" &&
                    "Taught advanced makeup techniques to aspiring artists in a sold-out workshop."}
                </p>
              </div>
            </motion.div>
          ))}
        </div>



        {/* Video Modal */}
        <VideoModal 
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          videoId={selectedVideo?.videoId}
          localVideoSrc={selectedVideo?.localVideoSrc}
          title={selectedVideo?.title || ""}
        />
        
        <motion.div
          className="mt-12 glass-card p-6 rounded-xl border border-red-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center gap-4">
            <div className="bg-red-50 p-3 rounded-full">
              <Sparkles className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <h3 className="font-bold text-xl">Brand Collaborations</h3>
              <p className="text-muted-foreground">
                Partnered with leading beauty brands for exclusive product launches and campaigns
              </p>
            </div>
          </div>
          <div className="mt-4 pl-16">
            <p className="text-sm text-muted-foreground">
              Featured in beauty campaigns for MAC Cosmetics, Fenty Beauty, and other major makeup brands across East Africa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
