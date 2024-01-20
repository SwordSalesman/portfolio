import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import { useState } from "react";
var titleFront = require("../../assets/name-logo-front.png");
var titleBack = require("../../assets/name-logo-back.png");

export function Title() {
	const [key, setKey] = useState(0);
	const [animation, setAnimation] = useState(
		"expandInTitle 1s cubic-bezier(0, 0.81, 0.54, 1)"
	);

	function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		setKey((key + 1) % 2);
		setAnimation("jiggleTitle 0.3s ease-out;");
	}

	return (
		<TitleWrapper onMouseDown={(event) => handleClick(event)}>
			<TitleBack
				gyroscope
				perspective={1500}
				transitionSpeed={1000}
				trackOnWindow
				tiltReverse
				tiltMaxAngleX={15}
				tiltMaxAngleY={15}
				animation={animation}
				key={key}
			>
				<TitleFront src={titleFront} />
				{/* <TitleLogo src={titleBack} /> */}
			</TitleBack>
		</TitleWrapper>
	);
}

const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	height: 25vw;
	@media screen and (min-width: ${({ theme }) => theme.mediaSize.sm}px) {
		height: 130px;
	}
`;

const TitleBack = styled(Tilt)<{ animation: string }>`
	transform-style: preserve-3d;
	transform: perspective(1000px);
	background-size: contain;
	background-repeat: no-repeat;
	background-image: url(${titleBack});

	margin: 20px auto;
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

	@keyframes jiggleTitle {
		0% {
			width: 100%;
		}
		20% {
			width: 90%;
		}
		100% {
			width: 100%;
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
