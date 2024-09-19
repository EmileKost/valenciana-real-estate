import { getCorrectLocation } from "./getCorrectLocation";

export const getLiveWeather = async (country: string, city: string) => {
	if (!country || !city) return;

	const authKey = process.env.NEXT_PUBLIC_WEATHER_KEY;

	try {
		const location = await getCorrectLocation(country, city);
		const { lat, lon } = await location[0];

		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${authKey}`
		);
		const data = await response.json();

		return data;
	} catch (err) {
		throw err;
	}
};
