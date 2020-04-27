'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "9572557cd8883fe1c8a3e7ec22bb0b77",
"/": "9572557cd8883fe1c8a3e7ec22bb0b77",
"main.dart.js": "153c4aa390d55ff6a5a7a736bcebb46b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bdced5666247243fe5a358f2abfe3546",
"assets/LICENSE": "d36b9e32e2e245f0a278263266998f11",
"assets/AssetManifest.json": "6a0a6979070393a7fa46f171f1a1bf2a",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/sounds/sound_bell_boxing_1.wav": "0faec93f7212dafc7a5afe33aeb78965",
"assets/assets/sounds/sound_bell_boxing_3.wav": "2efae6d85a3bb90a6437ab1cb0f3b94f",
"assets/assets/sounds/sound_click.wav": "94f0f74edc3195ab742018bc5928c5db",
"assets/assets/sounds/sound_whistle_01.wav": "fec36d1963c9bf3043086861e3699bdf"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
