self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('pdf-cache').then((cache) => {
            return cache.addAll([
                'index.html',
                'https://doc-10-5k-prod-00-apps-viewer.googleusercontent.com/viewer2/prod-00/pdf/r77ksaq1ij6ov32ms7om6un1oa1e9lmd/te78jjfuc7sbv90kjf1bqsl71fpmd4d4/1740823800000/3/110057407542585795246/APznzaZuiAH8UjO4JvEOT30cfy83qSVzGXjL9OG_upvt1ZW4sc-XfVH7Iw961T91VYq0Be_u0pxR5Unlg1vjGnyliVv4CgRn1dySCVM3JgRkw1u2gOoYPrQPZS4B4lc4k0AIenHKSVlsCadwc-bMJRS-Gz8PpfSI1Fefz48E-Tb7JIe_uR4qkTtL8xKtHaKd7TXBRHhmkkCxKJ6S_u1w83hPUL2wMp2PhdglnjWA4U0-jr4ocRja08zPLO06Z1S5Xaxh6_IjUM6qzwZyZirtCVxDsnD_ptgbNxmgFrzUbdp2UhOCPQhD5ld6U3B-NI-SOFIk6x9VK0N8Oy8DptHrGIrDkzbvExQ1bNKvPYenexE4FHLCfHOymTCAGoCfwqUeeRjAOOCTGLA_USBIht4RYKuvXB9C-UGRmZU2QftWeMPg0KBSRqQix0bvTS3OlDQRqxjVptrKRhKn39fGdZoYFkr-eY2K0CU3bVnrdIV7kkxKUBflmr4olniE5C5ahQ2_52dJjAaLfhWzKlADsIYfgnuRtGHlNj-YYPe5hWkAliiCkvN3OLIs3VQtM-n7XbqY03uLCwXuhu5ww-Ql56WsoISO1NCa-sv1NWJ3gvhJrtkJAaB-I_C7OgcxbFxjTeOiOn6qZJ9leE5cpr-MpKfHFlSpaPRdiH1IzFr89onW78MljdpZfjNuLU1n0FpA8Qq1kfJon-8A97b8Hq2F231oZxFspdKkrL0QVU6F8C-xuevnaBHkHVDqIKfUJ8TpRxVqcrgoem9c-XxpG3bHBPqY9abSCv4kwXsjapc1f7KMEd80wZ7w5AV7DK7A1oVEGyhkiec1fTPCjdcSZpmx3K1qkuaVarJEdl8m7-C7W5E47A4GP-HzK6OpPtUEKtAZXEyhUSRuejceszVvYT-S3QFy3t51c3gMP7LsEMCkg7ySn08Py67nBoWgz8mgKwGucP0PCWt-E2YuvRxrokoyEZ6onOliPOYRRl62-Qkv4gsTXBC_Cr7Bl2wQy9KmeMsiQjYtX3nTc4oSBwLZs5NfkQ_ntZTx1_FRCoeE-QmlsCCmG_Q1k1aVSS0eraIqvNnQ_75iRO0Gb7WkQLubdCfq5umHVLIz_zPSULpwevNRPqIK6efgMVYPgDlbDepBfg65yRe4tlqhF2jyfpY-Os8pD1b83mwkUzEqSHiGaEsW0rSOqgnr5IKzpRLBD4mol4y3nOOol8k3_IPVO-xzQT4FIWciVpEDgZKyfxY0qBKSvcn8QTMYnSY6m3Ai2deR2Jy6HqfhcfczDVY1fzJGM56Z2jUDvczDmMsFRORL-Mw_Yi4mr0ho1u-S3RGL7osJrDwIE-IZrQldtEReBM-42f-v29r9J6KX5p9JJqQjeLs65TJKRWDncs1aB0nmL73_TRzTEgRyw6vTvEX2enmFiDE8hEjqMGGx9Z9hfI1VR0Qh8v3oWw4FZlxFfz3ZbsMWxq3ZqLu5ZzzGIhC-aOiqvEUm43K8PCX4Km4GC4TEZ11JS_BKwkyAV2M5IKemj9_8ivCW9dBik_yixT8zQM9vUSoNdr6FozPNO1QtG5pvbhTpCw_FoMH2x-aXfUXomj17f8Ok3RzSSBYl8hmKZWG2FvtqkMjPhp73Do2xh5GvBOXGMwJCrnJVkAYOXOsMBvM4EjQ7sik_iQ-buIiZKcYcKyG-r6M2_3TVIV8LUHUKWJjyGmcOIJRQ3ixPNpA8v4LhGzC5HSDbZu-P2Ufzrg3rid0ts9pMwQ2EcSwmrmfKup6d_FOSaLlr9Bp1DX5QBwPaEUK9aRfWGz_75KkBUi-xOe2_AjQ_rzQgdqXVbVdK_TOehdmTcA0HaGuwXHQE8PG0al8z62MRMaCrTxsoiEXGgMRc7uIuyBZsFSm_psZ7ZbQulnpevi14hDddrgkZv9H8E_S4HvqqydZVt4AvPKOTFOR8TkVwUNNi0SV-I8kzuz-tDKrT3679Xr8iTPaBZ9yzkeyEbDx-zrxYR0C3YQDJT9NR875EPinR9EUI_ZFuWAMEM2bplJPl_C5dHYgiWGu-edtfGgvh7oFm1HVRkeLm?authuser=0&nonce=8qlgoijros2s4&user=110057407542585795246&hash=vpandqvp7d9n7i9cufhb7hk1bvmp9skv'
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


