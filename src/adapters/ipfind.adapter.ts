import { location } from "../models/location.model";

export const ipfindAdapter = ({latitude, longitude}: any): location => {
	const adapted: location = {
		latitude,
		longitude
	};
	return adapted;
};
