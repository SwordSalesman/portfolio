import styled from "styled-components";
import { Title } from "./Title";
import { Subtitle } from "./Subtitle";

export function Header() {
	return (
		<HeaderWrapper>
			<Title />
			<Subtitle />
		</HeaderWrapper>
	);
}

export const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	overflow: visible;

	padding: 100px 0 70px 0;
	@media screen and (min-width: ${({ theme }) => theme.mediaSize.sm}px) {
		padding: 100px 0;
	}
`;
