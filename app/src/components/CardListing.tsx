"use client";

import { useCallback } from "react";

import { ListingInformation } from "./ListingInformation";
import { ImageSlider } from "./media/ImageSlider";

import { useCurrencyStore } from "@/store";

import { twMerge } from "tailwind-merge";

import { ListingCard } from "@/types/listingCard";

type CardListingProps = {
	listing: ListingCard;
	sliderPosition: string;
};

export const CardListing = ({ listing, sliderPosition }: CardListingProps) => {
	const { currency } = useCurrencyStore();
	const getFormattedPrice = useCallback((price: number, currency: string) => {
		if (!price) return;

		const formattedPrice = new Intl.NumberFormat("de-De", {
			style: "currency",
			currency: currency ?? "EUR",
			maximumFractionDigits: 0,
		}).format(price);

		return formattedPrice;
	}, []);

	return (
		<div
			className={twMerge(
				"w-full  md:pr-0 h-screen flex flex-col gap-12 md:gap-0 items-center mt-10 md:mt-0",
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
				price={getFormattedPrice(listing.price, currency)}
				width={809}
				height={989}
				className="w-full md:w-[50vw]"
			/>
		</div>
	);
};

// TODO:
// - Fix card on phone
// - Make slider draggable
// - Hook for getting correct currency and price
