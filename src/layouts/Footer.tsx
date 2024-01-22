import styled from "styled-components";

export function Footer() {
	return (
		<FooterWrapper>
			{/* <p>What do people put down here anyway?</p> */}
			<p>© 2024 this site definitely isn't copyrighted</p>
		</FooterWrapper>
	);
}

const FooterWrapper = styled.div`
	padding-top: 60px;
	padding-bottom: 40px;

	p {
		font-size: 12px;
		text-align: center;
		color: ${({ theme }) => theme.colors.secondary[700]};
		text-shadow: none !important;
		opacity: 0.6;
	}
`;
