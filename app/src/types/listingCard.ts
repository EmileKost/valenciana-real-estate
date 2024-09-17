import { Image } from "./image";

export type ListingCard = {
	title: string;
	adress: string;
	textOne: string;
	textTwo: string;
	slug: string;
	images: Image[];
	price: number;
};
