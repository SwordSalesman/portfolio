import styled from "styled-components";

export const AppWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	::-webkit-scrollbar {
		display: none;
	}
	/* -ms-overflow-style: none; */
	scrollbar-width: none;

	/* background: linear-gradient(
		0deg,
		${({ theme }) => theme.colors.backgroundSecondary} 20%,
		transparent
	); */

	h1,
	h2,
	h3,
	h4,
	p,
	i,
	b,
	a {
		/* text-shadow: 0px 0px 4px ${({ theme }) => theme.colors.nav}99; */
		margin: 0;
	}

	a {
		transition: 0.2s;
		color: ${({ theme }) => theme.colors.link};
		&:hover {
			color: ${({ theme }) => theme.colors.linkHover};
		}
	}

	::selection {
		/* color: white; */
		background: ${({ theme }) => theme.colors.highlight};
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes delayedFadeIn {
		0%,
		40% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

export const SpacerTop = styled.div`
	height: 50px;
`;

export const SpacerBottom = styled.div`
	height: 20px;
`;

export const ContentBox = styled.div`
	position: relative;
	height: fit-content;
	display: flex;
	flex-direction: column;
	overflow-x: clip;
	gap: 50px;

	padding: 14px;
	padding-top: 40px;

	@media screen and (min-width: ${({ theme }) => theme.mediaSize.sm}px) {
		max-width: 600px;
		padding: 24px;
		padding-top: 40px;
	}
`;

export const FadeInWrapper = styled.div`
	animation: delayedFadeIn 1.6s ease-out;
`;

export const HeaderBackground = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 160px;
	width: 100%;
	z-index: -1;
	background: linear-gradient(
		90deg,
		transparent,
		${({ theme }) => theme.colors.backgroundSecondary}
	);
`;
