import { HeroVideo } from "./media/HeroVideo";
import { ButtonPrimary } from "./buttons/ButtonPrimary";

// Container
import { Container } from "./containers/Container";

// import { data as fakeData } from "@/constants/data";

export const HomeHero = () => {
	return (
		<div className="w-full pt-0 md:pt-28 flex flex-col justify-center md:items-start gap-8 md:gap-14 min-h-screen">
			<HeroVideo videoUrl="/test_2.mp4" />
			<Container className="flex flex-col gap-3 md:gap-4">
				<div className="flex flex-col gap-1 md:gap-2">
					<h1 className="font-heading font-bold text-black-primary uppercase text-xl md:text-6xl">
						Valènciaña
					</h1>
					<p className="text-lg md:text-2xl font-text text-grey-primary font-light">
						Your luxury vacation home in Spain
					</p>
				</div>
				<ButtonPrimary href="/">View listing</ButtonPrimary>
			</Container>
		</div>
	);
};
