import { ReactNode } from "react";

type ListingListProps = {
	children: ReactNode;
};

export const ListingsList = ({ children }: ListingListProps) => (
	<div className="w-full pl-3 md:pl-8 flex flex-col">{children}</div>
);
