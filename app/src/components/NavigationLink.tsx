import { ReactNode } from "react";

type NavigationLinkProps = {
	children: ReactNode;
};

export const NavigationLink = ({ children }: NavigationLinkProps) => (
	<li className="font-text text-xl relative before:content-[''] before:h-[1px] before:w-0 hover:before:w-[70%] before:absolute before:left-0 before:bottom-0 before:bg-black-primary before:transition-all">
		{children}
	</li>
);
