import { ReactNode } from "react";
import { Divider } from "../components/Divider";
import styled from "styled-components";

export const Section = (props: { title: string; children?: ReactNode }) => {
	const { title, children } = props;
	return (
		<SectionWrapper>
			<h2>{title}</h2>
			<Divider />
			<SectionContent>{children}</SectionContent>
		</SectionWrapper>
	);
};

const SectionWrapper = styled.div`
	/* margin: ${({ theme }) => theme.spacing.xl}px 0; */

	animation: delayedFadeIn 1.6s ease-out;
`;

const SectionContent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	/* align-items: center; */
	/* justify-content: center; */
`;
