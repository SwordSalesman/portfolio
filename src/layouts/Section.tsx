import { ReactNode } from "react";
import styled from "styled-components";

export const Section = (props: { title: string; children?: ReactNode }) => {
	const { title, children } = props;
	return (
		<SectionWrapper>
			<SectionTitle>{title}</SectionTitle>
			<SectionContent>{children}</SectionContent>
		</SectionWrapper>
	);
};

const SectionWrapper = styled.div`
	margin-bottom: 50px;
`;

const SectionTitle = styled.h2`
	/* font-family: "mono", monospace; */
	/* color: ${({ theme }) => theme.colors.secondary}; */
`;

const SectionContent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	position: relative;
	/* align-items: center; */
	/* justify-content: center; */
`;
