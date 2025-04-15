"use client"

import type React from "react"

import { Instagram, Youtube } from "lucide-react"
import { motion } from "framer-motion"

interface StatProps {
  icon: React.ReactNode
  count: string
  label: string
  delay: number
}

function Stat({ icon, count, label, delay }: StatProps) {
  return (
    <motion.div
      className="flex items-center gap-3 glass-card p-4 rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="text-red-500 bg-red-50 p-3 rounded-full">{icon}</div>
      <div>
        <div className="font-bold text-xl">{count}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    </motion.div>
  )
}

export function SocialStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto mt-16">
      <Stat icon={<Instagram className="h-6 w-6" />} count="200K+" label="Instagram" delay={0.1} />
      <Stat
        icon={
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
          </svg>
        }
        count="437K+"
        label="TikTok"
        delay={0.2}
      />
      <Stat icon={<Youtube className="h-6 w-6" />} count="10.7K+" label="YouTube" delay={0.3} />
    </div>
  )
}

