export type Geojson = {
	type: string;
	features: Pinpoint[];
};

export type Pinpoint = {
	geometry: {
		type: string;
		coordinates: [number, number];
	};
	properties: {
		title: string;
		description: string;
	};
	type: string;
};
