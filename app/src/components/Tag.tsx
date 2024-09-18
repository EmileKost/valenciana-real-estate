import { ReactNode } from "react";

import { twMerge } from "tailwind-merge";

type TagProps = {
	children: ReactNode;
	className?: string;
};

export const Tag = ({ children, className }: TagProps) => {
	return (
		<div
			className={twMerge(
				"bg-black-primary text-white-primary py-3 px-5 rounded-xl text-sm font-[500] font-heading",
				className
			)}>
			{children}
		</div>
	);
};
