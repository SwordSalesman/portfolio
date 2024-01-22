import styled from "styled-components";

export function RollingGrid() {
	return (
		<Grid>
			<GridMask />
			<GridLines />
		</Grid>
	);
}

const Grid = styled.div`
	position: fixed;
	left: 0%;
	top: auto;
	right: 0%;
	bottom: 0%;
	overflow: hidden;
	width: 100%;
	height: 70vh;
	-webkit-perspective: 52vh;
	perspective: 52vh;
	background: ${({ theme }) => theme.colors.background[100]};
`;

const GridMask = styled.div`
	z-index: -9;
	position: absolute;
	width: 100%;
	height: 100%;

	background: linear-gradient(
			180deg,
			${({ theme }) => theme.colors.background[100]},
			transparent 30%
		),
		radial-gradient(
			circle farthest-corner at 50% 0%,
			transparent 60%,
			${({ theme }) => theme.colors.background[100]} 90%
		);
`;

const GridLines = styled.div`
	z-index: -10;
	position: absolute;
	width: 100%;
	height: 200%;

	/* rgba(111, 207, 151, 0.4) */
	background: linear-gradient(
			to right,
			${({ theme }) => theme.colors.primary[500]} 1px,
			transparent 0
		),
		linear-gradient(
			to bottom,
			${({ theme }) => theme.colors.primary[500]} 1px,
			transparent 0
		);
	background-size: 3vh 3vh;
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
