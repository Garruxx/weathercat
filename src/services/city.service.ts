import { location } from "../models";

export const getCity = async ({ latitude, longitude }: location) => {
	const uri = "https://api.geoapify.com/v1/geocode/reverse?";
	const lang = "es";
	const apiKey = "aeeaa161e3a3470586cd27ff965b4b78";
	const type = "street";
	const format = "json";
	const limit = "1";
	const allUri = `${uri}lat=${latitude}&lon=${longitude}&lang=${lang}&apiKey=${apiKey}&type=${type}&format=${format}&limit=${limit}`;
	const geodata = await fetch(allUri);
	const { results } = await geodata.json();
	return results[0].city;
};
