"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, Phone, MapPin, Instagram, Youtube } from "lucide-react"
import Link from "next/link"
import { SEO } from "@/components/seo"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    // Show success message
    alert("Thank you for your message! I'll get back to you soon.")
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <SEO
        title="Contact Me | Dennis Karuri"
        description="Get in touch with Dennis Karuri for makeup services, beauty consultations, or collaborations. Reach out for makeup artistry, beauty influencing, or content creation partnerships."
        canonicalUrl="/contact"
      />

      <section className="px-4 md:px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">Get in Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="glass-card p-8 rounded-xl h-full bg-white/5 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Send Me a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Your Name</label>
                      <Input
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-white/10 border-white/20 text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Your Email</label>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-white/10 border-white/20 text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Subject</label>
                    <Input
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="bg-white/10 border-white/20 text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea
                      placeholder="Your message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-white/10 border-white/20 text-foreground placeholder:text-muted-foreground resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-500 to-rose-400 hover:from-red-600 hover:to-rose-500 text-white border-none font-medium"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col"
            >
              <div className="glass-card p-8 rounded-xl mb-8 bg-white/5 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-50 p-3 rounded-full text-red-500">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">contact@denniskaruri.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-red-50 p-3 rounded-full text-red-500">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">+254 700 000 000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-red-50 p-3 rounded-full text-red-500">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-muted-foreground">Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-xl flex-1">
                <h2 className="text-2xl font-bold mb-6">Follow Me</h2>
                <div className="space-y-6">
                  <Link
                    href="https://www.instagram.com/_denniskaruri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <Instagram className="h-6 w-6 text-red-500" />
                    <div>
                      <h3 className="font-medium">Instagram</h3>
                      <p className="text-muted-foreground">@_denniskaruri</p>
                    </div>
                  </Link>
                  <Link
                    href="https://www.youtube.com/@DennisKaruri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <Youtube className="h-6 w-6 text-red-500" />
                    <div>
                      <h3 className="font-medium">YouTube</h3>
                      <p className="text-muted-foreground">@DennisKaruri</p>
                    </div>
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@denniskaruri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <svg className="h-6 w-6 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                    <div>
                      <h3 className="font-medium">TikTok</h3>
                      <p className="text-muted-foreground">@denniskaruri</p>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

