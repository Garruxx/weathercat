import { run } from "./components";
import "./sass/index.sass";
run();

if ("serviceWorker" in navigator) {
	navigator.serviceWorker
		.register("/service-worker.js")
		.then(() => {
			console.log("Service worker registred");
		})
		.catch(console.log);
}
