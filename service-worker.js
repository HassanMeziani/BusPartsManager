const CACHE_NAME = 'buspartsmanager-v2';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  // Supprimer TOUS les anciens caches
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => caches.delete(key)))
    ).then(() => clients.claim())
  );
});

self.addEventListener('fetch', event => {
  // Toujours aller chercher le réseau en priorité, jamais le cache
  event.respondWith(fetch(event.request));
});
