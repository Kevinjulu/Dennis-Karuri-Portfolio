"use client"

import React, { useState, useEffect } from 'react'
import Image, { ImageProps } from 'next/image'
import { cn } from '@/lib/utils'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoadingComplete'> {
  fallbackSrc?: string
  lowQualitySrc?: string
  aspectRatio?: string
  containerClassName?: string
  preload?: boolean
}

/**
 * OptimizedImage component with advanced loading strategies for better performance
 * - Progressive loading with low-quality placeholder
 * - Lazy loading with proper priority handling
 * - Automatic blur effect while loading
 * - Fallback image support
 * - Preloading support for critical images
 * - Automatic WebP/AVIF format selection
 */
export function OptimizedImage({
  src,
  alt,
  className,
  fallbackSrc = '/placeholder.svg',
  lowQualitySrc,
  aspectRatio = 'aspect-square',
  containerClassName,
  priority = false,
  preload = false,
  ...props
}: OptimizedImageProps) {
  const [loading, setLoading] = useState(!priority)
  const [error, setError] = useState(false)
  const [imageSrc, setImageSrc] = useState(src)

  // Reset states when src changes
  useEffect(() => {
    setLoading(!priority)
    setError(false)
    setImageSrc(src)
  }, [src, priority])

  // Preload image if specified
  useEffect(() => {
    if (preload && typeof window !== 'undefined' && typeof src === 'string') {
      const img = new window.Image()
      img.src = src
    }
  }, [preload, src])

  // Generate blur data URL for placeholder
  const blurDataURL = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2ZXJzaW9uPSIxLjEiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjZmZlNGU2Ii8+PC9zdmc+"

  return (
    <div className={cn('relative overflow-hidden', aspectRatio, containerClassName)}>
      {/* Show low quality image while loading */}
      {loading && lowQualitySrc && (
        <Image
          src={lowQualitySrc}
          alt={alt}
          className={cn('object-cover transition-opacity duration-300', className)}
          fill
          sizes={props.sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
          quality={10}
          loading="eager"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      )}
      
      <Image
        src={error ? fallbackSrc : imageSrc}
        alt={alt}
        className={cn(
          'object-cover transition-all duration-500',
          loading ? 'opacity-0 scale-105' : 'opacity-100 scale-100',
          className
        )}
        fill
        sizes={props.sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        quality={props.quality || 80}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        placeholder="blur"
        blurDataURL={blurDataURL}
        onLoad={() => setLoading(false)}
        onError={() => {
          console.error(`Failed to load image: ${src}`)
          setError(true)
          setLoading(false)
        }}
        {...props}
      />
      
      {/* Loading blur overlay */}
      {loading && (
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm animate-pulse" />
      )}
    </div>
  )
}
