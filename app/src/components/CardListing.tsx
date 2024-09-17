import { ListingInformation } from "./ListingInformation";

// import { twMerge } from "tailwind-merge";

import { ListingCard } from "@/types/listingCard";

type CardListingProps = {
	listing: ListingCard;
	sliderPosition: string;
};

export const CardListing = ({ listing, sliderPosition }: CardListingProps) => {
	return (
		<div className="w-full pl-3 md:pl-8 h-screen flex flex-col md:flex-row">
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
