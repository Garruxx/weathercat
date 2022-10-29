const CACHE_APP = "Weather Cat Cahe";
const PATH = "/weathercat/";
const URLS_CACHE_APP = [PATH, PATH+"/index.html", PATH+"/garrux.svg", PATH+"/assets/*"];

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_APP).then(function (cache) {
			return cache.addAll(URLS_CACHE_APP);
		})
	);
});
