"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import Link from "next/link"

export function PressSection() {
  const pressItems = [
    {
      title: "Kenya's Top Beauty Influencer",
      publication: "Fashion & Beauty Magazine",
      date: "2023",
      quote: "Dennis Karuri has revolutionized the beauty industry in Kenya with his bold approach and exceptional talent.",
      link: "https://fashionandbeauty.co.ke",
    },
    {
      title: "Breaking Gender Norms in Beauty",
      publication: "Lifestyle Africa",
      date: "2023",
      quote: "Dennis Karuri is challenging stereotypes and redefining beauty standards with his gender-defying style and confidence.",
    },
    {
      title: "From Agribusiness to Beauty Icon",
      publication: "Success Stories",
      date: "2022",
      quote: "His journey from studying agribusiness to becoming one of Kenya's most sought-after makeup artists inspires many young creatives.",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          className="section-heading text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Press & Recognition
        </motion.h2>

        <div className="space-y-8">
          {pressItems.map((item, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 rounded-xl relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-red-100" />
              <h3 className="font-bold text-xl">{item.title}</h3>
              <p className="text-primary font-medium">
                {item.publication} • {item.date}
                {item.link && (
                  <Link href={item.link} className="ml-2 text-sm underline" target="_blank" rel="noopener noreferrer">
                    View Source
                  </Link>
                )}
              </p>
              <p className="mt-4 italic text-lg">&ldquo;{item.quote}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

