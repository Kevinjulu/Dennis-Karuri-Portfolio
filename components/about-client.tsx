"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Award, Calendar, MapPin, Heart, Star } from "lucide-react"

interface MilestoneType {
  year: string
  title: string
  description: string
}

interface ValueType {
  icon: React.ReactNode
  title: string
  description: string
  color: string
  delay: number
}

export default function AboutClient({
  milestones,
  values
}: {
  milestones: MilestoneType[]
  values: ValueType[]
}) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 0.5 }}
          className="px-4 lg:px-0"
        >
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
              <span className="text-red-500 font-medium">Born and raised in Kenya</span>, I've grown into a passionate makeup artist and
              beauty influencer with a love for creative expression and connecting with audiences through the art of makeup.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative backdrop-blur-sm glass-card p-6 rounded-xl border border-white/10 shadow-lg"
            >
              My journey in the beauty industry began after pivoting from agribusiness studies, and quickly
              evolved as I discovered my <span className="text-red-500 font-medium">passion for makeup artistry and creative expression</span>. Today, I'm proud to have
              built a reputation as one of Kenya's leading makeup artists and beauty influencers.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative backdrop-blur-sm glass-card p-6 rounded-xl border border-white/10 shadow-lg"
            >
              I'm known for my <span className="text-red-500 font-medium">bold, gender-defying style</span> and confidence, which has allowed me to break barriers
              in the beauty industry and inspire others to embrace their authentic selves.
            </motion.p>
          </div>
          
          <div className="mt-10">
            <Link href="/contact">
              <Button className="group bg-gradient-to-r from-red-500 to-rose-400 hover:from-red-600 hover:to-rose-500 text-white px-6 py-3 rounded-full">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative px-4 lg:px-0"
        >
          <div className="absolute -z-10 inset-0 bg-gradient-to-br from-red-200 to-rose-100 rounded-3xl blur-3xl opacity-20 transform -rotate-6"></div>
          <div className="relative z-10 rounded-3xl overflow-hidden border-8 border-white/10 shadow-2xl">
            <Image
              src="/images/Other images/Karuri (1).jpg"
              alt="Dennis Karuri"
              width={600}
              height={800}
              className="w-full h-auto object-cover"
            />
            <motion.div 
              className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md p-4 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <p className="text-xl font-bold text-white">Dennis Karuri</p>
              <p className="text-sm text-white/80">Makeup Artist & Beauty Influencer</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        className="mt-24 glass-card p-4 md:p-8 lg:p-10 rounded-xl backdrop-blur-sm border border-white/20 shadow-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-rose-400">Career Milestones</h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 to-rose-400 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-8 md:space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <motion.div 
                  className="absolute left-1/2 w-5 h-5 bg-gradient-to-br from-red-500 to-rose-400 rounded-full transform -translate-x-1/2 z-10 hidden md:block"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.3 + (0.1 * index),
                    type: "spring",
                  }}
                ></motion.div>
                
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} px-4`}>
                  <motion.div
                    className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg"
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + (0.1 * index) }}
                  >
                    <div className={`flex items-center mb-2 gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                      <Calendar className="h-5 w-5 text-red-500" />
                      <span className="text-lg font-semibold text-red-500">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </motion.div>
                </div>
                
                <div className="w-0 md:w-2/12"></div>
                
                <div className="w-0 md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      
      <motion.div
        className="mt-24 px-4 lg:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-rose-400">My Values</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 rounded-xl backdrop-blur-sm border border-white/10 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: value.delay }}
            >
              <div className={`p-4 rounded-full bg-gradient-to-br ${value.color} bg-opacity-10 inline-block mb-4`}>
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  )
}
