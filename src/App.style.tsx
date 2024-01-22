import styled from "styled-components";

export const AppWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	overflow: scroll;

	::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;

	color: ${({ theme }) => theme.colors.secondary[900]};

	h1,
	h2,
	h3,
	h4,
	p,
	i,
	b,
	a {
		text-shadow: 0px 0px 4px ${({ theme }) => theme.colors.secondary[900]}99;
		margin: 0;
	}

	a {
		color: ${({ theme }) => theme.colors.secondary[700]};

		&:hover {
			color: ${({ theme }) => theme.colors.secondary[900]};
		}
	}

	::selection {
		color: ${({ theme }) => theme.colors.secondary[900]};
		background: ${({ theme }) => theme.colors.primary[500]};
	}

	@keyframes downExpandFadeIn {
		0% {
			transform: scaleY(0.05) opacity 0;
		}
		/* 60% {
			transform: scaleY(0.8) opacity 0.8;
		} */
		100% {
			transform: scaleY(1) opacity 1;
		}
	}

	@keyframes monitorExpandIn {
		0% {
			transform: scaleY(0.05) scaleX(0);
		}
		20% {
			transform: scaleY(0.05) scaleX(0);
		}
		60% {
			transform: scaleY(0.05) scaleX(1.2);
		}
		100% {
			transform: scaleY(1) scaleX(1);
		}
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
