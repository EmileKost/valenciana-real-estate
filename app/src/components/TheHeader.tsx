"use client";

import { useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import { Navigation } from "./Navigation";

type TheHeaderProps = {
	headerText: string;
	isDetailPage?: boolean;
};

export const TheHeader = ({ headerText, isDetailPage }: TheHeaderProps) => {
	const [isScrolling, setIsScrolling] = useState<boolean>(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		latest > 30 ? setIsScrolling(true) : setIsScrolling(false);
	});

	return (
		<motion.header
			animate={{
				y: isScrolling ? "-100%" : "0",
				opacity: isScrolling ? 0 : 1,
			}}
			className="px-3 md:px-8 pt-10 pb-2 md:pt-20 md:pb-14 flex items-center justify-between w-full fixed top-0 left-0">
			<div>
				<Link href={ROUTES.HOME.href}>
					{isDetailPage ? (
						"Back"
					) : (
						<h1 className="font-text-serif text-black-primary text-xl md:text-3xl">
							{headerText}
						</h1>
					)}
				</Link>
			</div>
			<Navigation />
		</motion.header>
	);
};
