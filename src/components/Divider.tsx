import styled from "styled-components";

export function Divider() {
	return (
		<DividerWrapper>
			<StyledDivider />
			<DividerGlow />
		</DividerWrapper>
	);
}

const DividerWrapper = styled.div`
	position: relative;
	width: 100%;
	margin: ${({ theme }) => theme.spacing.xs}px 0;
`;

const StyledDivider = styled.div`
	height: 3px;
	border-radius: 2px;
	filter: brightness(1.5);
`;

const DividerGlow = styled(StyledDivider)`
	position: relative;
	top: -3px;
	filter: blur(4px) brightness(1.5);
`;
