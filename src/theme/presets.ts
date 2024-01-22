import { css } from "styled-components";
import { theme } from "./theme";

export const blurCard = css`
	background-color: ${theme.colors.background[400]}40;
	backdrop-filter: blur(${theme.spacing.xxs}px);
	-webkit-backdrop-filter: blur(${theme.spacing.xxs}px);
	box-shadow: 0px 0px 6px 1px ${theme.colors.background[400]};
	border: 1px solid ${theme.colors.secondary[400]};
	border-radius: ${theme.spacing.xs}px;
	padding: ${theme.spacing.s}px;

	transition: 0.2s ease-out;
	&:hover {
		background-color: ${theme.colors.background[500]}50;
		box-shadow: 0px 0px 6px 1px ${theme.colors.background[500]};
	}
`;

export const text = css`
	color: ${theme.colors.secondary[900]};
	text-shadow: 0px 0px 4px ${theme.colors.secondary[900]}99;
`;
