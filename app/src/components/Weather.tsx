"use client";

import { useQuery } from "@tanstack/react-query";

import { getLiveWeather } from "@/utils/getLiveWeather";

type WeatherProps = {
	country: string;
	city: string;
};

export const Weather = ({ country = "Spain", city }: WeatherProps) => {
	const weather = useQuery({
		queryKey: ["weather", city, country],
		queryFn: () => getLiveWeather(country, city),
	});

	const { data } = weather;

	return (
		<div>
			<div>
				<div>{}</div>
			</div>
		</div>
	);
};
