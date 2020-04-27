'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "9b8ff5f1a34146a1530ada2a21fba603",
"/": "9b8ff5f1a34146a1530ada2a21fba603",
"main.dart.js": "f7c3c35d92602e804c27e12240ca8f78",
"c-c-1.mp3": "4b027868d0652aa597bd7462e70aeefc",
"assets/LICENSE": "d36b9e32e2e245f0a278263266998f11",
"assets/AssetManifest.json": "482935e634af5e4e463d9366ed440225",
"assets/sounds/dices.m4a": "1f3f38c91b4d12b923d5e7fa2197a269",
"assets/sounds/van-sliding-door-daniel_simon.wav": "0a5f8e468c60014d7d776de0ce1cc69c",
"assets/sounds/do-you-like-it.wav": "48ebe7e117a89596fe0f278cd1c7ca43",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
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
