import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			boxShadow: {
				"card-shadow": "0px 4px 15px 0px #0000001A",
			},
			colors: {
				dark: "#030A1A",
				primary: "#3062f9",
				"primary-dark": "#254dcc",
				"gray-10": "#fafafa",
				"gray-20": "#f2f5fb",
				"gray-30": "#dfdfdf",
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
		},
	},
	plugins: [],
};
export default config;
