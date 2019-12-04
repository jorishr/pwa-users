importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

//customizations, see workbox docs

//cache the fetched data
workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com/users'),
    workbox.strategies.cacheFirst()
);

//cache google font
workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    workbox.strategies.cacheFirst({
      cacheName: 'google-fonts',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 30,
        }),
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200]
        }),
      ],
    }),
  );


workbox.precaching.precacheAndRoute([
  {
    "url": "css/main.css",
    "revision": "4fe7975b95b4ea2cabed958d5ce19ba1"
  },
  {
    "url": "index.html",
    "revision": "8835583e11ebc4fc15d160f9a3b00c5a"
  },
  {
    "url": "js/app.js",
    "revision": "0341ec5400c0fd976209dff409813fa7"
  }
]);