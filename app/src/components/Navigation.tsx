import { ROUTES } from "@/constants/routes";
import Link from "next/link";

import { IconHamburger } from "./icons/IconHamburger";

export const Navigation = () => (
	<nav className="flex items-center gap-10">
		<ul className="hidden md:flex gap-5 items-center font-text text-xl">
			<li>
				<Link href={ROUTES.ABOUT.href}>{ROUTES.ABOUT.text}</Link>
			</li>
			<li>
				<Link href={ROUTES.LISTINGS.href}>{ROUTES.LISTINGS.text}</Link>
			</li>
		</ul>
		<button>
			<IconHamburger />
		</button>
	</nav>
);
