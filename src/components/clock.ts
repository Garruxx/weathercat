export const id = (Id: string) => document.getElementById(Id);
export const svg = id("svg");
import {
	handleHandHours,
	handleHandMinutes,
	handleHandSeconds,
} from "./clock/index";
import { axes, dateTime, Weather } from "../models";
import { dateFormatter, getDate } from "../utilities";
import { banner } from "./banner";

export const clock = (dataTime: Weather) => {
	//Get date
	const date: dateTime = getDate();
	const dateFormated = dateFormatter(date);
	//Get axes
	const axisElement = id("axis");
	const xAxis = axisElement!.getAttribute("cx") as string;
	const yAxis = axisElement!.getAttribute("cy") as string;
	const y = parseFloat(yAxis);
	const x = parseFloat(xAxis);
	const axes: axes = { y, x };

	//move the hands of the clock
	handleHandSeconds({ ...date, axes });
	handleHandMinutes({ ...date, axes });
	handleHandHours({ ...date, hours: dateFormated.hour, axes });
	banner(dataTime);
};
