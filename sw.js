self.addEventListener('install', (event) => \{\
    event.waitUntil(\
        caches.open('pdf-cache').then((cache) => \{\
            return cache.addAll([\
                'index.html',\
                '{\field{\*\fldinst{HYPERLINK "https://objects.githubusercontent.com/github-production-repository-file-5c1aeb/940978747/19037754?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250301%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250301T073934Z&X-Amz-Expires=300&X-Amz-Signature=b77fc9f4f9a1d2850e06e1c7902e5e6d071a76d0fe873afd685532ec29d4abec&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3Bfilename%3DRamadan_Dua_Guide_KA.pdf&response-content-type=application%2Fpdf"}}{\fldrslt https://objects.githubusercontent.com/github-production-repository-file-5c1aeb/940978747/19037754?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250301%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250301T073934Z&X-Amz-Expires=300&X-Amz-Signature=b77fc9f4f9a1d2850e06e1c7902e5e6d071a76d0fe873afd685532ec29d4abec&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3Bfilename%3DRamadan_Dua_Guide_KA.pdf&response-content-type=application%2Fpdf}}'\
            ]);\
        \})\
    );\
\});\
\
self.addEventListener('fetch', (event) => \{\
    event.respondWith(\
        caches.match(event.request).then((response) => \{\
            return response || fetch(event.request);\
        \})\
    );\
\});\
}
