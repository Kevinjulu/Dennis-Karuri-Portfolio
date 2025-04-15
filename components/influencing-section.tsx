"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"
import { motion } from "framer-motion"

export function InfluencingSection() {
  const brands = ["Co-operative Bank", "Naivas", "Tusker", "Various Brands"]

  const posts = [
    {
      id: 1,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562619776.jpg-C9D4k2koNHed60ufSbnO6XmHg0YGvq.jpeg",
      alt: "Diana in PINK branded content",
      category: "Brand Collaboration",
    },
    {
      id: 2,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740563245679.jpg-ZluwPKOW2OjuMpGbI1Ff1LScSl3AlN.jpeg",
      alt: "Diana in champagne silk dress",
      category: "Fashion Content",
    },
    {
      id: 3,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562334188.jpg-qzdEMir4zzQn7sfQ1kPZ9SrcCYVS3Z.jpeg",
      alt: "Diana in yellow dress at restaurant",
      category: "Lifestyle Content",
    },
    {
      id: 4,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562380996.jpg-GZhkIAf9uYzvhqFog8KzjB1bG2YbbU.jpeg",
      alt: "Diana in teal silk dress",
      category: "Event Content",
    },
    {
      id: 5,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740563087162.jpg-g6ZXdpf1UliyajlFTjbnulvb1TG9eg.jpeg",
      alt: "Diana in polka dot top",
      category: "Fashion Content",
    },
    {
      id: 6,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562856692.jpg-KlRgX94aE2x0PHjmeycYEmEl5P9GtW.jpeg",
      alt: "Diana in casual outfit outdoors",
      category: "Lifestyle Content",
    },
    {
      id: 7,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562595365.jpg-Oqz7Gk2y06Nb4MQ0TmUCdhL85JHRmo.jpeg",
      alt: "Diana in pink metallic dress",
      category: "Fashion Content",
    },
    {
      id: 8,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562512871.jpg-q9lkUNUDP7EpnTom59EzNu67VE7Y3r.jpeg",
      alt: "Diana in black velvet dress",
      category: "Fashion Content",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="section-heading text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Digital Influence
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {brands.map((brand, index) => (
            <div key={index} className="glass-card p-4 rounded-xl hover:scale-105 transition-transform duration-300">
              <p className="font-medium">{brand}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              className="aspect-square relative group overflow-hidden rounded-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="text-sm font-medium">{post.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="gap-2 glass-button hover:scale-105 transition-transform duration-300"
            onClick={() => window.open("https://www.instagram.com/dianaluvanda", "_blank")}
          >
            <Instagram className="h-5 w-5" />
            200K+ on Instagram
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 glass-button hover:scale-105 transition-transform duration-300"
            onClick={() => window.open("https://www.tiktok.com/@dianaluvanda", "_blank")}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
            437K+ on TikTok
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

