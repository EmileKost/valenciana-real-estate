import Link from "next/link";

import { ROUTES } from "@/constants/routes";

type HeroVideoProps = {
	price: string;
	thumbnailImage?: string;
	videoUrl: string;
	propertySlug: string;
};

export const HeroVideo = ({
	price,
	thumbnailImage,
	videoUrl,
	propertySlug,
}: HeroVideoProps) => {
	return (
		<div className="w-full relative h-full">
			<div>
				<video>
					<source
						type="video/mp4"
						src={videoUrl}
					/>
				</video>
			</div>
		</div>
	);
};

// REQUIREMENTS
// - Must be a link to the detail page of the property
// - Muted Autoplay
// - Access full control by button
// - Loop
