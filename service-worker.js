// Service worker minimal : permet l'installation de l'appli.
// Ne met rien en cache pour garantir que les points affichés
// sont toujours à jour (nécessite une connexion internet).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
