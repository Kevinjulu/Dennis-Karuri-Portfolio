'use client'

import { useEffect } from 'react'
import { toast } from '@/components/ui/use-toast'

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      window.location.hostname !== 'localhost'
    ) {
      // Wait for the page to load
      window.addEventListener('load', async () => {
        try {
          // Register the service worker
          const registration = await navigator.serviceWorker.register('/sw.js')
          console.log('ServiceWorker registration successful with scope: ', registration.scope)

          // Handle updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available, show update toast
                  toast({
                    title: "Update Available",
                    description: "New content is available. Refresh to update.",
                    action: (
                      <button
                        onClick={() => window.location.reload()}
                        className="bg-primary text-white px-4 py-2 rounded"
                      >
                        Refresh
                      </button>
                    ),
                  })
                }
              })
            }
          })

          // Check for updates every hour
          setInterval(() => {
            registration.update()
          }, 60 * 60 * 1000)

        } catch (error) {
          console.error('ServiceWorker registration failed: ', error)
          // Only show error toast in production
          if (process.env.NODE_ENV === 'production') {
            toast({
              title: "Offline Mode Unavailable",
              description: "Could not enable offline functionality. Please check your connection.",
              variant: "destructive",
            })
          }
        }
      })

      // Handle offline/online status
      window.addEventListener('online', () => {
        toast({
          title: "Back Online",
          description: "Your connection has been restored.",
          variant: "default",
        })
      })

      window.addEventListener('offline', () => {
        toast({
          title: "You're Offline",
          description: "Don't worry, you can still browse previously visited pages.",
          variant: "default",
        })
      })
    }
  }, [])

  return null
}
