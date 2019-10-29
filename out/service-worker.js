self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/7.be190a60758caacb7462.js",
    "revision": "5811c8b5bcde7b7d605e"
  },
  {
    "url": "/_next/static/chunks/commons.4cc03389900ed1ea7348.js",
    "revision": "af2e3950ccd17dc0c6e6"
  },
  {
    "url": "/_next/static/runtime/main-7e2725e9d5601537b873.js",
    "revision": "9974fa7a89de3bb46480"
  },
  {
    "url": "/_next/static/runtime/webpack-e59df30bf077110a53b2.js",
    "revision": "8e06be2c20444b1e9f53"
  },
  {
    "url": "/_next/static\\v4NKgidsTXi0oxloywjFJ\\pages\\_app.js",
    "revision": "5f1bfc44df5334574fc2"
  },
  {
    "url": "/_next/static\\v4NKgidsTXi0oxloywjFJ\\pages\\_error.js",
    "revision": "23a12410ce3312918932"
  },
  {
    "url": "/_next/static\\v4NKgidsTXi0oxloywjFJ\\pages\\index.js",
    "revision": "908fa311709527edad42"
  },
  {
    "url": "/_next/static\\v4NKgidsTXi0oxloywjFJ\\pages\\qrScanner.js",
    "revision": "493556fd0c3682d2f80b"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "static/icons/icon-192x192.png",
    "revision": "2f75a9e1dd4c232d18da1cea4de1c50b"
  },
  {
    "url": "static/icons/icon-512x512.png",
    "revision": "6f3bc2828a74454adc968560958132ce"
  },
  {
    "url": "static/manifest.json",
    "revision": "5b1a4a7f844f329015fa615ee096cfba"
  },
  {
    "url": "static/pamperslogo.png",
    "revision": "a27334cc1d1006a80cb56b2e942b4c64"
  },
  {
    "url": "static/pamperslogo1.png",
    "revision": "c8324a53d791fd603c23b9007c85b6ad"
  },
  {
    "url": "static/scan.png",
    "revision": "223ed8d37ce1a9d67c69dc3f6e22078b"
  },
  {
    "url": "static/scanner.jpg",
    "revision": "f1eef2b43c9130b044ceae34627f4b11"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
