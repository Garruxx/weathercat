import { Weather } from "../models";
import { formatClimate } from "../utilities";

export const weatherAdapter = (data: any): Weather => {
	const getTime = (unixTime: number) => new Date(unixTime * 1000);

	const { name, weather: _weather, sys, main } = data;
	const sunrise = getTime(sys.sunrise);
	const sunset = getTime(sys.sunset);
	const climate = formatClimate(_weather[0].icon);
	const weather: Weather = {
		city: name,
		climate,
		sunrise,
		sunset,
		temp: main.temp,
	};

	return weather;
};
