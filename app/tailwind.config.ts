import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			heading: "var(--font-heading-sans)",
			text: "var(--font-text-sans)",
			"text-serif": "var(--font-text-serif)",
		},
		extend: {
			colors: {
				white: {
					background: "#DFDFDF",
					primary: "#FFFFFF",
				},
				black: {
					primary: "#000000",
					secondary: "#101010",
				},
			},
		},
		zIndex: {
			max: "9999",
		},
	},
	plugins: [],
};
export default config;

// TODO: FONTS
// Bacasime Antique (logo)
// Gotham (primary)
// Monstserrat (secondary)
