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
			center: [lon, lat],
			zoom: 10.12,
		});

		return () => {
			if (refMap.current) {
				refMap.current.remove();
			}
		};
	}, [zoom, isError]);

	return (
		<div
			// @ts-expect-error Map types for now are weird and need to be fixed
			ref={refMapContainer}
			className="w-full h-[60vh] md:h-[50vh] block bg-black-secondary relative">
			<div className="w-fit absolute right-3 bottom-3 flex flex-col">
				<button className="w-10 h-12 rounded-t-full bg-black-secondary text-white-primary">
					+
				</button>
				<div className="w-10 h-[1px] bg-white-primary" />
				<button className="w-10 h-12 rounded-b-full bg-black-secondary text-white-primary">
					-
				</button>
			</div>
		</div>
	);
};

// Components within
// ZoomFunc
