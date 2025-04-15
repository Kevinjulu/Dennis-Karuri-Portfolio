"use client"

import { motion } from "framer-motion"
import { Camera, Film, Mic, Users, Monitor, Award, CheckCircle } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookingForm } from "@/components/booking-form"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function ServicesPage() {
  const services = [
    {
      icon: <Film className="h-10 w-10" />,
      title: "Acting",
      description: "Professional acting services for film, television, commercials, and digital content.",
      features: ["Film & TV Productions", "Commercial Ads", "Digital Content", "Music Videos"],
      color: "from-red-500 to-rose-400",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562595365.jpg-i5hFfoSILVYzJcvykuEVUukufxsIwX.jpeg",
    },
    {
      icon: <Camera className="h-10 w-10" />,
      title: "Modeling",
      description: "Professional modeling for fashion, commercial, and promotional campaigns.",
      features: ["Fashion Shoots", "Commercial Campaigns", "Brand Endorsements", "Print Media"],
      color: "from-orange-500 to-amber-400",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562281742.jpg-7vv4C03Cy9ULE7pCj7QLebsGInjnSb.jpeg",
    },
    {
      icon: <Mic className="h-10 w-10" />,
      title: "Content Creation",
      description: "Engaging digital content creation for brands and personal platforms.",
      features: ["Social Media Content", "Brand Collaborations", "Lifestyle Content", "Storytelling"],
      color: "from-pink-500 to-purple-400",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562356338.jpg-5B4q6t14LsK7ycG2mz9U4xdYHamgKV.jpeg",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Brand Ambassador",
      description: "Representing brands and products as an official ambassador.",
      features: ["Brand Representation", "Product Promotion", "Event Appearances", "Campaign Participation"],
      color: "from-blue-500 to-indigo-400",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562358123.jpg-GZt0AdH7klZ3PxyymKjzeLlJ2s3IBB.jpeg",
    },
    {
      icon: <Monitor className="h-10 w-10" />,
      title: "Hosting",
      description: "Professional hosting for events, shows, and digital content.",
      features: ["Event MC", "Show Host", "Digital Content Host", "Red Carpet Interviews"],
      color: "from-green-500 to-emerald-400",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562334188.jpg-XV7q8b4Uo10q5oHilsQvL1PJvL4VpO.jpeg",
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: "Workshops",
      description: "Acting and content creation workshops for aspiring talents.",
      features: ["Acting Techniques", "Content Creation Strategies", "Personal Branding", "Industry Insights"],
      color: "from-violet-500 to-purple-400",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562964522.jpg-Age34auhHl7T7CMd2JiZPOAiB4VwMQ.jpeg",
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
              Professional services tailored to bring your creative vision to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="glass-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-40`} />
                </div>

                <div className={`bg-gradient-to-r ${service.color} p-6 text-white relative z-10`}>
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90">{service.description}</p>
                </div>

                <div className="p-6">
                  <h4 className="font-medium mb-3">What's included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20">
            <BookingForm />
          </div>

          <TestimonialsSection />

          <motion.div
            className="mt-20 glass-card p-8 rounded-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740562570375.jpg-0hp6yEmId0xHGMKWu9kkaPARRGNxdG.jpeg"
                alt="Diana Luvanda"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Looking for professional acting, modeling, or content creation services? I'm available for
                collaborations, projects, and brand partnerships.
              </p>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-red-500 to-rose-400 hover:from-red-600 hover:to-rose-500 text-white border-none">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

