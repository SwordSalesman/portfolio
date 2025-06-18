import styled from "styled-components";

export function RollingGrid() {
	return (
		<Grid>
			<GridTopMask />
			<GridRoundMask />
			<GridLines />
		</Grid>
	);
}

const Grid = styled.div`
	position: relative;
	bottom: -30%;
	overflow: hidden;
	width: 100%;
	height: 70%;
	-webkit-perspective: 52vh;
	perspective: 52vh;

	/* @media screen and (max-width: ${({ theme }) => theme.mediaSize.sm}px) {
		display: none;
	} */
`;

const GridTopMask = styled.div`
	z-index: 0;
	position: absolute;
	width: 100%;
	height: 100%;
`;

const GridRoundMask = styled.div`
	z-index: 0;
	position: absolute;
	width: 100%;
	height: 100%;
`;

const GridLines = styled.div`
	z-index: -10;
	position: absolute;
	width: 100%;
	height: 200%;
	background-size: 20px 20px;
	background-repeat: repeat;
	transform-origin: 100% 0 0;
	animation: play 30s linear infinite, fadeIn 1.2s ease-out;

	@keyframes play {
		0% {
			transform: rotateX(45deg) translateY(-45%);
		}
		100% {
			transform: rotateX(45deg) translateY(0);
		}
	}
`;
