"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Film, Camera, Mic, Play } from "lucide-react"
import { YouTubeEmbed } from "@/components/youtube-embed"
import { ImageWithBlur } from "@/components/image-with-blur"
import { RotatingImage } from "@/components/rotating-image"
import { PortfolioVideo } from "@/components/portfolio-video"

export default function PortfolioPage() {
  const [filter, setFilter] = useState("all")

  // Featured videos with YouTube IDs
  const featuredVideos = [
    {
      id: "f86T7dB0uPQ", // Country Queen Trailer
      title: "Country Queen | Official Trailer | Netflix",
      description:
        "Playing the role of a receptionist in this gripping Netflix drama about land grabbing and exploitation in rural Kenya.",
      type: "netflix",
    },
    {
      id: "wLZNHNGaGbU", // Diana Luvanda video
      title: "Diana Luvanda | Featured Video",
      description:
        "Showcasing my talent and personality in this featured video highlighting my work as an actress and content creator.",
      type: "showmax",
    },
    {
      id: "NoyZeHCIf-M", // Diana Luvanda additional video
      title: "Diana Luvanda | Performance Highlights",
      description: "A collection of my best performances and creative work showcasing my range as an actress and content creator.",
      type: "netflix",
    },
  ]

  const portfolioItems = [
    {
      id: 1,
      title: "Country Queen",
      category: "acting",
      image: "/media/country-queen-netflix.jpg",
      description: "Netflix Series - Receptionist",
      featured: true,
      videoId: "f86T7dB0uPQ",
    },
    {
      id: 2,
      title: "Antisocial",
      category: "acting",
      image: "/media/antisocial-showmax.jpg",
      description: "Showmax Original - Kanana",
    },
    {
      id: 3,
      title: "Fashion Campaign",
      category: "modeling",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562512871.jpg-q9lkUNUDP7EpnTom59EzNu67VE7Y3r.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562381812.jpg-kovQtoD52PNqpBpkjIQlzk332wBrgF.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562334188.jpg-7WU1GwavMtQpUZmKAsWKMKIIGWhSlW.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562570375.jpg-GVGUtD7qIWaP2am7EqhgRvlwKlH3zd.jpeg"
      ],
      image: "/media/fashion-campaign.jpeg", // Keeping for backwards compatibility
      description: "Commercial Photoshoot",
      rotating: true,
    },
    {
      id: 4,
      title: "TikTok Content",
      category: "content",
      image: "/media/tiktok-content.jpeg",
      description: "Viral TikTok Series",
      featured: true,
      video: "/videos/Diana Luvanda  Video.mp4",
      hasVideo: true,
    },
    {
      id: 5,
      title: "Disconnect 2",
      category: "acting",
      image: "/media/disconnect-netflix.jpg",
      description: "Netflix Film - Linet",
      videoId: "YZa7G9HHRKg",
      embedVideo: true
    },
    {
      id: 6,
      title: "Brand Campaign",
      category: "modeling",
      image: "/media/brand-campaign.jpeg",
      description: "Commercial Advertisement",
    },
    {
      id: 7,
      title: "YouTube Channel",
      category: "content",
      image: "/media/youtube-channel.jpeg",
      description: "Personal Vlog Series",
    },
    {
      id: 8,
      title: "Zora",
      category: "acting",
      image: "/media/zora-tv.jpg",
      description: "Television Series - Fella's Side Chic",
    },
    {
      id: 9,
      title: "Editorial Shoot",
      category: "modeling",
      image: "/media/editorial-shoot.jpeg",
      description: "Fashion Magazine Feature",
    },
  ]

  const filteredItems = filter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === filter)

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="px-4 md:px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">My Portfolio</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing my work across acting, modeling, and content creation
            </p>
          </motion.div>

          {/* Featured Videos Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Appearances</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Featured Video - Country Queen */}
              <motion.div
                className="glass-card rounded-xl overflow-hidden lg:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <YouTubeEmbed videoId={featuredVideos[0].id} title={featuredVideos[0].title} />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium">Netflix</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{featuredVideos[0].title}</h3>
                  <p className="text-muted-foreground">{featuredVideos[0].description}</p>
                </div>
              </motion.div>

              {/* Side Videos */}
              <div className="lg:space-y-8">
                {featuredVideos.slice(1).map((video, index) => (
                  <motion.div
                    key={video.id}
                    className="glass-card rounded-xl overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  >
                    <YouTubeEmbed videoId={video.id} title={video.title} />
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            video.type === "netflix" ? "bg-red-100 text-red-600" : "bg-purple-100 text-purple-600"
                          }`}
                        >
                          {video.type === "netflix" ? "Netflix" : "Showmax"}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-1">{video.title}</h3>
                      <p className="text-sm text-muted-foreground">{video.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Image Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Image</h2>
            <motion.div
              className="glass-card rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-component-name="PortfolioPage"
            >
              <div className="relative aspect-[16/9] md:aspect-[21/9] w-full">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562512871.jpg-q9lkUNUDP7EpnTom59EzNu67VE7Y3r.jpeg"
                  alt="Diana Luvanda Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6" data-component-name="PortfolioPage">
                <h3 className="text-xl font-bold mb-2" data-component-name="PortfolioPage">Diana Luvanda</h3>
                <p className="text-muted-foreground">Actress, Model & Content Creator</p>
              </div>
            </motion.div>
          </div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-gradient-to-r from-red-500 to-rose-400" : ""}
            >
              All Work
            </Button>
            <Button
              variant={filter === "acting" ? "default" : "outline"}
              onClick={() => setFilter("acting")}
              className={filter === "acting" ? "bg-gradient-to-r from-red-500 to-rose-400" : ""}
            >
              <Film className="mr-2 h-4 w-4" />
              Acting
            </Button>
            <Button
              variant={filter === "modeling" ? "default" : "outline"}
              onClick={() => setFilter("modeling")}
              className={filter === "modeling" ? "bg-gradient-to-r from-red-500 to-rose-400" : ""}
            >
              <Camera className="mr-2 h-4 w-4" />
              Modeling
            </Button>
            <Button
              variant={filter === "content" ? "default" : "outline"}
              onClick={() => setFilter("content")}
              className={filter === "content" ? "bg-gradient-to-r from-red-500 to-rose-400" : ""}
            >
              <Mic className="mr-2 h-4 w-4" />
              Content
            </Button>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="glass-card rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="relative h-64 overflow-hidden" data-component-name="PortfolioPage">
                  {item.embedVideo && item.videoId ? (
                    <YouTubeEmbed videoId={item.videoId} title={item.title} />
                  ) : item.hasVideo && item.video ? (
                    <PortfolioVideo 
                      src={item.video} 
                      poster={item.image}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : item.rotating && item.images ? (
                    <RotatingImage 
                      images={item.images} 
                      alt={item.title} 
                      interval={4000}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <ImageWithBlur
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  {item.videoId && !item.embedVideo && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" data-component-name="PortfolioPage">
                      <Button
                        variant="outline"
                        size="lg"
                        className="text-white border-white hover:bg-white/20"
                        onClick={() => window.open(`https://www.youtube.com/watch?v=${item.videoId}`, "_blank")}
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Watch Trailer
                      </Button>
                    </div>
                  )}
                </div>
                <div className="p-6" data-component-name="PortfolioPage">
                  <h3 className="text-xl font-bold mb-2" data-component-name="PortfolioPage">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
