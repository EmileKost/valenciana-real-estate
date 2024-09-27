"use client";

import { useEffect, useState, useRef, LegacyRef } from "react";

import mapboxgl from "mapbox-gl";

import {
	INITIAL_ZOOM_VALUE,
	ZOOM_SUM_VALUE,
	MAXIMUM_ZOOM_OUT_VALUE,
	MAXIMUM_ZOOM_IN_VALUE,
} from "@/constants/zoomValue";

type MapProps = {
	lon: number;
	lat: number;
	pinpoints: any; // Fix type later
};

export const Map = ({ lon, lat, pinpoints }: MapProps) => {
	const [coordinates] = useState<{ lon: number; lat: number }>({
		lon: lon,
		lat: lat,
	});
	const [zoom, setZoomValue] = useState<number>(INITIAL_ZOOM_VALUE);
	const [isError, setIsError] = useState<boolean>(false);

	const refMap = useRef<mapboxgl.Map | null>(null);
	const refMapContainer = useRef<string | HTMLElement>();
	const refMarker = useRef<any>();

	const handleUpdateZoomValue = (operator: string) => {
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
	};

	useEffect(() => {
		if (!refMap) {
			setIsError(true);
			return;
		}

		if (isError) return;

		mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAP_KEY as string;
		refMap.current = new mapboxgl.Map({
			container: refMapContainer.current as string | HTMLElement,
			center: [coordinates.lon, coordinates.lat],
			zoom: zoom,
			style: "mapbox://styles/mapbox/light-11",
		});

		refMap.current.on("load", () => {
			if (pinpoints) {
				const { features } = pinpoints;

				if (features) {
					features.map((pinpoint) => {
						console.log({ pinpoint });

						new mapboxgl.Marker(refMarker.current)
							.setLngLat([-0.37739, 39.46975])
							.addTo(refMap.current);
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
	}, [zoom, isError, coordinates, pinpoints]);

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
			<div
				className="w-28 h-28 bg-blue-500 rounded-full"
				ref={refMarker}>
				MARKER
			</div>
		</div>
	);
};

// TODO:
// - Smooth transition
// - Fix displaying error and follow MapBox guidelines (see logs and eventually docs)
// - Display pinpoint
