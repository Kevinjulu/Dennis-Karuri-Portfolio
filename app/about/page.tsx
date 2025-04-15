"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SEO } from "@/components/seo"
import Link from "next/link"
import { ArrowRight, Award, Calendar, MapPin, Heart, Star } from "lucide-react"

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const milestones = [
    {
      year: "2018",
      title: "Started Acting Career",
      description: "Began acting in local productions and commercials",
    },
    {
      year: "2020",
      title: "First Major Role",
      description: "Landed first significant role in a Kenyan television series",
    },
    {
      year: "2021",
      title: "Netflix Debut",
      description: "First appearance in a Netflix production",
    },
    {
      year: "2022",
      title: "Social Media Growth",
      description: "Reached 100K followers on Instagram and 200K on TikTok",
    },
    {
      year: "2023",
      title: "Award Nomination",
      description: "Nominated for 'Breakout Actress of the Year' at Africa Women Awards",
    },
  ]

  return (
    <main className="min-h-screen pt-24 pb-16">
      <SEO
        title="About Me | Diana Luvanda"
        description="Learn about Diana Luvanda's journey as an actress, model, and content creator from Kenya. Discover her background, values, and career milestones."
        canonicalUrl="/about"
      />

      <section className="px-4 md:px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-rose-400 relative inline-block">
                About Me
                <motion.div 
                  className="absolute -z-10 -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-rose-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                ></motion.div>
              </h1>
              
              <div className="space-y-6 text-lg relative">
                <motion.div 
                  className="absolute -z-10 -left-6 top-0 w-40 h-40 bg-gradient-to-br from-red-200 to-rose-100 rounded-full blur-3xl opacity-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  transition={{ duration: 1.5 }}
                ></motion.div>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative backdrop-blur-sm glass-card p-6 rounded-xl border border-white/10 shadow-lg"
                >
                  <span className="text-red-500 font-medium">Born in Kaimosi, Vihiga County, Kenya</span> on July 14, 2000, I've grown into a passionate actress and
                  digital content creator with a love for storytelling and connecting with audiences.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative backdrop-blur-sm glass-card p-6 rounded-xl border border-white/10 shadow-lg"
                >
                  My journey in the entertainment industry began with small roles in local productions, but quickly
                  evolved as I discovered my <span className="text-red-500 font-medium">passion for bringing characters to life</span> on screen. Today, I'm proud to have
                  worked on projects for major platforms like <span className="font-semibold">Netflix</span> and <span className="font-semibold">Showmax</span>.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="relative backdrop-blur-sm glass-card p-6 rounded-xl border border-white/10 shadow-lg"
                >
                  Beyond acting, I've built a <span className="text-red-500 font-medium">strong presence in the digital space</span>, creating content that resonates with
                  hundreds of thousands of followers across platforms. I believe in authenticity and using my platform
                  to inspire others.
                </motion.p>

                <motion.div 
                  className="flex flex-wrap gap-4 mt-8 justify-center sm:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <motion.div 
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/10 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="bg-gradient-to-r from-red-500 to-rose-400 p-2 rounded-full">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium">Born July 14, 2000</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/10 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="bg-gradient-to-r from-red-500 to-rose-400 p-2 rounded-full">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium">Kaimosi, Vihiga County, Kenya</span>
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="pt-8 flex justify-center sm:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <Link href="/portfolio">
                    <Button className="bg-gradient-to-r from-red-500 to-rose-400 hover:from-red-600 hover:to-rose-500 text-white border-none group px-6 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                      <span className="mr-2">View My Work</span>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-red-200 to-rose-100 rounded-2xl blur-lg opacity-30"></div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/Diana Luvanda  (3).jpg"
                  alt="Diana Luvanda Portrait"
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" data-component-name="AboutPage"></div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-rose-400">My Journey</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-300 via-rose-300 to-red-300 rounded-full"></div>

              <div className="space-y-16">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                    initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.7, 
                      delay: 0.15 * index,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    <motion.div
                      className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-rose-400 z-10 flex items-center justify-center shadow-lg`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.3 + (0.15 * index),
                        type: "spring",
                        bounce: 0.5
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <div className="w-4 h-4 rounded-full bg-white"></div>
                    </motion.div>

                    <motion.div
                      className={`glass-card p-6 rounded-xl max-w-md ${
                        index % 2 === 0 ? "mr-auto pr-12" : "ml-auto pl-12"
                      } w-full md:w-5/12 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300`}
                      whileHover={{ 
                        y: -5,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                      }}
                    >
                      <motion.div 
                        className="bg-gradient-to-r from-red-500 to-rose-400 text-white px-4 py-1.5 rounded-full text-sm inline-block mb-3 font-medium shadow-md"
                        initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 + (0.15 * index) }}
                      >
                        {milestone.year}
                      </motion.div>
                      <motion.h3 
                        className="text-xl font-bold mb-2"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 + (0.15 * index) }}
                      >
                        {milestone.title}
                      </motion.h3>
                      <motion.p 
                        className="text-muted-foreground"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 + (0.15 * index) }}
                      >
                        {milestone.description}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-24 glass-card p-8 md:p-10 rounded-xl backdrop-blur-sm border border-white/20 shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-rose-400">What I Value</h2>
            <div className="grid md:grid-cols-3 gap-8 md:gap-10">
              {[
                {
                  icon: <Star className="h-10 w-10 text-yellow-500" />,
                  title: "Authenticity",
                  description: "Being true to myself and my audience in everything I create and share.",
                  color: "from-yellow-400 to-amber-300",
                  delay: 0.1
                },
                {
                  icon: <Heart className="h-10 w-10 text-red-500" />,
                  title: "Connection",
                  description: "Building meaningful relationships with audiences, collaborators, and brands.",
                  color: "from-red-500 to-rose-400",
                  delay: 0.2
                },
                {
                  icon: <Award className="h-10 w-10 text-purple-500" />,
                  title: "Excellence",
                  description: "Striving for the highest quality in every project and performance.",
                  color: "from-purple-500 to-violet-400",
                  delay: 0.3
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center glass-card p-6 rounded-xl relative overflow-hidden group hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.7, 
                    delay: value.delay,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                >
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-red-200 to-rose-100 rounded-full blur-3xl opacity-20"
                    style={{
                      background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                      '--tw-gradient-from': value.color.split(' ')[0].replace('from-', ''),
                      '--tw-gradient-to': value.color.split(' ')[1].replace('to-', '')
                    }}
                  ></div>
                  
                  <motion.div 
                    className={`mx-auto bg-gradient-to-br ${value.color} p-5 rounded-full w-20 h-20 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: value.delay + 0.3,
                      type: "spring",
                      bounce: 0.5
                    }}
                  >
                    {value.icon}
                  </motion.div>
                  
                  <motion.h3 
                    className="text-2xl font-bold mb-3"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: value.delay + 0.4 }}
                  >
                    {value.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-muted-foreground"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: value.delay + 0.5 }}
                  >
                    {value.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
