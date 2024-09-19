"use client";

import { useQuery } from "@tanstack/react-query";

import { TheHeader } from "@/components/header/TheHeader";
import { HomeHero } from "@/components/HomeHero";
import { ListingsList } from "@/components/ListingsList";
import { CardListing } from "@/components/CardListing";

import { data as fakeData } from "@/constants/data";

import { getLiveWeather } from "@/utils/getLiveWeather";

export default function Home() {
	const city = "Valencia";
	const country = "Spain";

	const weather = useQuery({
		queryKey: ["weather", city, country],
		queryFn: () => getLiveWeather(country, city),
	});

	console.log(weather.data);

	return (
		<>
			<TheHeader headerText="VALENCIAÑA R.E" />
			<main className="min-h-screen w-full">
				<HomeHero />
				{fakeData && fakeData.length > 0 ? (
					<ListingsList>
						{fakeData.map((listing, idx) => (
							<CardListing
								listing={listing}
								key={listing.title}
								sliderPosition={idx % 2 ? "left" : "right"}
							/>
						))}
					</ListingsList>
				) : null}
			</main>
		</>
	);
}
