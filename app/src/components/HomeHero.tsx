import { HeroVideo } from "./media/HeroVideo";
import { ButtonPrimary } from "./buttons/ButtonPrimary";

// import { data as fakeData } from "@/constants/data";

export const HomeHero = () => {
	return (
		<div className="w-full flex flex-col items-start gap-8 md:gap-14 min-h-screen">
			<HeroVideo
				videoUrl="/test.mp4"
				price="$560.000"
			/>
			<div className="px-3 md:px-8 flex flex-col gap-3 md:gap-4">
				<div className="flex flex-col gap-1 md:gap-2">
					<h1 className="font-heading font-bold text-black-primary uppercase text-xl md:text-6xl">
						Valènciaña
					</h1>
					<p className="text-lg md:text-2xl font-text text-grey-primary font-light">
						Your luxury vacation home in Spain
					</p>
				</div>
				<ButtonPrimary href="/">View listing</ButtonPrimary>
			</div>
		</div>
	);
};
