const CACHE_APP = "Weather Cat Cahe";

const URLS_CACHE_APP = ["/index.html", "/garrux.svg", "/assets/*"];

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_APP).then(function (cache) {
			return cache.addAll(URLS_CACHE_APP);
		})
	);
});
