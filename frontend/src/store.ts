import { create } from "zustand";

// Types
import { Property } from "./types/property";

type CurrencyStoreTypes = {
	currency: string;
	setCurrency: (newCurrency: string) => void;
};

export const useCurrencyStore = create<CurrencyStoreTypes>((set) => ({
	currency: "EUR",
	setCurrency: (newCurrency: string) => set({ currency: newCurrency }),
}));
