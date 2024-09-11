import { ROUTES } from "@/constants/routes";
import Link from "next/link";

import { NavigationLink } from "./NavigationLink";
import { IconHamburger } from "./icons/IconHamburger";

export const Navigation = () => (
	<nav className="flex items-center gap-10">
		<ul className="hidden md:flex gap-5 items-center">
			<NavigationLink>
				<Link href={ROUTES.ABOUT.href}>{ROUTES.ABOUT.text}</Link>
			</NavigationLink>
			<NavigationLink>
				<Link href={ROUTES.LISTINGS.href}>{ROUTES.LISTINGS.text}</Link>
			</NavigationLink>
		</ul>
		<button>
			<IconHamburger />
		</button>
	</nav>
);
