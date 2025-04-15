"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function PresenterSection() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="section-heading text-center mb-12 md:mb-16 text-3xl md:text-4xl lg:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Modeling
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            className="relative mx-auto md:mx-0 max-w-[280px] sm:max-w-[320px] md:max-w-full w-full"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-red-200 to-rose-100 rounded-2xl blur-lg opacity-30"></div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Diana Luvanda  (7).jpg"
                alt="Diana Modeling"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 450px, 500px"
                quality={85}
                loading="eager"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iNDAwIiB2ZXJzaW9uPSIxLjEiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIzMDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjZmZlNGU2Ii8+PC9zdmc+"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" data-component-name="PresenterSection"></div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-5 md:space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              As a model, I've had the privilege of working with renowned brands and photographers, bringing creative
              visions to life through commercial campaigns and fashion shoots.
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {["Commercial Ads", "Brand Campaigns", "Fashion Shoots", "Print Media"].map((item, index) => (
                <div key={index} className="glass-card p-3 md:p-4 rounded-xl">
                  <p className="font-medium text-sm md:text-base">{item}</p>
                </div>
              ))}
            </div>

            <div className="glass-card p-4 md:p-6 rounded-xl">
              <h3 className="font-bold text-lg md:text-xl mb-2">Brand Collaborations</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>Co-operative Bank</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>Naivas</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>Tusker</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
