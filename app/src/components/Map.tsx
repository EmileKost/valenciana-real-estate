"use client";

import { useEffect, useState, useRef, useCallback, LegacyRef } from "react";

import mapboxgl from "mapbox-gl";

import {
	INITIAL_ZOOM_VALUE,
	ZOOM_SUM_VALUE,
	MAXIMUM_ZOOM_OUT_VALUE,
	MAXIMUM_ZOOM_IN_VALUE,
} from "@/constants/zoomValue";

import { Geojson, Pinpoint } from "@/types/map";

type MapProps = {
	lon: number;
	lat: number;
	geojson: Geojson; // Fix type later
};

export const Map = ({ lon, lat, geojson }: MapProps) => {
	const [coordinates] = useState<{ lon: number; lat: number }>({
		lon: lon,
		lat: lat,
	});
	const [zoom, setZoomValue] = useState<number>(INITIAL_ZOOM_VALUE);
	const [isError, setIsError] = useState<boolean>(false);

	const refMap = useRef<mapboxgl.Map | null>(null);
	const refMapContainer = useRef<string | HTMLElement>();

	const handleUpdateZoomValue = useCallback(
		(operator: string) => {
			if (!operator) return zoom;

			const isMinus = operator === "minus";

			if (isMinus) {
				if (zoom <= MAXIMUM_ZOOM_OUT_VALUE) return zoom;

				setZoomValue((prev) => prev - ZOOM_SUM_VALUE);
			} else {
				if (zoom > MAXIMUM_ZOOM_IN_VALUE) return zoom;

				setZoomValue((prev) => prev + ZOOM_SUM_VALUE);
			}

			return zoom;
		},
		[zoom]
	);

	useEffect(() => {
		if (!refMap) {
			setIsError(true);
			return;
		}

		if (isError) return; // Handle error later

		mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAP_KEY as string;
		refMap.current = new mapboxgl.Map({
			container: refMapContainer.current as string | HTMLElement,
			center: [coordinates.lon, coordinates.lat],
			zoom: zoom,
			style: "mapbox://styles/mapbox/dark-v11",
		});

		refMap.current.on("load", () => {
			if (geojson) {
				const { features } = geojson;

				if (features) {
					features.forEach((pinpoint: Pinpoint) => {
						new mapboxgl.Marker()
							.setLngLat(pinpoint.geometry.coordinates)
							.addTo(refMap.current as mapboxgl.Map);
					});
				}
			}
		});

		return () => {
			if (refMap.current) {
				refMap.current.remove();
				setIsError(false);
			}
		};
	}, [zoom, isError, coordinates, geojson]);

	return (
		<div className="w-full h-[60vh] md:h-[50vh] block bg-black-secondary rounded-xl overflow-hidden">
			<div
				ref={refMapContainer as LegacyRef<HTMLDivElement> | undefined}
				className="w-full h-full relative">
				<div className="w-fit absolute left-3 bottom-3 flex flex-col">
					<button
						className="w-10 h-12 rounded-t-full bg-black-secondary text-white-primary"
						onClick={() => handleUpdateZoomValue("plus")}>
						+
					</button>
					<div className="w-10 h-[1px] bg-white-primary" />
					<button
						className="w-10 h-12 rounded-b-full bg-black-secondary text-white-primary"
						onClick={() => handleUpdateZoomValue("minus")}>
						-
					</button>
				</div>
			</div>
		</div>
	);
};

// MVP is Done
// BACKLOG
// - Switiching between places and smoothly animating this transition.
// - *Custom marker (need a design and plan for that)
// - BUG: Buttons dissapear when using styling from mapboxgl
