import { weatherAdapter } from "../adapters";
import { Weather } from "../models";
import { getCity } from "./city.service";

export const getWeather = async (
	latitude: number,
	longitude: number
): Promise<Weather> => {
	const baseUri = "https://api.openweathermap.org/data/2.5/weather?";
	const apiKey = "05da9fb21f3f146d383a07f565dbf631";
	const units = "metric";
	const uri = `${baseUri}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
	const time = await (
		await fetch(uri, {
			cache: "no-cache",
		})
	).json();
	const weatherDated = weatherAdapter(time);
	weatherDated.city = await getCity({ latitude, longitude });
	return weatherDated;
};
