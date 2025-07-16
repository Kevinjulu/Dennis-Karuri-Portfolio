"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface RotatingImageProps {
  images: string[]
  alt: string
  interval?: number
  className?: string
}

export function RotatingImage({ images, alt, interval = 3000, className = "" }: RotatingImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  // Only start rotation after component is mounted on client
  useEffect(() => {
    setIsMounted(true)
    
    if (images.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images, interval])

  if (!images || images.length === 0) {
    return null
  }

  // Show only the first image during server rendering
  if (!isMounted) {
    return (
      <div className={`relative h-full w-full overflow-hidden ${className}`}>
        <div className="absolute inset-0">
          <Image
            src={images[0]}
            alt={`${alt} 1`}
            fill
            className="object-cover"
            priority
            quality={80}
          />
        </div>
      </div>
    )
  }

  // Client-side rotating images
  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`${alt} ${index + 1}`}
            fill
            className="object-cover"
            loading={index === 0 ? "eager" : "lazy"}
            quality={80}
          />
        </div>
      ))}
    </div>
  )
}
