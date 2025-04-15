"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutSection() {
  const achievements = [
    "Actress in Netflix & Showmax Productions",
    "437K+ TikTok Followers",
    "Award-Nominated Performer",
    "Digital Content Creator",
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent dark:from-gray-950" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about storytelling through acting and digital content creation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative grid grid-cols-6 grid-rows-5 gap-4 h-[600px]"
          >
            <div className="col-span-4 row-span-3 relative rounded-2xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562512871.jpg-q9lkUNUDP7EpnTom59EzNu67VE7Y3r.jpeg"
                alt="Diana Luvanda Portrait"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                loading="eager"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiB2ZXJzaW9uPSIxLjEiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjZmZlNGU2Ii8+PC9zdmc+"
              />
            </div>
            <div className="col-span-2 row-span-2 col-start-5 row-start-1 relative rounded-2xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562381812.jpg-kovQtoD52PNqpBpkjIQlzk332wBrgF.jpeg"
                alt="Diana Elegant Shot"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
                quality={80}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiB2ZXJzaW9uPSIxLjEiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZmZlNGU2Ii8+PC9zdmc+"
              />
            </div>
            <div className="col-span-2 row-span-2 col-start-5 row-start-3 relative rounded-2xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562334188.jpg-7WU1GwavMtQpUZmKAsWKMKIIGWhSlW.jpeg"
                alt="Diana Casual Shot"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
                quality={80}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiB2ZXJzaW9uPSIxLjEiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZmZlNGU2Ii8+PC9zdmc+"
              />
            </div>
            <div className="col-span-3 row-span-2 col-start-1 row-start-4 relative rounded-2xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562570375.jpg-GVGUtD7qIWaP2am7EqhgRvlwKlH3zd.jpeg"
                alt="Diana Brand Shot"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={80}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2ZXJzaW9uPSIxLjEiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZmZlNGU2Ii8+PC9zdmc+"
              />
            </div>
            <div className="col-span-3 row-span-2 col-start-4 row-start-4 relative rounded-2xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562985388.jpg-hd09rpWGlyY61KGhsWBy5qBH10EvtM.jpeg"
                alt="Diana Fashion Shot"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={80}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2ZXJzaW9uPSIxLjEiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZmZlNGU2Ii8+PC9zdmc+"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-8 lg:pt-12"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-lg leading-relaxed">
                Born in Kaimosi, Vihiga County, Kenya, I've grown into a passionate actress and digital content creator.
                My journey in the entertainment industry has been filled with exciting opportunities and meaningful
                connections.
              </p>
              <p className="text-lg leading-relaxed">
                I value authenticity in everything I do, whether I'm in front of the camera or creating content for my
                social media platforms. Through my work in film, television, and digital media, I aim to inspire others
                and share stories that resonate with audiences across Africa and beyond.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 p-4 rounded-xl flex items-start gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <CheckCircle2 className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                  <span className="font-medium">{achievement}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-6">
              <Link href="/portfolio">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-red-500 to-rose-400 hover:from-red-600 hover:to-rose-500 text-white border-none"
                >
                  View My Portfolio
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
