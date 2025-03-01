self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('pdf-cache').then((cache) => {
            return cache.addAll([
                'index.html',
                'https://1drv.ms/b/s!Ahuxp9lCtzsbhA9WDjuiFtgGE9hB?embed=1&em=2'
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


