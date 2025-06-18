import styled from "styled-components";

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<FooterWrapper>
			{/* <p>What do people put down here anyway?</p> */}
			<p>© {currentYear} this site definitely isn't copyrighted</p>
		</FooterWrapper>
	);
}

const FooterWrapper = styled.div`
	padding-top: 60px;
	padding-bottom: 60px;

	@media screen and (min-width: ${({ theme }) => theme.mediaSize.sm}px) {
		padding-bottom: 20px;
	}

	p {
		font-size: 12px;
		text-align: center;
		color: ${({ theme }) => theme.colors.primary};
	}
`;
