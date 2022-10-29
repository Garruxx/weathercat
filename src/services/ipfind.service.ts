import { ipfindAdapter } from "../adapters";

export const ipfind = async () => {
	const find = await fetch(
		"https://api.maptiler.com/geolocation/ip.json?key=W9xa7wfVFWSEnH5Wj0ba"
	);
	const JsonFind = await find.json();
	const ipFindAdapted = ipfindAdapter(JsonFind);
	return ipFindAdapted;
};
