export type Property = {
	id: number;
	name: string;
	description: string;
	location: {
		streetName: string;
		streetNumber: number;
		addressLine2?: string;
		postalCode: string;
		city: string;
		province: string;
		country: string;
		longLat: [number, number];
	};
	price: number;
	type: string;
	bedrooms: number;
	bathrooms: number;
};
