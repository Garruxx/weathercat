import { Weather } from "../models";
import { getWeather, ipfind } from "../services";
import { getLocation } from "../utilities";
import { alerts } from "./";

export const getDataTime = async (callback: (dataTIme: Weather) => void) => {
	const storage = localStorage;
	if (!storage.getItem("location")) {
		const { latitude, longitude } = await ipfind();
		const dataTIme = await getWeather(latitude, longitude);
		callback(dataTIme);

		alerts({
			message: `
                Esto es en base a una ubicación aproximada, para obtener 
                información del clima más exacta, por favor permita los 
                sercivios de ubicación
            `,
			label: "¿Permitir ubicación?",
			callback: (response) => {
				if (response) {
					localStorage.setItem("location", "true");
					getDataTime(callback);
				}
			},
		});
	} else {
		try {
			const { longitude, latitude } = await getLocation();
			const dataTime = await getWeather(latitude, longitude);

			callback(dataTime);
		} catch (error: any) {
			if (error.PERMISSION_DENIED) {
				alerts({
					message: `
                    Se rechazaron los permisos de ubicación.
                    Puede precionar el candado de su navegador,
                    permitir el acceso a la ubicacón y volver a intentarlo.
                    `,
					okButton: "Intentar nuevamente",
					callback: (response) => {
						if (!response) storage.removeItem("location");
						getDataTime(callback);
					},
				});
			} else if (error.POSITION_UNAVAILABLE) {
				//Problems with gps
				alerts({
					message: `
                    No se pudo acceder a su ubicación, 
                    confirme que tiene la opción GPS (Ubicación) 
                    de su dispositivo encendida y vuelva a intentarlo.
                `,
					okButton: "Intentar nuevamente",
					callback: (response) => {
						if (response) getDataTime(callback);
					},
				});
			} else if (error.TIMEOUT) {
				alerts({
					message: `
                    Excedió el tiempo de espera de los permisos
                    de ubicación.
                `,
					okButton: "Intentar nuevamente",
					callback: (response) => {
						if (response) getDataTime(callback);
					},
				});
			} else if (error.message == "incompatibility") {
			} else {
				alerts({
					message: `
                    Ocurrió un error desconocido.
                `,
				});
			}
		}
	}
};
