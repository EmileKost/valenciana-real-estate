import { ReactNode } from "react";

import { twMerge } from "tailwind-merge";

export const Container = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => (
	<div className={twMerge("mt-20 md:mt-36 px-3 md:px-8", className)}>
		{children}
	</div>
);
