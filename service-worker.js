const CACHE_NAME = "mayorista-cache-auto"; // Nombre fijo para la base

const urlsToCache = [
  "/",
  "/index.html",
  "/Logo.png"
  // Sacamos productos.js de la lista fija para manejarlo dinámicamente
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting(); // Obliga al SW nuevo a activarse rápido
});

self.addEventListener("fetch", event => {
  // Estrategia: Intentar primero Internet, si falla (offline), usar la caché
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Si la respuesta es buena, guardamos una copia en la caché
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
      .catch(() => {
        // Si no hay internet, buscamos en la caché
        return caches.match(event.request);
      })
  );
});