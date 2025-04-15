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
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20(5)-5a64sXWcM02Kgh3nfyuvrgLnun9AVs.jpeg"
          alt="Diana Luvanda Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/90 backdrop-blur-sm" />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="glass-card p-8 rounded-xl border border-white/10 shadow-2xl">
          <h2 className="text-4xl font-playfair text-center mb-2 gradient-text">Get in Touch</h2>
          <p className="text-center text-muted-foreground mb-8">Let's create something amazing together</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Name</label>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-white/10 border-white/20 text-foreground placeholder:text-muted-foreground/70"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email</label>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-white/10 border-white/20 text-foreground placeholder:text-muted-foreground/70"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Message</label>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-white/10 border-white/20 text-foreground placeholder:text-muted-foreground/70"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-rose-400 hover:from-red-600 hover:to-rose-500 text-white border-none"
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

