import { ListingInformation } from "./ListingInformation";
import { ImageSlider } from "./media/ImageSlider";

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
				"w-full px-3 md:pl-8 md:pr-0 h-screen flex flex-col gap-12 md:gap-0 items-center mt-10 md:mt-0",
				sliderPosition === "left" ? "md:flex-row-reverse" : "md:flex-row"
			)}>
			<ListingInformation
				title={listing.title}
				location={listing.location}
				textOne={listing.textOne}
				textTwo={listing.textTwo}
				slug={listing.slug}
			/>
			<ImageSlider
				images={listing.media.images}
				price={listing.price}
				width={809}
				height={989}
				className="w-full md:w-[50vw]"
			/>
		</div>
	);
};
