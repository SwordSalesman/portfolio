import styled from "styled-components";
import { ReactNode } from "react";

export function ContentBox(props: { children?: ReactNode }) {
	const { children } = props;

	return <ContentBoxWrapper>{children}</ContentBoxWrapper>;
}

const ContentBoxWrapper = styled.div`
	height: fit-content;
	max-width: 900px;

	display: flex;
	flex-direction: column;
	overflow-x: hidden;
	gap: 50px;

	padding: ${({ theme }) => theme.spacing.s}px
		${({ theme }) => theme.spacing.s}px 80px
		${({ theme }) => theme.spacing.s}px;
	@media screen and (min-width: ${({ theme }) => theme.mediaSize.sm}px) {
		padding: ${({ theme }) => theme.spacing.m}px
			${({ theme }) => theme.spacing.xl}px;
	}
	@media screen and (min-width: ${({ theme }) => theme.mediaSize.md}px) {
		padding: ${({ theme }) => theme.spacing.l}px
			${({ theme }) => theme.spacing.xxl}px;
		width: 85%;
	}
`;

const ContentFadeBottom = styled.div`
	height: 30px;
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	background: linear-gradient(
		0deg,
		${({ theme }) => theme.colors.background[100]} 0%,
		transparent 100%
	);
`;
