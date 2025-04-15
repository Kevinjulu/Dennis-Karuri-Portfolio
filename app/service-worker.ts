/**
 * Service Worker for Diana Luvanda Portfolio
 * Provides offline support and faster page loads through caching
 */

// Cache names
const STATIC_CACHE = 'diana-luvanda-static-v1';
const IMAGES_CACHE = 'diana-luvanda-images-v1';
const PAGES_CACHE = 'diana-luvanda-pages-v1';

// Resources to cache immediately on install
const STATIC_ASSETS = [
  '/',
  '/about',
  '/portfolio',
  '/contact',
  '/favicon.ico',
  '/site.webmanifest',
  '/apple-touch-icon.png',
  '/favicon-32x32.png',
  '/favicon-16x16.png',
];

// Install event - cache core assets
self.addEventListener('install', (event: any) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event: any) => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => key.startsWith('diana-luvanda-') && 
                         ![STATIC_CACHE, IMAGES_CACHE, PAGES_CACHE].includes(key))
          .map(key => caches.delete(key))
      );
    })
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event: any) => {
  const request = event.request;
  const url = new URL(request.url);
  
  // Skip non-GET requests and browser extensions
  if (request.method !== 'GET' || url.origin !== self.location.origin) {
    return;
  }
  
  // For page navigations, try the network first, then fall back to cache
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          // Cache a copy of the response
          const copy = response.clone();
          caches.open(PAGES_CACHE)
            .then(cache => cache.put(request, copy));
          return response;
        })
        .catch(() => {
          return caches.match(request)
            .then(response => response || caches.match('/'))
        })
    );
    return;
  }
  
  // For images, try the cache first, then network
  if (request.destination === 'image') {
    event.respondWith(
      caches.match(request)
        .then(response => {
          return response || fetch(request)
            .then(networkResponse => {
              const copy = networkResponse.clone();
              caches.open(IMAGES_CACHE)
                .then(cache => cache.put(request, copy));
              return networkResponse;
            });
        })
    );
    return;
  }
  
  // For everything else, try cache first, then network
  event.respondWith(
    caches.match(request)
      .then(response => {
        return response || fetch(request)
          .then(networkResponse => {
            // Don't cache API responses or large files
            if (url.pathname.startsWith('/api/') || 
                networkResponse.headers.get('content-length') > 1024 * 1024) {
              return networkResponse;
            }
            
            const copy = networkResponse.clone();
            caches.open(STATIC_CACHE)
              .then(cache => cache.put(request, copy));
            return networkResponse;
          });
      })
  );
});
