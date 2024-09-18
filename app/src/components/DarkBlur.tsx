import { twMerge } from "tailwind-merge";

export const DarkBlur = ({ opacity }: { opacity: number }) => (
	<div
		className={twMerge(
			"w-full h-full absolute top-0 left-0 z-40 bg-black-primary",
			`opacity-${opacity}`
		)}
	/>
);
