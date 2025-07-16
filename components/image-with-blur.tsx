"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

interface ImageWithBlurProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
}

export function ImageWithBlur({
  src,
  alt,
  fill,
  width,
  height,
  className = "",
  priority = false,
  quality = 75,
}: ImageWithBlurProps) {
  // Start with false for server rendering to avoid hydration mismatch
  const [isLoading, setIsLoading] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  
  // Set initial loading state after component mounts to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true)
    setIsLoading(true)
  }, [])
  
  // Only apply blur effect after component is mounted on client
  const imageClass = isMounted
    ? `duration-700 ease-in-out ${isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"} ${className}`
    : className

  return (
    <div className={`${className} ${fill ? "relative" : ""}`}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        className={imageClass}
        onLoadingComplete={() => setIsLoading(false)}
        priority={priority}
        quality={quality}
      />
    </div>
  )
}

