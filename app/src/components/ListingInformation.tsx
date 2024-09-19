import Link from "next/link";

import { IconPinpoint } from "./icons/IconPinpoint";
import { Weather } from "./Weather";

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
		<div className="flex flex-col gap-5 md:gap-10 w-full md:w-[50vw] md:pr-10">
			<div className="flex flex-col gap-2 md:gap-6">
				<h2 className="font-heading text-2xl md:text-5xl text-black-primary font-bold md:max-w-[75%]">
					{`${title} in ${location.city}`}
				</h2>
				<h3 className="text-black-primary font-heading text-lg md:text-2xl flex gap-3 items-center">
					<span>
						<IconPinpoint />
					</span>
					{address}
				</h3>
			</div>
			{textOne && (
				<div className="text-black-primary w-full md:w-third text-sm md:text-lg font-text flex flex-col gap-2">
					<p>{textOne}</p>
					{textTwo && <p>{textTwo}</p>}
				</div>
			)}
			<div className="flex gap-2">
				<Link href={slug}>Open house</Link>
				<button>Contact</button>
			</div>
			<Weather
				country={location.country}
				city={location.closestBigCity}
			/>
		</div>
	);
};

// - OpenHouse should open a calendar modal to see open house dates
// - Contact BTN should route to /slug page and scroll down to contact block (footer)
// - Make Link of address line
