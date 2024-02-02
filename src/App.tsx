import React from "react";
import { AppWrapper, SpacerBottom, SpacerTop } from "./App.style";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { ContentBox } from "./layouts/ContentBox";
import { AppBackground } from "./layouts/AppBackground";
import { Section } from "./layouts/Section";
import { Header } from "./components/Header/Header";
import { Projects } from "./layouts/Sections/Projects";
import { Links } from "./layouts/Sections/Links";
import { Footer } from "./layouts/Footer";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<AppBackground />
			<AppWrapper>
				<ContentBox>
					<SpacerTop />
					<Header />
					<SpacerBottom />
					<Section title={"> a little about me"}>
						<p>
							I'm a developer with a passion for design and making
							cool things that feel good to use. My background is
							in Controls Engineering, and I've recently
							transitioned into the realm of Software Development.
							I'm driven by my creative hobbies (art, music, LARP,
							to name a few) and I consider making cool software
							among them. I specialize in creating cool, enjoyable
							experiences that seamlessly blend function with
							aesthetics.
						</p>
					</Section>
					<Section title={"> featured projects"}>
						<p>
							These projects aren't all technical or impressive,
							but they bring me joy so I wanted to show them here.
						</p>
						<Projects />
					</Section>
					<Section title={"> get in touch"}>
						<Links />
					</Section>
					<Footer />
				</ContentBox>
			</AppWrapper>
		</ThemeProvider>
	);
}

export default App;
