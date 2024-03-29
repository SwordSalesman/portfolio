import styled from "styled-components";
import { RollingGrid } from "./RollingGrid";

export function AppBackground() {
	return (
		<AppBackgroundWrapper>
			<Noise />
			<RollingGrid />
		</AppBackgroundWrapper>
	);
}

const AppBackgroundWrapper = styled.div`
	height: 100svh;
	width: 100svw;
	position: fixed;
	z-index: -10;
	// This stops at 30% because the rolling grid is 70vh high
	background: linear-gradient(
		180deg,
		${({ theme }) => theme.colors.background[500]} 0%,
		${({ theme }) => theme.colors.background[200]} 25%,
		${({ theme }) => theme.colors.background[100]} 30%
	);
`;

const Noise = styled.div`
	z-index: 1;
	width: 100%;
	height: 100%;
	opacity: 0.3;
	mix-blend-mode: soft-light;
	background-image: url("https://steamuserimages-a.akamaihd.net/ugc/420313597233739498/4F1AF2ECEC1551326C604AE212055D6ED8D03FB4/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false");
	position: absolute;
	background-size: 25vw;
	top: 0%;
	left: 0%;

	/* @media screen and (max-width: ${({ theme }) => theme.mediaSize.sm}px) {
		display: none;
	} */
`;
