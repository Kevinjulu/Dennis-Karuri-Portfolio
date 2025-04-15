"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

interface Testimonial {
  name: string
  role: string
  company: string
  image: string
  rating: number
  comment: string
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Film Director",
    company: "Showmax Productions",
    image: "/placeholder.svg",
    rating: 5,
    comment:
      "Diana brings incredible energy and professionalism to every project. Her versatility as an actress and natural screen presence make her a joy to work with. She takes direction well and always delivers beyond expectations.",
  },
  {
    name: "Michael Omondi",
    role: "Brand Manager",
    company: "Molped Kenya",
    image: "/placeholder.svg",
    rating: 5,
    comment:
      "Working with Diana on our campaign was fantastic. She connects authentically with audiences and delivers exceptional results. Her professionalism and dedication to the brand's vision were outstanding.",
  },
  {
    name: "Priscilla Wanjiru",
    role: "Creative Director",
    company: "Digital Arts Studio",
    image: "/placeholder.svg",
    rating: 5,
    comment:
      "Diana's versatility and commitment to her craft sets her apart. She's become our go-to talent for various productions. Her ability to understand and execute creative direction is remarkable.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Client Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it - here's what industry professionals have to say about working with me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="glass-card rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-red-200 rotate-180" />
                  <p className="relative z-10 italic text-muted-foreground">"{testimonial.comment}"</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-muted-foreground">
            Average rating: <span className="font-bold text-primary">5.0</span> out of 5
          </p>
        </motion.div>
      </div>
    </section>
  )
}

