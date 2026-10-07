const CACHE_NAME = "campuscompass-gecp-v4";
const CORE_ASSETS = [
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png",
  "/favicon.ico"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

function isStaticAsset(url) {
  return /\.(?:js|css|png|ico|webp|jpg|jpeg|svg|woff2?)$/i.test(url.pathname);
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (url.pathname.startsWith("/api/")) {
    event.respondWith(fetch(request).catch(() => new Response(
      JSON.stringify({error:"Offline", offline:true}),
      {status:503, headers:{"Content-Type":"application/json"}}
    )));
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(fetch(request).then(response => {
      const copy=response.clone();
      caches.open(CACHE_NAME).then(c=>c.put("/index.html",copy));
      return response;
    }).catch(()=>caches.match("/index.html")));
    return;
  }

  if (isStaticAsset(url)) {
    event.respondWith(caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        if (response.ok) {
          const copy=response.clone();
          caches.open(CACHE_NAME).then(c=>c.put(request,copy));
        }
        return response;
      });
    }));
  }
});
