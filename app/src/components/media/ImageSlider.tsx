import { Image } from "@/types/media";
import { useState } from "react";

type ImageSliderProps = {
	images: Image[];
	price?: number;
};

export const ImageSlider = ({ images, price }: ImageSliderProps) => {
	const [index, setIndex] = useState<number>(0);

	return (
		<div className="w-full h-full overflow-hidden">
			<div>
				<div></div>
			</div>
		</div>
	);
};

// BASE REQUIREMENTS
// - Image slider can be used in multiple instances, overview page, detail page etc..
// - On hover <- left and right -> button to switch between images
// - SliderIndicator that helps users navigate between images
// - Slider is also swipeable/draggable
