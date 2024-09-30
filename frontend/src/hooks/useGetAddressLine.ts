import { Location } from "@/types/listingCard";

export const useGetAddressLine = (location: Location) => {
	if (!location) return;

	const { streetName, streetNumber, city, province } = location;

	const addres = `${streetName} ${streetNumber}, ${city} ${province}`;

	return addres;
};
