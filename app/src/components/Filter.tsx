"use client";

import { FilterItem } from "./FilterItem";
import { useFilterStore } from "@/stores/filterStore";

// TODO: Later change with real data
const availableLocations = ["Moraira", "Valencia", "Alicante", "Bordella"];

export const Filter = () => {
	const { bathrooms, location, setLocation } = useFilterStore();

	return (
		<div>
			<div>
				{availableLocations &&
					availableLocations.length > 0 &&
					availableLocations.map((item: string) => (
						<FilterItem
							key={item}
							item={item}
							setState={setLocation}
						/>
					))}
			</div>
		</div>
	);
};
