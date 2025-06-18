import styled from "styled-components";
import Tilt from "react-parallax-tilt";
var titleFront = require("../../assets/name-logo-front.png");
var titleBack = require("../../assets/name-logo-back.png");

export function Title() {
	return (
		<TitleWrapper>
			<TitleBack
				perspective={1500}
				transitionSpeed={1000}
				trackOnWindow
				tiltReverse
				// tiltMaxAngleX={15}
				// tiltMaxAngleY={15}
				animation={"expandInTitle 1s cubic-bezier(0, 0.81, 0.54, 1)"}
			>
				<TitleFront src={titleFront} />
			</TitleBack>
		</TitleWrapper>
	);
}

const TitleWrapper = styled.div`
	height: 25vw;
	@media screen and (min-width: ${({ theme }) => theme.mediaSize.sm}px) {
		height: 130px;
	}
	z-index: 100;
`;

const TitleBack = styled(Tilt)<{ animation: string }>`
	transform-style: preserve-3d;
	transform: perspective(1000px);
	background-size: contain;
	background-repeat: no-repeat;
	background-image: url(${titleBack});

	margin: 0px auto;
	width: 100%;
	max-width: 520px;

	user-select: none;
	-moz-user-select: none;
	-webkit-user-drag: none;
	-webkit-user-select: none;
	-ms-user-select: none;

	animation: ${({ animation }) => animation};

	@keyframes expandInTitle {
		0% {
			transform: scaleY(0.05) scaleX(0) perspective(1000px);
		}
		20% {
			transform: scaleY(0.05) scaleX(0) perspective(1000px);
		}
		60% {
			transform: scaleY(0.05) scaleX(1.2) perspective(1000px);
		}
		100% {
			transform: scaleY(1) scaleX(1) perspective(1000px);
		}
	}
`;

const TitleFront = styled.img`
	transform: translateZ(30px);
	width: 100%;

	user-select: none;
	-moz-user-select: none;
	-webkit-user-drag: none;
	-webkit-user-select: none;
	-ms-user-select: none;
`;
