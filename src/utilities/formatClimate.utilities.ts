/*
| "clearSky"
| "partlyCloudy"
| "cloudy"
| "littleRain"
| "rain"
| "thunderStrom";
*/

const climate: any = {
	"01": "clearSky",
	"02": "partlyCloudy",
	"03": "cloudy",
	"04": "cloudy",
	"10": "littleRain",
	"09":"rain",
	"11": "thunderStrom",
	"13": "littleRain",
	"50": "partlyCloudy",
};
export const formatClimate = (icon: string) => {
	const id = icon.split(/(n|d)/)[0];
	return climate[id];
};
