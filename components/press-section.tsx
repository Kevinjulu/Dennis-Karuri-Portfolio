"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import Link from "next/link"

export function PressSection() {
  const pressItems = [
    {
      title: "Africa Women Awards",
      publication: "Award Nomination",
      date: "2023",
      quote: "Nominated for 'Breakout Actress of the Year' for her outstanding performances.",
      link: "https://news.switchtv.ke",
    },
    {
      title: "Rising Star in Kenyan Entertainment",
      publication: "Entertainment Weekly",
      date: "2023",
      quote: "Diana Luvanda is making waves in both traditional and digital media with her versatile talent.",
    },
    {
      title: "From Kaimosi to Netflix",
      publication: "Success Stories",
      date: "2022",
      quote: "Her journey from humble beginnings to international streaming platforms inspires many young Kenyans.",
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

