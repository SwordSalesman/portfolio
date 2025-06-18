import {
	AppWrapper,
	ContentBox,
	FadeInWrapper,
	HeaderBackground,
} from "./App.style";
import { ThemeProvider } from "styled-components";
import { Section } from "./layouts/Section";
import { Header } from "./components/Header/Header";
import { Projects } from "./layouts/Sections/Projects";
import { Links } from "./layouts/Sections/Links";
import { Footer } from "./layouts/Footer";
import { theme } from "./theme/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			{/* <AppBackground /> */}
			<AppWrapper>
				<HeaderBackground />
				<ContentBox>
					<Header />
					<FadeInWrapper>
						<Section title={"About me"}>
							<p>
								I'm a developer with a passion for design and
								making cool things that feel good to use. I'm
								driven by my creative hobbies (art, music, LARP,
								to name a few) and I consider making cool
								software among them. I'm excited to grow, and to
								express my skills however I can.
							</p>
						</Section>
						<Section title={"Featured projects"}>
							<p>
								A selection of projects—some related to software
								development, others less so—that I'm
								particularly proud of. If you're interested in
								my professional work you'll find it in my resume
								below.
							</p>
							<Projects />
						</Section>
						<Section title={"Get in touch"}>
							<Links />
						</Section>
						<Footer />
					</FadeInWrapper>
				</ContentBox>
			</AppWrapper>
		</ThemeProvider>
	);
}

export default App;
