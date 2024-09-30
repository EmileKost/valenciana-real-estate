import { create } from "zustand";

// Types
import { Property } from "./types/property";

type CurrencyStoreTypes = {
	currency: string;
	setCurrency: (newCurrency: string) => void;
};

type PropertiesStoreTypes = {
	properties: Property[];
};

export const useCurrencyStore = create<CurrencyStoreTypes>((set) => ({
	currency: "EUR",
	setCurrency: (newCurrency: string) => set({ currency: newCurrency }),
}));

export const usePropertiesStore = create<PropertiesStoreTypes>((set) => ({
	properties: [],
	setProperties: (allProperties: Property[]) =>
		set({ properties: allProperties }),
}));
