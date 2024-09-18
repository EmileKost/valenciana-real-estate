"use client";

import { useState } from "react";
import Image from "next/image";

import { Tag } from "../Tag";
import { DarkBlur } from "../DarkBlur";
import { SliderIndicator } from "./SliderIndicator";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import { Image as ImageType } from "@/types/media";

type ImageSliderProps = {
	images: ImageType[];
	width: number;
	height: number;
	price?: number;
	className?: string;
};

export const ImageSlider = ({
	images,
	width,
	height,
	price,
	className,
}: ImageSliderProps) => {
	const [index, setIndex] = useState<number>(0);

	return (
		<div
			className={twMerge(
				"w-full h-full overflow-hidden flex items-center",
				className
			)}>
			<div className="w-full h-full relative overflow-hidden ml-0">
				<motion.div className="w-full h-full overflow-hidden">
					<Image
						src={images[index]}
						alt="Test"
						width={width}
						height={height}
						className="w-full h-full object-cover"
					/>
					<DarkBlur opacity={20} />
				</motion.div>
				{images.length > 1 && (
					<SliderIndicator
						setIndex={setIndex}
						currentIndex={index}
						images={images}
					/>
				)}
				{price && <Tag className="absolute left-5 bottom-5">{price}</Tag>}
			</div>
		</div>
	);
};

// BASE REQUIREMENTS
// - Image slider can be used in multiple instances, overview page, detail page etc..
// - On hover <- left and right -> button to switch between images
// - SliderIndicator that helps users navigate between images
// - Slider is also swipeable/draggable

// Make hook for price
