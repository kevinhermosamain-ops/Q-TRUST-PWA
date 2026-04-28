const CACHE_NAME = 'qtrust-v1';
const ASSETS = [
  './index.html',
  './citizen_dashboard.html',
  './engine_room.html.html',
  './ui_layer2_governance_portal_fixed.html',
  './manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});