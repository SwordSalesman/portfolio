import styled from "styled-components";
import TypewriterComponent from "typewriter-effect";

export function Subtitle() {
	return (
		<StyledTypewriter>
			<TypewriterComponent
				onInit={(w) => {
					w.changeDelay(40)

						.changeDeleteSpeed(20)
						.pauseFor(1000)

						.typeString(`I'm a software engineer`)
						.pauseFor(1200)
						.deleteChars(18)
						.pauseFor(300)

						.typeString(` frontend `)
						.pauseFor(600)
						.typeString(`guy`)
						.pauseFor(1000)
						.deleteChars(13)

						.pauseFor(800)
						.typeString(`n enthusiast`)
						.pauseFor(500)
						.changeDelay(200)
						.typeString(`..?`)
						.changeDelay(60)
						.pauseFor(700)
						.deleteChars(20)
						.pauseFor(200)

						.typeString(`This is my portfolio`)
						.start();
				}}
			/>
		</StyledTypewriter>
	);
}

const StyledTypewriter = styled.div`
	/* text-align: center; */

	animation: hideTypewriterAtStart 0.9s;

	z-index: 1;
	position: sticky;
	top: 0;

	font-family: monospace;
	font-size: 0.8rem;

	color: ${({ theme }) => theme.colors.secondary};
	/* height: 1em; */

	@keyframes hideTypewriterAtStart {
		0%,
		99% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;
