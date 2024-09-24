import { create } from "zustand";

type UseFilterStore = {
	minPrice?: number;
	maxPrice?: number;
	location?: string[];
	bedrooms?: number;
	bathrooms?: number;
	setMinPrice: (minPrice: number) => void;
	setMaxPrice: (maxPrice: number) => void;
	setLocation: (location: string[]) => void;
	setBedrooms: (bedrooms: number) => void;
	setBathrooms: (bathrooms: number) => void;
};

export const useFilterStore = create<UseFilterStore>((set) => ({
	minPrice: 0,
	maxPrice: 0,
	location: [],
	bedrooms: 0,
	bathrooms: 0,
	setMinPrice: (minPrice: number) => set({ minPrice }),
	setMaxPrice: (maxPrice: number) => set({ maxPrice }),
	setLocation: (location: string[]) => set({ location }),
	setBedrooms: (bedrooms: number) => set({ bedrooms }),
	setBathrooms: (bathrooms: number) => set({ bathrooms }),
}));
