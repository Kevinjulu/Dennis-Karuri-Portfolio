"use client"

import React from "react"
import dynamic from "next/dynamic"
import { motion, useReducedMotion } from "framer-motion"
import {
  Camera,
  Film,
  Mic,
  Users,
  Monitor,
  Award,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Import the components with named imports
import { BookingForm } from "@/components/booking-form"
import { TestimonialsSection } from "@/components/testimonials-section"

// Define a Service type for better DX
interface Service {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  color: string
  image: string
  video?: string
}

const services: Service[] = [
  {
    icon: <Film className="h-10 w-10" />,
    title: "Acting",
    description:
      "Professional acting services for film, television, commercials, and digital content.",
    features: [
      "Film & TV Productions",
      "Commercial Ads",
      "Digital Content",
      "Music Videos",
    ],
    color: "from-red-500 to-rose-400",
    image: "/images/Karuri (34).jpg",
    video: "/videos/1744962386093.mp4"
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Modeling",
    description:
      "Professional modeling services for fashion, editorial, and commercial projects.",
    features: [
      "Fashion Shows",
      "Photo Shoots",
      "Brand Campaigns",
      "Portfolio Development",
    ],
    color: "from-purple-500 to-pink-500",
    image: "/images/Karuri (14).jpg",
  },
  {
    icon: <Camera className="h-10 w-10" />,
    title: "Content Creation",
    description:
      "Creative content production for digital platforms and social media.",
    features: [
      "Social Media Content",
      "Brand Storytelling",
      "Video Production",
      "Photography",
    ],
    color: "from-amber-500 to-orange-500",
    image: "/images/Karuri (52).jpg",
    video: "/videos/1744962900131.mp4"
  }
]

/**
 * A single card for a service.
 */
const ServiceCard: React.FC<{
  service: Service
  delay?: number
}> = ({ service, delay = 0 }) => {
  const reduce = useReducedMotion()

  return (
    <motion.article
      className="glass-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
      initial={reduce ? {} : { opacity: 0, y: 20 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      aria-labelledby={`${service.title}-title`}
    >
      <div className="relative h-48 overflow-hidden">
        {service.video ? (
          <video
            src={service.video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        ) : (
          <Image
            src={service.image}
            alt={`${service.title} service`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 hover:scale-110"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div
          className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-40`}
        />
      </div>

      <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
        <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
          {service.icon}
        </div>
        <h3
          id={`${service.title}-title`}
          className="text-2xl font-bold mb-2"
        >
          {service.title}
        </h3>
        <p className="text-white/90">{service.description}</p>
      </div>

      <div className="p-6">
        <h4 className="font-medium mb-3">What's included:</h4>
        <ul className="space-y-2">
          {service.features.map((feat) => (
            <li
              key={feat}
              className="flex items-center gap-2"
              role="listitem"
            >
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

const ServicesPage: React.FC = () => {
  return (
    <main
      id="main-content"
      className="min-h-screen pt-24 pb-16"
    >
      <section
        aria-labelledby="services-overview"
        className="px-4 md:px-6 py-12"
      >
        <div className="max-w-7xl mx-auto">
          <motion.header
            id="services-overview"
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
              My Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional services tailored to bring your creative vision to
              life.
            </p>
          </motion.header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => (
              <ServiceCard key={svc.title} service={svc} delay={idx * 0.1} />
            ))}
          </div>

          {/* Booking form and testimonials sections */}
          <div className="mt-20">
            <BookingForm />
          </div>

          <div className="mt-20">
            <TestimonialsSection />
          </div>

          <motion.section
            className="mt-20 glass-card p-8 rounded-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
              <Image
                src="/images/Karuri (20).jpg"
                alt="Background texture"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl font-bold mb-4">
                Let's Work Together
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Looking for professional acting, modeling, or content creation
                services? I'm available for collaborations, projects, and brand
                partnerships.
              </p>
              <Link href="/contact">
                <Button
                  className="bg-gradient-to-r from-red-500 to-rose-400 hover:from-red-600 hover:to-rose-500 text-white border-none"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.section>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage
