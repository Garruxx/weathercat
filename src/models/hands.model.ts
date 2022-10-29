export type axes = {
	x: number;
	y: number;
};

export interface HandleHandSeconds {
	seconds: number;
	ms: number;
	axes: axes;
}

export interface HandleHandMinutes {
	minutes: number;
	seconds: number;
	axes: axes;
}

export interface HandleHandHours {
	hours: number;
	minutes: number;
	axes: axes;
}
