const CACHE_NAME = 'buspartsmanager-v1';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
  // Laisser passer toutes les requêtes normalement (Firebase a besoin du réseau)
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
