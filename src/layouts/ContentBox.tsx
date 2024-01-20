import styled from "styled-components";
import { ReactNode } from "react";

export function ContentBox(props: { children?: ReactNode }) {
	const { children } = props;

	return (
		<ContentBoxWrapper>
			<ContentScroll>{children}</ContentScroll>
			{/* <ContentFadeBottom /> */}
		</ContentBoxWrapper>
	);
}

const ContentBoxWrapper = styled.div`
	max-width: 900px;
	height: 100%;
	overflow: scroll;

	padding: 0 ${({ theme }) => theme.spacing.s}px;
	@media screen and (min-width: ${({ theme }) => theme.mediaSize.sm}px) {
		padding: 0 ${({ theme }) => theme.spacing.xl}px;
	}
	@media screen and (min-width: ${({ theme }) => theme.mediaSize.md}px) {
		padding: 0 ${({ theme }) => theme.spacing.xxl}px;
		width: 85%;
	}
`;

const ContentScroll = styled.div`
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	overflow-x: hidden;
	gap: 50px;
	/* padding: 10px; */
	/* padding-bottom: 160px; */
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
