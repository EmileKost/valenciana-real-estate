import { motion } from "framer-motion";

type CustomCursorProps = {
	mouseIsDown: boolean;
	x: number;
	y: number;
};

export const CustomCursor = ({ mouseIsDown, x, y }: CustomCursorProps) => {
	return (
		<motion.div
			className="hidden md:block py-3 left-0 top-0 font-text font-light px-4 bg-white-background text-black-primary text-sm absolute rounded-full"
			animate={{
				x: x,
				y: y,
				opacity: mouseIsDown ? 1 : 0,
			}}>
			<motion.span>Click for full screen</motion.span>
		</motion.div>
	);
};
