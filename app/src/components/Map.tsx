"use client";

import { useEffect, useState, useRef } from "react";

import mapboxgl from "mapbox-gl";

import { INITIAL_ZOOM_VALUE } from "@/constants/zoomValue";

type MapProps = {
	lon: number;
	lat: number;
};

export const Map = ({ lon, lat }: MapProps) => {
	const [zoom, setZoom] = useState<number>(INITIAL_ZOOM_VALUE);
	const [isError, setIsError] = useState<boolean>(false);

	const refMap = useRef<mapboxgl.Map | null>(null);
	const refMapContainer = useRef<string | HTMLElement>();

	useEffect(() => {
		if (!refMap) {
			setIsError(true);
			return;
		}

		mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAP_KEY as string;
		refMap.current = new mapboxgl.Map({
			// @ts-expect-error Weird map type to fix later
			container: refMapContainer.current,
		});

		return () => {
			if (refMap.current) {
				refMap.current.remove();
			}
		};
	}, []);

	return (
		<div
			ref={refMapContainer}
			className="w-full h-[60vh] md:h-[50vh] block bg-black-secondary"></div>
	);
};

// Components within
// ZoomFunc
