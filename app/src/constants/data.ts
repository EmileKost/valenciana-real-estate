export const data = [
	{
		title: "Casa di Aquatica",
		slug: "casa-di-aquatica",
		description: "Short text if we ever need to use this",
		price: 670_000,
		primaryText:
			"Casa di Aquatica is an exquisite seaside villa located on the stunning coastline of Spain. Nestled in a tranquil setting, this luxurious property offers breathtaking views of the Mediterranean Sea, blending modern design with the beauty of its natural surroundings.",
		secondaryText:
			"The villa boasts spacious living areas, elegant interiors, and state-of-the-art amenities, including an infinity pool, expansive terraces, and lush gardens, perfect for relaxing and entertaining.",
		location: {
			streetName: "Carrer Grande",
			streetNumber: "12",
			addressLine2: "N.V.T", // Optional
			postalCode: "10115",
			city: "Moraira",
			province: "Valenciana",
			country: "Spain",
			longLat: [52.45, 4],
		},
		media: {
			images: ["image-path-1", "image-path-2", "image-path-3"],
			videos: ["video-path-1", "video-path-2", "video-path-3"],
		},
		availabe: true,
		isReserved: false,
		externalLink: "", // Optional
	},
];

// Probably going to need some more stuff for the Google Maps API handling
