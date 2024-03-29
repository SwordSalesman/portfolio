import { ReactNode, useRef, useState } from "react";
import styled from "styled-components";
import { blurCard } from "../theme/presets";

export function ContactLink(props: {
	label: string;
	href?: string;
	copy?: string;
	icon?: ReactNode;
}) {
	const { label, href, copy, icon } = props;
	const [alertKey, setAlertKey] = useState(0);
	const [animation, setAnimation] = useState("");

	const handleClick = () => {
		if (copy) {
			navigator.clipboard.writeText(copy);
			setAlertKey(alertKey + 1);
			setAnimation("fadeAway 1.5s ease-out");
		}
	};

	const internal = (
		<>
			{icon ?? null}
			<p>{label}</p>
		</>
	);

	return (
		<>
			{href ? (
				<LinkWrapper
					href={href}
					target='_blank'
					rel='noopener noreferrer'
				>
					{internal}
				</LinkWrapper>
			) : (
				<ButtonWrapper onClick={handleClick}>
					{internal}
					<CopiedAlert key={alertKey} animation={animation}>
						<p>Copied {copy}</p>
					</CopiedAlert>
				</ButtonWrapper>
			)}
		</>
	);
}

const LinkWrapper = styled.a`
	position: relative;
	font-size: 18px;
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.spacing.xxs}px;
	padding: ${({ theme }) => theme.spacing.xs}px;
`;

const ButtonWrapper = styled.button`
	position: relative;
	font-size: 18px;
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.spacing.xxs}px;
	padding: ${({ theme }) => theme.spacing.xs}px;
	background: none;
	border: none;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.secondary[700]};
	&:hover {
		color: ${({ theme }) => theme.colors.secondary[900]};
	}
`;

const CopiedAlert = styled.div<{ animation: string }>`
	position: absolute;
	z-index: 10;

	${blurCard}

	font-family: monospace;

	left: 50%;
	translate: -50%;
	font-size: 1rem;
	opacity: 0;
	pointer-events: none;

	animation: ${({ animation }) => animation};
	@keyframes fadeAway {
		0%,
		100% {
			opacity: 0;
		}
		10%,
		80% {
			opacity: 1;
		}
	}
`;
