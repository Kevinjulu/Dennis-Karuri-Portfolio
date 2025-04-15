'use client'

import { useEffect } from 'react'

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator && window.location.hostname !== 'localhost') {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope)
          })
          .catch(error => {
            console.log('ServiceWorker registration failed: ', error)
          })
      })
    }
  }, [])

  return null
}
