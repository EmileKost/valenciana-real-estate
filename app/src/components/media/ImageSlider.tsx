"use client";

import { useState } from "react";
import Image from "next/image";

import { Tag } from "../Tag";
import { DarkBlur } from "../DarkBlur";
import { SliderIndicator } from "./SliderIndicator";

import { AnimatePresence, motion } from "framer-motion";
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

	const sliderVariants = {
		initial: {
			opacity: 0,
			x: -20,
		},
		animate: {
			opacity: 1,
			x: 0,
		},
		exit: {
			opacity: 0,
			x: 20,
		},
	};

	return (
		<div
			className={twMerge(
				"w-full h-full overflow-hidden flex items-center",
				className
			)}>
			<div className="w-full h-full relative overflow-hidden ml-0 bg-black-secondary">
				<AnimatePresence mode="popLayout">
					{images.map(
						(image, idx) =>
							idx === index && (
								<motion.div
									className="w-full h-full overflow-hidden"
									key={idx}
									variants={sliderVariants}
									initial={"initial"}
									animate={"animate"}
									exit={"exit"}>
									<Image
										src={image}
										alt="Test"
										width={width}
										height={height}
										className="w-full h-full object-cover"
									/>
								</motion.div>
							)
					)}
				</AnimatePresence>
				<DarkBlur />
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
