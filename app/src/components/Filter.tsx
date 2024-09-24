"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { useFilterStore } from "@/stores/filterStore";

// TODO: Later change with real data
const availableLocations = ["Moraira", "Valencia", "Alicante", "Bordella"];

export const Filter = () => {
	const { bathrooms, location, setLocation } = useFilterStore();

	return (
		<div>
			<div>
				{availableLocations && availableLocations.length > 0 && (
					<Menu>
						<MenuButton>Location</MenuButton>
						<MenuItems>
							{availableLocations.map((item: any) => (
								<MenuItem key={item}>
									<div className="flex w-28 justify-between items-center">
										<h4>{item}</h4>
										<input
											onChange={(e) => setLocation(e.target.value)}
											type="checkbox"
											value={item}
											name={item}
											id={item}
										/>
									</div>
								</MenuItem>
							))}
						</MenuItems>
					</Menu>
				)}
			</div>
		</div>
	);
};
