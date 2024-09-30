"use client";

import { CardGrid } from "./CardGrid";

import { useGetAllProperties } from "@/hooks/useGetAllProperties";
import { Property } from "@/types/property";

export const PropertiesOverview = () => {
	const { data, isPending, isError, error } = useGetAllProperties();

	return (
		<div className="mt-36">
			<div className="mb-4 md:mb-10">
				<h2>All listings</h2>
				{/* Filter here */}
			</div>
			<div className="w-full flex justify-center items-center">
				{isPending && <p>Loading...</p>}
				{isError && <p>{error.message}</p>}
				{data && data.length > 0 && (
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-[1250px] gap-2 overflow-y-scroll max-h-[700px]">
						{data.map((property: Property) => (
							<CardGrid
								property={property}
								key={property.id}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

// Layout
// - Grid: 1x 2x 3x horizontal wrap vertical
// - Card (styling needs to be done but later)
