import Link from "next/link";
import { ROUTES } from "@/constants/routes";

import { Navigation } from "./Navigation";

type TheHeaderProps = {
	headerText: string;
	isDetailPage?: boolean;
};

export const TheHeader = ({ headerText, isDetailPage }: TheHeaderProps) => (
	<header className="px-3 md:px-8 pt-10 pb-2 md:pt-20 md:pb-14 flex items-center justify-between">
		<div>
			<Link href={ROUTES.HOME.href}>
				{isDetailPage ? (
					"Back"
				) : (
					<h1 className="font-text-serif text-black-primary text-xl md:text-3xl">
						{headerText}
					</h1>
				)}
			</Link>
		</div>
		<Navigation />
	</header>
);
