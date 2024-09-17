"use client";

import { useState, useEffect, useRef } from "react";
import { Tag } from "../Tag";

type HeroVideoProps = {
	price: string;
	videoUrl: string;
};

export const HeroVideo = ({ price, videoUrl }: HeroVideoProps) => {
	const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
	const refVideo = useRef(null);

	useEffect(() => {
		if (!refVideo.current) return;

		const videoElement = refVideo.current;

		if (videoElement) {
			const videoToFullScreen = () => {
				// @ts-expect-error :Func works but can't seem to fix the error type Never
				videoElement.requestFullscreen();
			};

			if (isFullScreen) {
				videoToFullScreen();
			}
		}

		return () => {
			setIsFullScreen(false);
			if (videoElement) {
				// videoElement.exitFullScreen();
			}
		};
	}, [isFullScreen]);

	return (
		<div
			onClick={() => setIsFullScreen(true)}
			className="w-full relative h-[500px] flex items-center overflow-hidden cursor-pointer">
			<div className="w-full h-full absolute top-0 left-0">
				<video
					ref={refVideo}
					className="w-full h-full object-cover"
					muted
					autoPlay
					loop>
					<source
						type="video/mp4"
						src={videoUrl}
					/>
				</video>
			</div>
			<div className="absolute bottom-3 left-3 md:bottom-3 md:left-8">
				<Tag>{price}</Tag>
			</div>
		</div>
	);
};

// REQUIREMENTS
// - Must be a link to the detail page of the property
// - Muted Autoplay
// - Access full control by button
// - Loop

// BACKLOg
// - Nice custom mouse hover that informs about full screen
// - Fix Video not in middle homeby
