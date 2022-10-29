import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
export default defineConfig({
	plugins: [
		VitePWA({
			registerType: "autoUpdate",
			manifest: {
				name: "Weather cat (Garrux)",
				short_name: "Weather cat",
				description: "Weather graphic information",
				theme_color: "#202130",
                background_color: "#202130",
                lang: "es",
				icons: [
					{
						src: "/garrux.svg",
						type: "image/svg+xml",
						sizes: "512x512",
					},
					{
						src: "/garrux.svg",
						type: "image/svg+xml",
						sizes: "192x192",
					},
					{
						src: "/garrux.svg",
						type: "image/svg+xml",
						sizes: "512x512",
					},
				],
			},
		}),
	],
});
