import { TheHeader } from "@/components/header/TheHeader";
import { HomeHero } from "@/components/HomeHero";
import { ListingsList } from "@/components/ListingsList";
import { CardListing } from "@/components/CardListing";
import { Map } from "@/components/Map";

import { data as fakeData } from "@/constants/data";

export default function Home() {
	return (
		<>
			<TheHeader headerText="VALENCIAÑA R.E" />
			<main className="min-h-screen w-full flex flex-col">
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
				<div className="px-3 md:px-8 flex flex-col mt-8 md:mt-14">
					<h2 className="font-heading text-2xl md:text-5xl text-black-primary font-bold">
						Come find us!
					</h2>
					{/* Google maps Component */}
					{/* - Using Valencia coords for now */}
					<Map
						lon={39.4738}
						lat={0.3756}
					/>
				</div>
			</main>
		</>
	);
}

// 39.4738° N, 0.3756° W
// Valencia / Coordinates
