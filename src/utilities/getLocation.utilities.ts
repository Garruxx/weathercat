import { alerts } from "../components";


const options: PositionOptions = {
	timeout: 1000 * 5,
	enableHighAccuracy: true,
};
export const getLocation = () => {
	if (!("geolocation" in navigator)) {
		alerts({
			message: "Tu navegador no es compatible con la geolocalización",
		});
		throw new Error("incompatibility");
	}

	return new Promise<GeolocationCoordinates>((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			({ coords }) => {
				resolve(coords);
			},
			reject,
			options
		);
	});
};
