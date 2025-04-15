"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { X } from "lucide-react"

export function NavMenu() {
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()
  const sheetTriggerRef = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ]

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setOpen(false)
  }

  // Close menu when route changes
  React.useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-nav py-2" : "py-3 md:py-4"
        }`}
      >
        <div className="container px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="text-xl md:text-2xl font-bold font-playfair">
            <span className="gradient-text">Diana</span>
            <span className="text-xs md:text-sm ml-1">Luvanda</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-sm font-medium relative group ${pathname === item.path ? "text-primary" : ""}`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-red-500 to-rose-400 hover:from-red-600 hover:to-rose-500 text-white border-none">
                Get in Touch
              </Button>
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                ref={sheetTriggerRef}
                variant="ghost"
                size="icon"
                className="md:hidden relative z-50"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
              >
                <div className="w-6 flex flex-col gap-1.5 items-center">
                  <span
                    className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
                      open ? "rotate-45 translate-y-2" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-full bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`}
                  />
                  <span
                    className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
                      open ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  />
                </div>
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md p-0">
              <div className="flex justify-end p-4">
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col gap-6 sm:gap-8 p-6 h-full bg-white">
                <div className="flex flex-col gap-6 sm:gap-8 mt-4 sm:mt-8">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <SheetClose asChild>
                        <Link
                          href={item.path}
                          className={`text-3xl sm:text-4xl font-bold transition-colors ${
                            pathname === item.path ? "text-primary" : "hover:text-primary"
                          }`}
                          onClick={handleLinkClick}
                        >
                          {item.name}
                        </Link>
                      </SheetClose>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-auto mb-8">
                  <SheetClose asChild>
                    <Link href="/contact" onClick={handleLinkClick}>
                      <Button className="w-full bg-gradient-to-r from-red-500 to-rose-400 hover:from-red-600 hover:to-rose-500 text-white border-none">
                        Get in Touch
                      </Button>
                    </Link>
                  </SheetClose>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <div className="h-14 md:h-16" />
    </>
  )
}
