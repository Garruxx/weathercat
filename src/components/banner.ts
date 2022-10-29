import { Weather } from "../models";
import { dateFormatter, getDate } from "../utilities";

export const banner = ({ temp, city }: Weather) => {
	const date = getDate();
	const { ddmmaaaa, hhmm, indicator } = dateFormatter(date);

	//HTMLElements
	const dateInfo = document.getElementById("date-info") as HTMLElement;
	const digitalHour = document.getElementById("digital-hour") as HTMLElement;
	const elementTemp = document.getElementById("temp") as HTMLElement;
	const elementCity = document.getElementById("city") as HTMLElement;

	dateInfo.textContent = ddmmaaaa;
	digitalHour.textContent = hhmm + indicator;
	elementTemp.textContent = `${parseInt(temp)}°C`;
	elementCity.textContent = city;
};
