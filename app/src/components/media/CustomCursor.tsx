import { motion } from "framer-motion";

type CustomCursorProps = {
	mouseIsDown: boolean;
	x: number;
	y: number;
};

export const CustomCursor = ({ mouseIsDown, x, y }: CustomCursorProps) => {
	const animationVariants = {
		initial: {
			x: x,
			y: y,
			scaleX: 0,
			scaleY: 0,
			opacity: 0,
		},
		animate: {
			x: x,
			y: y,
			scaleX: [0, 1, 1],
			scaleY: [0, 1, 1],
			opacity: [0, 1, 1],
			transition: {
				type: "spring",
				stiffness: 1000,
				damping: 150,
			},
		},
	};

	return (
		<motion.div
			className="hidden md:block py-3 left-0 top-0 font-text font-light px-4 bg-white-background text-black-primary text-sm absolute rounded-full z-40"
			variants={animationVariants}
			initial={"initial"}
			animate={mouseIsDown ? "animate" : "intial"}>
			<motion.span
				className="whitespace-nowrap"
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				transition={{
					delay: 0.2,
				}}>
				Click for full screen
			</motion.span>
		</motion.div>
	);
};

// TODO: Fix transition
