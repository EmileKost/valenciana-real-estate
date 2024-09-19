export const getCorrectLocation = async (country: string, city: string) => {
	if (!country || !city) return;

	const authKey = process.env.NEXT_PUBLIC_WEATHER_KEY;

	try {
		const result = await fetch(
			`http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${authKey}`
		);
		const data = await result.json();

		return data;
	} catch (err) {
		throw err;
	}
};
