"use client"

import Link from "next/link"
import { Instagram, Youtube, Twitter, Heart, ArrowUp } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: "YouTube",
      href: "https://www.youtube.com/@DianaLuvanda",
      icon: <Youtube className="h-5 w-5" />,
      hoverColor: "group-hover:text-red-500"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/dianaluvanda",
      icon: <Instagram className="h-5 w-5" />,
      hoverColor: "group-hover:text-pink-500"
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@dianaluvanda",
      icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>,
      hoverColor: "group-hover:text-black"
    },
    {
      name: "Twitter",
      href: "https://twitter.com/dianaluvanda",
      icon: <Twitter className="h-5 w-5" />,
      hoverColor: "group-hover:text-blue-400"
    }
  ];

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <footer className="relative glass-nav py-12 md:py-16 px-4 md:px-6 mt-12 md:mt-16 border-t border-white/10 backdrop-blur-sm">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-black/5 pointer-events-none"></div>
      
      {/* Scroll to top button */}
      <motion.button 
        onClick={scrollToTop}
        className="absolute -top-6 right-6 md:right-12 bg-gradient-to-r from-red-500 to-rose-400 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-white"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>

      <div className="container mx-auto">
        <div className="grid gap-10 md:gap-12 lg:grid-cols-3 items-start">
          {/* Brand and Description */}
          <motion.div 
            className="flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-3xl font-bold font-playfair relative group">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-rose-400">Diana</span>
              <span className="text-sm ml-1 opacity-70 group-hover:opacity-100 transition-opacity">Luvanda</span>
              <motion.div 
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-500 to-rose-400 w-0 group-hover:w-full transition-all duration-300"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
              ></motion.div>
            </Link>
            <p className="text-sm text-muted-foreground mt-3 max-w-xs text-center lg:text-left">
              Actress • Model • Digital Content Creator
            </p>
            <p className="text-xs text-muted-foreground mt-4 max-w-xs text-center lg:text-left">
              Creating authentic content and bringing characters to life on screen.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.nav 
            className="flex flex-col items-center justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-rose-400">
              Quick Links
            </h3>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {navLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href} 
                  className="text-sm text-muted-foreground hover:text-white relative group transition-colors"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-rose-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </motion.nav>

          {/* Social Links */}
          <motion.div 
            className="flex flex-col items-center lg:items-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-rose-400">
              Connect With Me
            </h3>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                    href={social.href}
                    className={`group flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300 shadow-sm hover:shadow-md`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <span className={`text-muted-foreground ${social.hoverColor} transition-colors duration-300`}>
                      {social.icon}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-10 pt-6 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Diana Luvanda. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-red-500 animate-pulse" /> by{" "}
              <Link
                href="https://github.com/kevinjulu"
                className="font-medium hover:text-primary transition-colors relative group"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kevin Julu (Ghost)
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-rose-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
