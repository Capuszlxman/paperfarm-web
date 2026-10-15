// 字里有田 service worker: offline app shell. It never sees diary data (that lives in IndexedDB),
// and it never sends anything anywhere — it only caches the app's own static files.
const VERSION = "pf-pages-v1";
const SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(VERSION)
      .then((c) => c.addAll(SHELL))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k.startsWith("pf-pages-") && k !== VERSION).map((k) => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin)
    return;
  // navigations: network first (fresh deploys), fall back to the cached shell when offline
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then((r) => {
          const copy = r.clone();
          caches.open(VERSION).then((c) => c.put("./index.html", copy));
          return r;
        })
        .catch(() => caches.match("./index.html")),
    );
    return;
  }
  // hashed build assets, fonts, art, audio: cache first, then network (and remember it)
  e.respondWith(
    caches.match(req).then(
      (hit) =>
        hit ||
        fetch(req).then((r) => {
          if (r.ok && (r.type === "basic" || r.type === "default")) {
            const copy = r.clone();
            caches.open(VERSION).then((c) => c.put(req, copy));
          }
          return r;
        }),
    ),
  );
});
