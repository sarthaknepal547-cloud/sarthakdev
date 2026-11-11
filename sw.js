/* Service worker: app-shell cache so the site opens offline. */
var CACHE = "sdn-v2";
var SHELL = ["/", "/index.html", "/manifest.json", "/icon.svg", "/content.json"];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE)
      .then(function (c) { return c.addAll(SHELL); })
      .then(function () { return self.skipWaiting(); })
      .catch(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.filter(function (k) { return k !== CACHE; })
          .map(function (k) { return caches.delete(k); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  /* the editor must never be served from cache, or updates go missing */
  if (/admin\.html$|admin\.webmanifest$/.test(url.pathname)) {
    e.respondWith(fetch(req, { cache: "no-store" }));
    return;
  }

  var isContent = url.pathname === "/" || /index\.html$|content\.json$/.test(url.pathname);

  if (isContent) {
    /* network first, fall back to cache when offline.
       Pages adds ?v= cache-busting stamps, so store under the bare path. */
    var key = url.origin + url.pathname;
    e.respondWith(
      fetch(req, { cache: "no-store" }).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(key, copy); });
        return res;
      }).catch(function () { return caches.match(key).then(function (hit) { return hit || caches.match(req); }); })
    );
  } else {
    e.respondWith(
      caches.match(req).then(function (hit) {
        return hit || fetch(req).then(function (res) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
          return res;
        });
      })
    );
  }
});
