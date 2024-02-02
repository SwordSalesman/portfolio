import styled from "styled-components";
import { Title } from "./Title";
import { Subtitle } from "./Subtitle";

export function Header() {
	return (
		<>
			{/* <HeaderBackground /> */}
			<HeaderWrapper>
				<Title />
				<Subtitle />
			</HeaderWrapper>
		</>
	);
}

export const HeaderBackground = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 200px;
	width: 100%;
	z-index: 10;
	background: linear-gradient(
		180deg,
		${({ theme }) => theme.colors.background[500]} 20%,
		transparent
	);
	/* border: 1px red solid; */
`;

export const HeaderWrapper = styled.div`
	z-index: 20;
	/* display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	position: relative; */

	/* padding: 100px 0 70px 0; */
	@media screen and (min-width: ${({ theme }) => theme.mediaSize.sm}px) {
		/* padding: 100px 0; */
	}
`;
