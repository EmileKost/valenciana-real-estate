import { ReactNode } from "react";

type ListingListProps = {
	children: ReactNode;
};

export const ListingsList = ({ children }: ListingListProps) => (
	<div className="w-full flex flex-col gap-2 md:gap-12">{children}</div>
);
