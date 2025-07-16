"use client"

import { motion } from "framer-motion"
import { Camera, Film, Mic, Users, Monitor, Award, CheckCircle } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookingForm } from "@/components/booking-form"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function ServicesClient() {
  const services = [
    {
      icon: <Film className="h-10 w-10" />,
      title: "Makeup Artistry",
      description: "Professional makeup services for weddings, events, photoshoots, and special occasions.",
      features: ["Bridal Makeup", "Event Makeup", "Editorial Makeup", "Photoshoot Styling"],
      color: "from-red-500 to-rose-400",
      image: "/images/Karuri (1).jpg",
    },
    {
      icon: <Camera className="h-10 w-10" />,
      title: "Beauty Consulting",
      description: "Expert beauty advice and personalized consultations for individuals and brands.",
      features: ["Skincare Recommendations", "Product Recommendations", "Color Matching", "Beauty Routines"],
      color: "from-orange-500 to-amber-400",
      image: "/images/Karuri (3).jpg",
    },
    {
      icon: <Mic className="h-10 w-10" />,
      title: "Content Creation",
      description: "Engaging beauty content creation for social media and digital platforms.",
      features: ["Makeup Tutorials", "Product Reviews", "Beauty Tips", "Trend Analysis"],
      color: "from-blue-500 to-cyan-400",
      image: "/images/Karuri (10).jpg",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Workshops & Training",
      description: "Educational workshops and training sessions for aspiring makeup artists and beauty enthusiasts.",
      features: ["Makeup Masterclasses", "One-on-One Training", "Group Workshops", "Online Courses"],
      color: "from-purple-500 to-violet-400",
      image: "/images/Karuri (20).jpg",
    },
    {
      icon: <Monitor className="h-10 w-10" />,
      title: "Brand Collaborations",
      description: "Strategic partnerships and collaborations with beauty and lifestyle brands.",
      features: ["Product Development", "Brand Ambassador", "Social Media Campaigns", "Event Appearances"],
      color: "from-pink-500 to-rose-400",
      image: "/images/Karuri (1).jpg",
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: "Celebrity Styling",
      description: "Exclusive makeup and styling services for celebrities and public figures.",
      features: ["Red Carpet Events", "TV Appearances", "Photoshoots", "Music Videos"],
      color: "from-green-500 to-emerald-400",
      image: "/images/Karuri (3).jpg",
    },
  ]

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="px-4 md:px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">My Services</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional makeup artistry and beauty services tailored to your unique needs
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="glass-card rounded-xl overflow-hidden h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20`}></div>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${service.color} text-white mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Booking Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold font-playfair mb-4">Book My Services</h2>
              <p className="text-muted-foreground mb-6">
                Interested in working together? Fill out the form to request a quote for your project or event. I'll get back to you within 24-48 hours to discuss your needs in detail.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-red-500 to-rose-400 p-2 rounded-full text-white mt-1">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Personalized Consultation</h4>
                    <p className="text-sm text-muted-foreground">Every service begins with a detailed consultation to understand your vision.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-red-500 to-rose-400 p-2 rounded-full text-white mt-1">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Premium Products</h4>
                    <p className="text-sm text-muted-foreground">I use only high-quality, professional-grade makeup products for all services.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-red-500 to-rose-400 p-2 rounded-full text-white mt-1">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Flexible Scheduling</h4>
                    <p className="text-sm text-muted-foreground">Accommodating your timeline with options for early morning or evening appointments.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-red-500 to-rose-400 hover:from-red-600 hover:to-rose-500 text-white border-none">
                    Contact Me Directly
                  </Button>
                </Link>
              </div>
            </motion.div>
            <BookingForm />
          </div>

          {/* Testimonials */}
          <TestimonialsSection />
        </div>
      </section>
    </main>
  )
}
