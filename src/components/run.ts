import { clock, getDataTime } from ".";
import { Weather } from "../models";

let dataTime: Weather = {
	city: "Santa Marta",
	climate: "cloudy",
	sunrise: new Date(),
	sunset: new Date(),
	temp: "23",
};

// Set the interface according to the weather
const setClimateInterface = (time: Weather) => {
	const date = new Date();
	document.body.setAttribute("climate", time.climate);

	if (date > time.sunrise && date < time.sunset) {
		document.body.setAttribute("class", "day");
	} else {
		document.body.setAttribute("class", "night");
	}
};

const getDataTimeCallback = (dataTIme: Weather) => {
	dataTime = dataTIme;
	setClimateInterface(dataTIme);
};

setClimateInterface(dataTime);

export const run = () => {
	setInterval(() => getDataTime(getDataTimeCallback), 5 * 1000 * 60);
	getDataTime(getDataTimeCallback);
	setInterval(() => clock(dataTime), 1);
};
