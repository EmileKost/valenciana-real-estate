import { HeroVideo } from "./media/HeroVideo";

// import { data as fakeData } from "@/constants/data";

export const HomeHero = () => {
	return (
		<div className="h-screen w-full flex items-center py-10">
			<HeroVideo
				propertySlug="test"
				videoUrl="/test.mp4"
				price="560.000"
			/>
		</div>
	);
};
