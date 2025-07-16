import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Preloads an array of images in the background
 * @param images Array of image URLs to preload
 * @returns Promise that resolves when all images are loaded
 */
export function preloadImages(images: string[]): Promise<void[]> {
  if (typeof window === 'undefined') return Promise.resolve([])
  
  const loadImage = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new window.Image()
      img.onload = () => resolve()
      img.onerror = () => {
        console.error(`Failed to preload image: ${src}`)
        resolve() // Resolve anyway to not block other images
      }
      img.src = src
    })
  }

  return Promise.all(images.map(loadImage))
}

/**
 * Generates a low quality blur data URL for progressive image loading
 */
export function generateBlurDataURL(width = 400, height = 400, color = '#ffe4e6'): string {
  return `data:image/svg+xml;base64,${Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" version="1.1"><rect x="0" y="0" width="${width}" height="${height}" fill="${color}"/></svg>`
  ).toString('base64')}`
}

/**
 * Calculates responsive image sizes based on breakpoints
 */
export function getResponsiveSizes(options: {
  mobile?: number
  tablet?: number
  desktop?: number
  default?: number
} = {}): string {
  const {
    mobile = 100,
    tablet = 50,
    desktop = 33,
    default: defaultSize = 100
  } = options

  return `(max-width: 768px) ${mobile}vw, (max-width: 1200px) ${tablet}vw, ${desktop}vw, ${defaultSize}vw`
}

