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
    name: "Kate Actress",
    role: "Actress & Media Personality",
    company: "Kenyan Entertainment Industry",
    image: "/placeholder.svg",
    rating: 5,
    comment:
      "Dennis is a true artist with makeup brushes. His attention to detail and ability to enhance natural beauty is unmatched. He created the perfect look for my magazine cover shoot that was both elegant and striking. I wouldn't trust anyone else with my makeup for important events.",
  },
  {
    name: "Tanasha Donna",
    role: "Musician & Influencer",
    company: "Kenyan Music Industry",
    image: "/placeholder.svg",
    rating: 5,
    comment:
      "Working with Dennis on my music video was an incredible experience. He understands how to create makeup looks that translate beautifully on camera. His creativity and precision make him the best in the industry, and his positive energy on set keeps everyone in good spirits.",
  },
  {
    name: "Nana Owiti",
    role: "TV Host & Content Creator",
    company: "Switch TV Kenya",
    image: "/placeholder.svg",
    rating: 5,
    comment:
      "Dennis has been my go-to makeup artist for years. His ability to create flawless looks that last through long TV shoots is remarkable. Beyond his exceptional talent, he's professional, punctual, and always brings fresh ideas to the table. He's truly transformed how I approach beauty.",
  },
  {
    name: "Vera Sidika",
    role: "Entrepreneur & Socialite",
    company: "Beauty & Fashion Industry",
    image: "/placeholder.svg",
    rating: 5,
    comment:
      "Dennis is a makeup genius! For my product launch event, he created a look that perfectly aligned with my brand's aesthetic while making me feel confident and beautiful. His expertise in color theory and skin tones is exceptional, and he's always up-to-date with the latest trends.",
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

