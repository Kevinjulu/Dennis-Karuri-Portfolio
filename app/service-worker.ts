/**
 * Service Worker for Dennis Karuri Portfolio
 * Provides offline support and faster page loads through caching
 */

const CACHE_VERSION = 'v1';
const CACHE_NAMES = {
  static: `dennis-karuri-static-${CACHE_VERSION}`,
  images: `dennis-karuri-images-${CACHE_VERSION}`,
  pages: `dennis-karuri-pages-${CACHE_VERSION}`,
  api: `dennis-karuri-api-${CACHE_VERSION}`
};

// Resources to cache immediately on install
const STATIC_ASSETS = [
  '/',
  '/about',
  '/portfolio',
  '/contact',
  '/services',
  '/manifest.json',
  '/favicon.ico',
  '/robots.txt',
  '/site.webmanifest',
  '/apple-touch-icon.png',
  '/favicon-32x32.png',
  '/favicon-16x16.png',
  // Add critical CSS and JS files
  '/_next/static/css/app.css',
  '/_next/static/js/main.js'
];

// Maximum age for cached resources
const MAX_AGE = {
  images: 30 * 24 * 60 * 60, // 30 days
  static: 7 * 24 * 60 * 60,  // 7 days
  api: 60 * 60               // 1 hour
};

// Install event - cache core assets
self.addEventListener('install', (event: any) => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAMES.static)
        .then(cache => {
          console.log('Caching static assets');
          return cache.addAll(STATIC_ASSETS);
        }),
      caches.open(CACHE_NAMES.images)
        .then(cache => {
          console.log('Preparing image cache');
          return cache;
        })
    ])
  );
  // Activate immediately
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event: any) => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => {
            const isOldCache = Object.values(CACHE_NAMES).every(name => key !== name);
            const isOurCache = key.startsWith('dennis-karuri-');
            return isOurCache && isOldCache;
          })
          .map(key => {
            console.log('Deleting old cache:', key);
            return caches.delete(key);
          })
      );
    })
    .then(() => {
      console.log('Service Worker activated');
      // Take control immediately
      self.clients.claim();
    })
  );
});

// Helper function to determine if a request should be cached
function shouldCache(request: Request): boolean {
  const url = new URL(request.url);
  
  // Don't cache admin routes
  if (url.pathname.startsWith('/admin')) {
    return false;
  }
  
  // Don't cache query params except for essential ones
  if (url.search && !url.search.match(/^\?(v|version|id)=/)) {
    return false;
  }
  
  return true;
}

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event: any) => {
  const request = event.request;
  const url = new URL(request.url);
  
  // Skip non-GET requests and browser extensions
  if (request.method !== 'GET' || url.origin !== self.location.origin) {
    return;
  }
  
  // Handle API requests
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      caches.open(CACHE_NAMES.api)
        .then(cache => {
          return fetch(request)
            .then(response => {
              // Cache the response if it's valid
              if (response.ok && shouldCache(request)) {
                cache.put(request, response.clone());
              }
              return response;
            })
            .catch(() => cache.match(request));
        })
    );
    return;
  }
  
  // Handle page navigations
  if (request.mode === 'navigate') {
    event.respondWith(
      caches.open(CACHE_NAMES.pages)
        .then(cache => {
          return fetch(request)
            .then(response => {
              if (response.ok && shouldCache(request)) {
                cache.put(request, response.clone());
              }
              return response;
            })
            .catch(() => {
              return cache.match(request)
                .then(response => response || caches.match('/offline.html'));
            });
        })
    );
    return;
  }
  
  // Handle image requests
  if (request.destination === 'image') {
    event.respondWith(
      caches.open(CACHE_NAMES.images)
        .then(cache => {
          return cache.match(request)
            .then(response => {
              if (response) {
                // Return cached image
                return response;
              }
              
              // Fetch and cache new image
              return fetch(request)
                .then(networkResponse => {
                  if (networkResponse.ok && shouldCache(request)) {
                    cache.put(request, networkResponse.clone());
                  }
                  return networkResponse;
                })
                .catch(() => {
                  // Return placeholder image if available
                  return cache.match('/images/placeholder.jpg');
                });
            });
        })
    );
    return;
  }
  
  // Handle all other requests
  event.respondWith(
    caches.match(request)
      .then(response => {
        if (response) {
          return response;
        }
        
        return fetch(request)
          .then(networkResponse => {
            if (networkResponse.ok && shouldCache(request)) {
              const cache = caches.open(CACHE_NAMES.static)
                .then(cache => cache.put(request, networkResponse.clone()));
            }
            return networkResponse;
          });
      })
  );
});
