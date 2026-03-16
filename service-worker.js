// 1. Cambiamos el nombre para forzar la actualización de archivos .webp
const CACHE_NAME = "mayorista-cache-v2"; 

const urlsToCache = [
  "/",
  "/index.html",
  "/Logo.webp" // Asegúrate de que el archivo físico se llame así ahora
];

// INSTALACIÓN: Guarda los archivos básicos
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Cache abierta y archivos básicos guardados");
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting(); 
});

// ACTIVACIÓN: Limpia las cachés viejas (borra los .png que quedaron guardados)
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log("Borrando caché antigua:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim(); // Toma el control de la página inmediatamente
});

// FETCH: Estrategia Network First (Primero Internet, si falla usa Caché)
self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Si la respuesta es válida, guardamos una copia actualizada en la caché
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // Si no hay internet, buscamos en la caché lo que tengamos guardado
        return caches.match(event.request);
      })
  );
});