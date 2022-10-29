import { dateTime } from "../models/date.model";

export const getDate = (date?: Date): dateTime => {
	const _date = date ? new Date(date) : new Date();
	const jsonDate = {
		hour: _date.getHours(),
		seconds: _date.getSeconds(),
		minutes: _date.getMinutes(),
		month: _date.getMonth(),
		year: _date.getFullYear(),
		week: _date.getDay(),
		day: _date.getDate(),
		ms: _date.getMilliseconds(),
		time: _date.getTime(),
	};
	return jsonDate;
};
