import Link from "next/link";

import { Location } from "@/types/listingCard";

import { useGetAddressLine } from "@/hooks/useGetAddressLine";

type ListingInformationProps = {
	title: string;
	location: Location;
	textOne: string;
	textTwo?: string;
	slug: string;
};

export const ListingInformation = ({
	title,
	location,
	textOne,
	textTwo,
	slug,
}: ListingInformationProps) => {
	const address = useGetAddressLine(location);

	return (
		<div className="flex flex-col gap-6 md:gap-14">
			<div className="flex flex-col gap-2 md:gap-8">
				<h2 className="font-heading text-2xl md:text-5xl text-black-primary">
					{title}
				</h2>
				<h3 className="text-black-primary font-heading text-lg md:text-2xl">
					{address}
				</h3>
			</div>
			{textOne && (
				<div className="text-black-primary text-sm md:text-lg font-text">
					<p>{textOne}</p>
					{textTwo && <p>{textTwo}</p>}
				</div>
			)}
			<div className="flex gap-2">
				<Link href={slug}>Open house</Link>
				<button>Contact</button>
			</div>
		</div>
	);
};

// - OpenHouse should open a calendar modal to see open house dates
// - Contact BTN should route to /slug page and scroll down to contact block (footer)
