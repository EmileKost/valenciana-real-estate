import { create } from "zustand";

type UseFilterStore = {
	currency: string;
	setCurrency: (newCurrency: string) => void;
};

export const useCurrencyStore = create<UseFilterStore>((set) => ({
	currency: "EUR",
	setCurrency: (newCurrency: string) => set({ currency: newCurrency }),
}));
