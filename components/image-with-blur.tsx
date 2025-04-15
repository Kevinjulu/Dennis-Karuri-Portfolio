"use client"

import Image from "next/image"
import { useState } from "react"

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
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={`${className} ${fill ? "relative" : ""}`}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        className={`
          duration-700 ease-in-out
          ${isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"}
          ${className}
        `}
        onLoadingComplete={() => setIsLoading(false)}
        priority={priority}
        quality={quality}
      />
    </div>
  )
}

