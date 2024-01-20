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
	background: linear-gradient(
		90deg,
		${({ theme }) => theme.colors.primary[600]} 0%,
		${({ theme }) => theme.colors.primary[500]} 30%,
		${({ theme }) => theme.colors.secondary[600]} 90%
	);
`;

const DividerGlow = styled(StyledDivider)`
	position: relative;
	top: -3px;
	filter: blur(4px) brightness(1.5);
`;
