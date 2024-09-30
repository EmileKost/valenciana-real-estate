"use client";

import { useState, useEffect } from "react";

import { useGetAllProperties } from "@/hooks/useGetAllProperties";

export const PropertiesOverview = () => {
	const [properties, setProperties] = useState(null);

	const { data, isError, isPending } = useGetAllProperties();

	console.log({ data });

	return <div></div>;
};

// Layout
// - Grid: 1x 2x 3x horizontal wrap vertical
// - Card (styling needs to be done but later)
