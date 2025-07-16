"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import Image from "next/image"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0">
        <Image
          src="/images/Other images/Karuri (60).jpg"
          alt="Dennis Karuri Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black/95 backdrop-blur-sm" />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="glass-card p-8 rounded-xl border border-white/20 shadow-2xl backdrop-blur-md bg-black/60">
          <h2 className="text-4xl font-playfair text-center mb-2 text-white">Get in Touch</h2>
          <p className="text-center text-white text-lg font-medium mb-8">For makeup services, collaborations, or masterclasses</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Name</label>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-white/50 focus:ring-white/30"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Email</label>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-white/50 focus:ring-white/30"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Message</label>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-white/50 focus:ring-white/30 resize-none"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-rose-400 hover:from-red-600 hover:to-rose-500 text-white border-none font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </div>
      </motion.div>
    </section>
  )
}

