export type climate =
	| "clearSky"
	| "partlyCloudy"
	| "cloudy"
	| "littleRain"
	| "rain"
	| "thunderStrom";

export interface Weather {
	city: string;
	temp: string;
	sunrise: Date;
	sunset: Date;
	climate: climate;
}
