"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook } from "lucide-react"

export function SocialOverlay() {
  return (
    <>
      {/* TikTok Overlay */}
      <motion.a
        href="https://www.tiktok.com/@denniskaruri"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute -right-2 sm:-right-6 md:right-2 top-4 glass-card p-3 sm:p-4 rounded-xl shadow-xl z-20 backdrop-blur-sm bg-white/60 border border-white/30 cursor-pointer hover:bg-white/80 transition-colors"
        initial={{ opacity: 0, x: 50 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -10, 0],
        }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          y: {
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
        style={{ maxWidth: "130px", minWidth: "120px" }}
        whileHover={{ scale: 1.05, y: -5 }}
      >
        <div className="flex items-center gap-2">
          <div className="bg-black rounded-full p-1.5">
            <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-sm sm:text-lg">231.5K+</p>
            <p className="text-[10px] sm:text-xs text-black/70">TikTok Followers</p>
          </div>
        </div>
      </motion.a>

      {/* Instagram Overlay */}
      <motion.a
        href="https://www.instagram.com/_denniskaruri"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute -left-2 sm:-left-6 md:left-2 top-1/2 -translate-y-1/2 glass-card p-3 sm:p-4 rounded-xl shadow-xl z-20 backdrop-blur-sm bg-white/60 border border-white/30 cursor-pointer hover:bg-white/80 transition-colors"
        initial={{ opacity: 0, x: -50 }}
        animate={{
          opacity: 1,
          x: 0,
          y: ['-50%', '-45%', '-50%'],
        }}
        transition={{
          duration: 0.5,
          delay: 0.4,
          y: {
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
        style={{ maxWidth: "130px", minWidth: "120px" }}
        whileHover={{ scale: 1.05, x: 5 }}
      >
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-tr from-purple-600 to-pink-500 rounded-full p-1.5">
            <Instagram className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="font-bold text-sm sm:text-lg">238K+</p>
            <p className="text-[10px] sm:text-xs text-black/70">Instagram Followers</p>
          </div>
        </div>
      </motion.a>

      {/* Facebook Overlay */}
      <motion.a
        href="https://www.facebook.com/denniskaruri"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute -right-2 sm:-right-6 md:right-2 bottom-1/4 glass-card p-3 sm:p-4 rounded-xl shadow-xl z-20 backdrop-blur-sm bg-white/60 border border-white/30 cursor-pointer hover:bg-white/80 transition-colors"
        initial={{ opacity: 0, x: 50 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, 10, 0],
        }}
        transition={{
          duration: 0.5,
          delay: 0.6,
          y: {
            duration: 4.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
        style={{ maxWidth: "130px", minWidth: "120px" }}
        whileHover={{ scale: 1.05, y: 5 }}
      >
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 rounded-full p-1.5">
            <Facebook className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="font-bold text-sm sm:text-lg">13K+</p>
            <p className="text-[10px] sm:text-xs text-black/70">Facebook Followers</p>
          </div>
        </div>
      </motion.a>
    </>
  )
}
