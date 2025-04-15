"use client"

import { motion } from "framer-motion"
import { Award, Film } from "lucide-react"
import Image from "next/image"
import { YouTubeEmbed } from "@/components/youtube-embed"
import { VideoPlayer } from "@/components/video-player"

export function ActingSection() {
  const credits = [
    {
      title: "Country Queen",
      role: "Receptionist",
      year: "2022",
      production: "Netflix Series",
      image: "/media/country-queen-netflix.jpg",
    },
    {
      title: "Antisocial",
      role: "Kanana",
      year: "2023",
      production: "Showmax Original",
      image: "/media/antisocial-showmax.jpg",
    },
    {
      title: "Disconnect 2",
      role: "Linet",
      year: "2022",
      production: "Netflix Film",
      image: "/media/disconnect-netflix.jpg",
    },
    {
      title: "Zora",
      role: "Fella's Side Chic",
      year: "2021",
      production: "Television Series",
      image: "/media/zora-tv.jpg",
    },
  ]

  // Define YouTube video IDs and local video paths
  const youtubeVideos = [
    {
      id: "f86T7dB0uPQ", // Country Queen Trailer
      title: "Country Queen | Netflix",
    },
    {
      id: "wLZNHNGaGbU", // Diana Luvanda video
      title: "Diana Luvanda | Featured",
    },
    {
      id: "NoyZeHCIf-M", // Diana Luvanda additional video
      title: "Performance Highlights",
    },
  ]

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
          <h2 className="section-heading">Acting</h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            From Netflix series to Showmax originals, I bring characters to life with passion and authenticity
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
          <h3 className="text-2xl font-bold mb-6 text-center">Featured Showreel</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {youtubeVideos.map((video, index) => (
              <motion.div
                key={index}
                className="relative rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <YouTubeEmbed 
                  videoId={video.id} 
                  title={video.title} 
                  className="w-full aspect-video"
                />
              </motion.div>
            ))}
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
                  <Film className="h-5 w-5 text-red-500" />
                  <p className="font-medium text-lg">{credit.role}</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {credit.title === "Country Queen" &&
                    "A gripping drama about land grabbing and exploitation in a rural Kenyan town."}
                  {credit.title === "Antisocial" &&
                    "A modern story exploring the complexities of relationships in the digital age."}
                  {credit.title === "Disconnect 2" &&
                    "A romantic comedy following friends navigating love and life in Nairobi."}
                  {credit.title === "Zora" &&
                    "A popular drama series following the life and struggles of the main character Zora."}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 relative rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <YouTubeEmbed videoId="hR1YFJ_3WJU" title="Country Queen | Official Trailer | Netflix" startAt={0} />
        </motion.div>

        <motion.div
          className="mt-12 glass-card p-6 rounded-xl border border-red-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center gap-4">
            <div className="bg-red-50 p-3 rounded-full">
              <Award className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <h3 className="font-bold text-xl">Award Recognition</h3>
              <p className="text-muted-foreground">
                Nominated for "Breakout Actress of the Year" at the Africa Women Awards
              </p>
            </div>
          </div>
          <div className="mt-4 pl-16">
            <p className="text-sm text-muted-foreground">
              Also featured in music videos for Mr. Seed's "Yana Mwisho" and King Kaka's collaboration with Rich Mavoko.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
