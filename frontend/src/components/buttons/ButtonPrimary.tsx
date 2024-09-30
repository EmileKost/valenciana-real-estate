import { ReactNode } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type ButtonPrimaryProps = {
	href: string;
	isDisabled?: boolean;
	children: ReactNode;
	className?: string;
};

export const ButtonPrimary = ({
	href,
	isDisabled,
	children,
	className,
}: ButtonPrimaryProps) => (
	<Link
		href={href}
		className={twMerge(
			"font-text px-10 py-4 border w-fit border-black-primary hover:bg-black-primary hover:text-white-primary transition-all",
			isDisabled
				? "cursor-not-allowed opacity-70"
				: "cursor-pointer opacity-100",
			className
		)}>
		{children}
	</Link>
);

// TODO: Think of cool complex hover state
