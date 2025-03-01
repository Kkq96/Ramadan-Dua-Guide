self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('pdf-cache').then((cache) => {
            return cache.addAll([
                'index.html',
                'https://raw.githubusercontent.com/kkq96/RAMADAN-DUA-GUIDE/main/Ramadan_Dua_Guide_KA.pdf'
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


