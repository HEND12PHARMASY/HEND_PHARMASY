const CACHE = 'hend-pharmacy-v1';
const FILES = [
  '/HEND_PHARMASY/index.html',
  '/HEND_PHARMASY/admin.html'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
