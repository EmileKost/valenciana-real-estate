import { Image, Video } from "./media";

export type ListingCard = {
	title: string;
	slug: string;
	description: string;
	price: number;
	textOne: string;
	textTwo: string;
	location: Location;
	media: {
		images: Image[];
		videos: Video[];
	};
	available?: boolean;
	isReserved: boolean;
	externalLink?: string;
};

export type Location = {
	streetName: string;
	streetNumber: number;
	addressLine2?: string;
	postalCode: string;
	city: string;
	closestBigCity: string;
	province?: string;
	country: string;
	longLat: number[];
};
