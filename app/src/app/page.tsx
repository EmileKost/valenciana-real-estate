import { TheHeader } from "@/components/header/TheHeader";
import { HomeHero } from "@/components/HomeHero";
import { ListingsList } from "@/components/ListingsList";
import { CardListing } from "@/components/CardListing";

import { data as fakeData } from "@/constants/data";

export default function Home() {
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
