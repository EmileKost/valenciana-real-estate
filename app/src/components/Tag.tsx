import { ReactNode } from "react";

type TagProps = {
	children: ReactNode;
};

export const Tag = ({ children }: TagProps) => {
	return (
		<div className="bg-black-primary text-white-primary py-3 px-5 rounded-xl text-sm font-[500] font-heading">
			{children}
		</div>
	);
};
