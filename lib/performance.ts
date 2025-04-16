/**
 * Performance utilities for optimizing website speed and loading times
 */

/**
 * Debounce function to limit how often a function can be called
 * Useful for scroll events and resize handlers
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return function(...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function to limit the rate at which a function can be called
 * Useful for scroll events and animations
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  
  return function(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Check if an element is in the viewport
 * Useful for lazy loading images and animations
 */
export function isInViewport(element: HTMLElement, offset = 0): boolean {
  if (typeof window === 'undefined') return false;
  
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight + offset) &&
    rect.bottom >= -offset &&
    rect.left <= (window.innerWidth + offset) &&
    rect.right >= -offset
  );
}

/**
 * Preload an image to improve perceived performance
 */
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Preload multiple images in parallel
 */
export function preloadImages(srcs: string[]): Promise<void[]> {
  return Promise.all(srcs.map(preloadImage));
}

/**
 * Prefetch a page to improve navigation performance
 */
export function prefetchPage(href: string): void {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
}

/**
 * Get browser connection type for adaptive loading
 */
export function getConnectionType(): string {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) {
    return 'unknown';
  }
  
  // @ts-expect-error - Navigator connection API
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  return connection?.effectiveType || 'unknown';
}

/**
 * Check if the user is on a slow connection
 */
export function isSlowConnection(): boolean {
  const connectionType = getConnectionType();
  return connectionType === '2g' || connectionType === 'slow-2g';
}

/**
 * Detect if the device is a mobile device
 */
export function isMobileDevice(): boolean {
  if (typeof navigator === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Calculate the current FPS (frames per second)
 * Useful for monitoring animation performance
 */
export function calculateFPS(): () => number {
  let lastTime = performance.now();
  let frames = 0;
  let fps = 0;
  
  return function() {
    const now = performance.now();
    frames++;
    
    if (now - lastTime > 1000) {
      fps = Math.round((frames * 1000) / (now - lastTime));
      frames = 0;
      lastTime = now;
    }
    
    return fps;
  };
}
