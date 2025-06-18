import styled from "styled-components";
import { Subtitle } from "./Subtitle";

export function Header() {
	return (
		<HeaderWrapper>
			<h1>Hi, I'm Luke</h1>
			<Subtitle />
		</HeaderWrapper>
	);
}

export const HeaderWrapper = styled.div`
	z-index: 20;
	margin-bottom: 20px;

	animation: fadeIn 0.6s ease-in-out;

	@media screen and (min-width: ${({ theme }) => theme.mediaSize.sm}px) {
	}
`;
