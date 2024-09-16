import { TheHeader } from "@/components/header/TheHeader";
import { HomeHero } from "@/components/HomeHero";

export default function Home() {
	return (
		<>
			<TheHeader headerText="VALENCIAÑA R.E" />
			<main className="min-h-screen w-full">
				<HomeHero />
			</main>
		</>
	);
}
