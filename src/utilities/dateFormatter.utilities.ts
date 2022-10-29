import { dateTime } from "../models/date.model";

export const dateFormatter = (date: dateTime) => {
	const weeks = [
		"Domingo",
		"Lunes",
		"Martes",
		"Miércoles",
		"Jueves",
		"Viernes",
		"Sábado",
	];

	const months = [
		"enero",
		"febrero",
		"marzo",
		"abril",
		"mayo",
		"junio",
		"julio",
		"agosto",
		"septiembre",
		"octubre",
		"noviembre",
		"diciembre",
	];

	const addLeftZero = (int: number) => (int < 10 ? "0" + int : int);
	const hour =
		date.hour > 12 ? date.hour - 12 : date.hour == 0 ? 12 : date.hour;
	const minutes = addLeftZero(date.minutes);
	const seconds = addLeftZero(date.seconds);
	const { week, month, year, day } = date;

	const HHmm = `${date.hour}:${minutes}`;
	const HHmmss = `${date.hour}:${minutes}:${seconds}`;
	const hhmmss = `${hour}:${minutes}:${seconds}`;
	const hhmm = `${hour}:${minutes}`;
	const indicator = date.hour > 11 ? "PM" : "AM";

	//DDMMAAAA
	const ddmmaaaa = `${weeks[week]} ${day} de ${months[month]} de ${year}`;
	return {
		...date,
		hhmm,
		hhmmss,
		HHmm,
		HHmmss,
		indicator,
		hour,
		Hour: date.hour,
		minutes,
		seconds,
		ddmmaaaa,
	};
};
