"use client";

import { useState, useEffect, useRef } from "react";
import { CustomCursor } from "./CustomCursor";
import { Tag } from "../Tag";

type HeroVideoProps = {
	price?: string;
	videoUrl: string;
};

export const HeroVideo = ({ price, videoUrl }: HeroVideoProps) => {
	const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
	const [isHovering, setIsHovering] = useState<boolean>(false);
	const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
		x: 0,
		y: 0,
	});
	const refVideo = useRef(null);

	const trackMousePosition = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		const { clientX, clientY } = e;

		const boundingRect = e.currentTarget.getBoundingClientRect();

		const relativeX = clientX - boundingRect.left;
		const relativeY = clientY - boundingRect.top;

		setMousePosition({
			x: relativeX,
			y: relativeY,
		});
	};

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
		};
	}, [isFullScreen]);

	return (
		<div
			onClick={() => setIsFullScreen(true)}
			className="w-full relative h-[60vh] md:h-[600px] flex items-center overflow-hidden cursor-none bg-black-secondary"
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
			onMouseMove={(e) => trackMousePosition(e)}>
			<div className="w-full h-full absolute top-0 left-0">
				<CustomCursor
					x={mousePosition.x}
					y={mousePosition.y}
					mouseIsDown={isHovering}
				/>
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
				{price && <Tag>{price}</Tag>}
			</div>
		</div>
	);
};

// MOUSE POS
// - Get relative mouse position
// - ON mouseDown hover
// - Start animating
