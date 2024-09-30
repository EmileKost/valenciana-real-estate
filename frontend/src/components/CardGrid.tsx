import { Property } from "@/types/property";
import Link from "next/link";

export const CardGrid = ({ property }: { property: Property }) => (
	<li className="w-full list-none">
		<Link href={"/property"}>
			<div className="aspect-video w-full h-auto bg-grey-primary"></div>
			<div>
				<h4>{property.name}</h4>
				<div>
					<p>{property.description}</p>
					<p>{property.bedrooms}</p>
				</div>
			</div>
		</Link>
	</li>
);
