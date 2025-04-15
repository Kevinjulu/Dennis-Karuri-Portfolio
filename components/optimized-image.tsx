"use client"

import React, { useState, useEffect } from 'react'
import Image, { ImageProps } from 'next/image'
import { cn } from '@/lib/utils'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoadingComplete'> {
  fallbackSrc?: string
  lowQualitySrc?: string
  aspectRatio?: string
  containerClassName?: string
}

/**
 * OptimizedImage component with advanced loading strategies for better performance
 * - Progressive loading with low-quality placeholder
 * - Lazy loading with proper priority handling
 * - Automatic blur effect while loading
 * - Fallback image support
 */
export function OptimizedImage({
  src,
  alt,
  className,
  fallbackSrc = '/images/placeholder.jpg',
  lowQualitySrc,
  aspectRatio = 'aspect-square',
  containerClassName,
  priority = false,
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

  return (
    <div className={cn('relative overflow-hidden', aspectRatio, containerClassName)}>
      {/* Show low quality image while loading */}
      {loading && lowQualitySrc && (
        <Image
          src={lowQualitySrc}
          alt={alt}
          className={cn('object-cover transition-opacity duration-300', className)}
          fill
          sizes={props.sizes || '(max-width: 768px) 100vw, 50vw'}
          quality={10}
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
        sizes={props.sizes || '(max-width: 768px) 100vw, 50vw'}
        quality={props.quality || 85}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        onLoad={() => setLoading(false)}
        onError={() => {
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

/**
 * Creates a low quality placeholder URL for progressive image loading
 */
export function createBlurDataURL(width = 100, height = 100, quality = 30): string {
  return `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' x='0' y='0' fill='%23f8f8f8' filter='url(%23b)'/%3E%3C/svg%3E`
}
