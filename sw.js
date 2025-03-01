self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('pdf-cache').then((cache) => {
            return cache.addAll([
                'index.html',
                'https://github.com/Kkq96/Ramadan-Dua-Guide/blob/main/Ramadan_Dua_Guide_KAA.pdf'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
}
