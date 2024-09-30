import { TheHeader } from "@/components/header/TheHeader";
import { PropertiesOverview } from "@/components/PropertiesOverview";

// Containers
import { Container } from "@/components/containers/Container";

export default function Page() {
	return (
		<>
			<TheHeader headerText="Valenciaña R.E" />
			<Container>
				<PropertiesOverview />
			</Container>
		</>
	);
}
