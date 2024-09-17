import { ListingInformation } from "./ListingInformation";

import { twMerge } from "tailwind-merge";

import { ListingCard } from "@/types/listingCard";

type CardListingProps = {
	listing: ListingCard;
	sliderPosition: string;
};

export const CardListing = ({ listing, sliderPosition }: CardListingProps) => {
	return (
		<div
			className={twMerge(
				"w-full px-3 md:pl-8 h-screen flex flex-col items-center mt-10 md:mt-0",
				sliderPosition === "left" ? "md:flex-row-reverse" : "md:flex-row"
			)}>
			<ListingInformation
				title={listing.title}
				location={listing.location}
				textOne={listing.textOne}
				textTwo={listing.textTwo}
				slug={listing.slug}
			/>
			{/* SLIDER */}
		</div>
	);
};
