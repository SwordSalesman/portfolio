import { ReactNode } from "react";
import styled from "styled-components";

export function ContactLink(props: {
	label: string;
	href?: string;
	icon?: ReactNode;
}) {
	const { label, href, icon } = props;

	return (
		<LinkWrapper href={href} target='_blank' rel='noopener noreferrer'>
			{icon ?? null}
			<p>{label}</p>
		</LinkWrapper>
	);
}

const LinkWrapper = styled.a`
	position: relative;
	display: flex;
	align-items: center;
	gap: 7px;

	padding: 6px;
	font-size: 1.2rem;

	@media screen and (min-width: ${({ theme }) => theme.mediaSize.sm}px) {
		font-size: 1rem;
		padding: 10px 0;
	}
`;
