"use client"

import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"
import { motion } from "framer-motion"
import { OptimizedImage } from "@/components/optimized-image"
import { preloadImages } from "@/lib/utils"
import { useEffect, useState, useMemo } from "react"

export function InfluencingSection() {
  const brands = ["MAC Cosmetics", "Fenty Beauty", "Maybelline", "Local Beauty Brands"]
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  const posts = useMemo(() => [
    {
      id: 1,
      image: "/images/Other images/Karuri (30).jpg",
      alt: "Dennis showcasing makeup look",
      category: "Beauty Tutorial",
    },
    {
      id: 2,
      image: "/images/Other images/Karuri (31).jpg",
      alt: "Dennis with makeup client",
      category: "Client Transformation",
    },
    {
      id: 3,
      image: "/images/Other images/Karuri (32).jpg",
      alt: "Dennis at beauty event",
      category: "Industry Event",
    },
    {
      id: 4,
      image: "/images/Other images/Karuri (33).jpg",
      alt: "Dennis with beauty products",
      category: "Product Showcase",
    },
    {
      id: 5,
      image: "/images/Other images/Karuri (34).jpg",
      alt: "Dennis creating makeup look",
      category: "Behind the Scenes",
    },
    {
      id: 6,
      image: "/images/Other images/Karuri (35).jpg",
      alt: "Dennis at fashion show",
      category: "Fashion Week",
    },
    {
      id: 7,
      image: "/images/Other images/Karuri (36).jpg",
      alt: "Dennis with celebrity client",
      category: "Celebrity Collaboration",
    },
    {
      id: 8,
      image: "/images/Other images/Karuri (37).jpg",
      alt: "Dennis teaching makeup class",
      category: "Masterclass",
    },
  ], [])

  // Preload images after component mounts
  useEffect(() => {
    preloadImages(posts.map(post => post.image))
      .catch(err => console.error('Error preloading influencer images:', err))
    // posts is memoized with no dependencies, so it's safe to exclude from deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-playfair mb-4">Beauty Influencer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Collaborating with top beauty brands and creating engaging content for a community of beauty enthusiasts.
          </p>
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
              <OptimizedImage
                src={imageErrors[post.id] ? "/placeholder.svg" : post.image}
                alt={post.alt}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                aspectRatio="aspect-square"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                quality={75}
                onError={() => {
                  console.error(`Failed to load influencer image: ${post.image}`)
                  setImageErrors(prev => ({ ...prev, [post.id]: true }))
                }}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button className="bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white px-6 py-3 rounded-full">
            <Instagram className="mr-2 h-5 w-5" />
            Follow on Instagram
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

