import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
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
	},
	plugins: [],
};
export default config;

// TODO: FONTS
// Bacasime Antique (logo)
// Gotham (primary)
// Monstserrat (secondary)
