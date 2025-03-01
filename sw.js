self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('pdf-cache').then((cache) => {
            return cache.addAll([
                'index.html',
                'https://github.com/user-attachments/files/19037754/Ramadan_Dua_Guide_KA.pdf'
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


