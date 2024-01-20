import { DefaultTheme } from "styled-components";
import "styled-components";

// This enables strong typing on our theme, it needs to be updated when the theme object changes shape
declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			primary: {
				400: string;
				500: string;
				600: string;
				700: string;
				800: string;
				900: string;
			};
			secondary: {
				400: string;
				500: string;
				600: string;
				700: string;
				800: string;
				900: string;
			};
			highlight: {
				300: string;
				400: string;
				500: string;
			};
			background: {
				100: string;
				200: string;
				300: string;
				400: string;
				500: string;
			};
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

// eslint-disable-next-line import/no-anonymous-default-export
export const theme: DefaultTheme = {
	colors: {
		primary: {
			400: "#901456",
			500: "#c1115a",
			600: "#e13a6a",
			700: "#e46a87",
			800: "#f4b4cb",
			900: "#ffe7ef",
		},
		secondary: {
			400: "#084f64",
			500: "#037494",
			600: "#17adad",
			700: "#53ebe4",
			800: "#7ef2ec",
			900: "#dbfffd",
		},
		highlight: {
			300: "#45004f",
			400: "#710681",
			500: "#a327bb",
		},
		background: {
			100: "#0b0514",
			200: "#0c0419",
			300: "#08173d",
			400: "#03274c",
			500: "#083664",
		},
	},
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
