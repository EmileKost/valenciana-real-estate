"use client";

import { useFilterStore } from "@/stores/filterStore";

export const Filter = () => {
	const { bathrooms } = useFilterStore();

	return (
		<div>
			<div>
				<h3>Filter</h3>
			</div>
			<div className="text-black-primary text-4xl">{bathrooms}</div>
		</div>
	);
};
