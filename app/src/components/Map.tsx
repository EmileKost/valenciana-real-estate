"use client";

import { useEffect, useState, useRef, LegacyRef } from "react";

import mapboxgl from "mapbox-gl";

import { INITIAL_ZOOM_VALUE, ZOOM_SUM_VALUE } from "@/constants/zoomValue";

type MapProps = {
	lon: number;
	lat: number;
};

export const Map = ({ lon, lat }: MapProps) => {
	const [coordinates, setCoordinates] = useState<{ lon: number; lat: number }>({
		lon: lon,
		lat: lat,
	});
	const [zoom, setZoomValue] = useState<number>(INITIAL_ZOOM_VALUE);
	const [isError, setIsError] = useState<boolean>(false);

	const refMap = useRef<mapboxgl.Map | null>(null);
	const refMapContainer = useRef<string | HTMLElement>();

	const handleUpdateZoomValue = (operator: string) => {
		if (!operator) return zoom;

		const isMinus = operator === "plus" ? true : false;

		if (isMinus) {
			if (zoom <= 5) return zoom;

			setZoomValue((prev) => prev - ZOOM_SUM_VALUE);
			return zoom;
		}

		if (zoom > 16) return zoom;

		setZoomValue((prev) => prev + ZOOM_SUM_VALUE);

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
			style: "mapbox://styles/mapbox/dark-v11",
		});

		return () => {
			if (refMap.current) {
				refMap.current.remove();
				setIsError(false);
			}

			return;
		};
	}, [zoom, isError, coordinates]);

	return (
		<div className="w-full h-[60vh] md:h-[50vh] block bg-black-secondary">
			{!isError ? (
				<div
					ref={refMapContainer as LegacyRef<HTMLDivElement> | undefined}
					className="w-full h-full relative">
					<div className="w-fit absolute right-3 bottom-3 flex flex-col">
						<button
							className="w-10 h-12 rounded-t-full bg-black-secondary text-white-primary"
							onClick={() => handleUpdateZoomValue("minus")}>
							+
						</button>
						<div className="w-10 h-[1px] bg-white-primary" />
						<button
							className="w-10 h-12 rounded-b-full bg-black-secondary text-white-primary"
							onClick={() => handleUpdateZoomValue("plus")}>
							-
						</button>
					</div>
				</div>
			) : (
				<div className="w-full h-full flex items-center">
					<div className="py-4 md:py-8">
						<h3 className="font-heading text-white-primary text-xl md:text-5xl">
							Map UnAvailable
						</h3>
						<p className="font-text text-white-primary text-lg md:text-xl">
							Unfortunately the map could not be loaded, check your internet
							connection, refresh and try again
						</p>
					</div>
				</div>
			)}
		</div>
	);
};
