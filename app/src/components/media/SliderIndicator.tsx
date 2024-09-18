import { Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

import { Image as ImageType } from "@/types/media";

type SliderIndicatorProps = {
	images: ImageType[];
	currentIndex: number;
	setIndex: Dispatch<SetStateAction<number>>; // StateActionFunc
	className?: string;
};

export const SliderIndicator = ({
	images,
	currentIndex,
	setIndex,
	className,
}: SliderIndicatorProps) => (
	<div
		className={twMerge(
			"z-max absolute bottom-5 left-[50%] -translate-x-[50%] flex gap-1",
			className
		)}>
		{images &&
			images.length > 0 &&
			images.map((image, idx) => (
				<button
					className={twMerge(
						"h-4 w-4 rounded-full border border-white-primary",
						idx === currentIndex ? "bg-white-primary" : "bg-transparent"
					)}
					onClick={() => setIndex(idx)}
					key={image}></button>
			))}
	</div>
);
