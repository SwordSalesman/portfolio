import { DefaultTheme } from "styled-components";
import "styled-components";

// This enables strong typing on our theme, it needs to be updated when the theme object changes shape
declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			body: string;
			header: string;
			textColor: string;
			nav: string;
			background: string;
			backgroundSecondary: string;
			backgroundTertiary: string;
			primary: string;
			secondary: string;
			link: string;
			linkHover: string;
			highlight: string;
		};
		spacing: {
			xxs: number;
			xs: number;
			s: number;
			m: number;
			l: number;
			xl: number;
			xxl: number;
		};
		mediaSize: {
			sm: number;
			md: number;
			lg: number;
		};
	}
}

export const baseTheme = {
	spacing: {
		xxs: 4,
		xs: 8,
		s: 12,
		m: 16,
		l: 20,
		xl: 30,
		xxl: 40,
	},
	mediaSize: {
		sm: 480,
		md: 768,
		lg: 1024,
	},
};

// eslint-disable-next-line import/no-anonymous-default-export
export const theme: DefaultTheme = {
	colors: {
		body: "#000000",
		header: "#000000",
		textColor: "#000000",
		nav: "#42559a",
		background: "#f4f2f7",
		backgroundSecondary: "#e3def1",
		backgroundTertiary: "#ece9f4",
		primary: "#8b73cf",
		secondary: "#524674",
		link: "#6f57d1",
		linkHover: "#a994ff",
		highlight: "#d6c9f7b1",
	},
	...baseTheme,
};
