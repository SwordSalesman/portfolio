import styled from "styled-components";
import TypewriterComponent from "typewriter-effect";

export function Subtitle() {
	return (
		<StyledTypewriter>
			<TypewriterComponent
				onInit={(w) => {
					w.changeDelay(60)
						.changeDeleteSpeed(20)
						.pauseFor(1000)
						.typeString(`Hey, I'm Luke`)
						.pauseFor(400)
						.typeString(` - I'm a software engineer`)
						.pauseFor(1200)
						.deleteChars(17)
						.pauseFor(300)
						.typeString(`front end developer`)
						.pauseFor(700)
						.deleteChars(20)
						.pauseFor(600)
						.typeString(`n enthusiast`)
						.pauseFor(500)
						.changeDelay(200)
						.typeString(`..?`)
						.changeDelay(60)
						.pauseFor(700)
						.deleteChars(20)
						.pauseFor(200)
						.typeString(`this is my portfolio`)
						.start();
				}}
			/>
		</StyledTypewriter>
	);
}

const StyledTypewriter = styled.div`
	text-shadow: 0px 0px 5px ${({ theme }) => theme.colors.secondary[900]}90;
	text-align: center;

	animation: hideTypewriterAtStart 0.9s;

	height: 1em;

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
