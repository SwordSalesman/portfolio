import { ReactNode, useEffect, useState } from "react";
import { useCollapse } from "react-collapsed";
import styled from "styled-components";
import { blurCard, text } from "../../theme/presets";
import TypewriterComponent from "typewriter-effect";

const typewriterEffect = false;

export function CollapseCard(props: {
	title: string;
	headkicker: string;
	description: string;
	date: string;
	link?: string;
	children?: ReactNode;
}) {
	const { title, headkicker, description, date, link, children } = props;
	const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
	const [descKey, setDescKey] = useState(0);

	useEffect(() => {
		setDescKey((descKey + 1) % 2);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isExpanded]);

	return (
		<CardWrapper {...getToggleProps()}>
			<CardHead>
				<div>
					<h3>{title}</h3>
					<CardDate>{date}</CardDate>
				</div>
				{link ? (
					<div>
						<CardLink
							href={link}
							target='_blank'
							rel='noopener noreferrer'
							onClick={(e) => {
								e.stopPropagation();
							}}
						>
							link
						</CardLink>
					</div>
				) : (
					<></>
				)}
			</CardHead>
			<CardHeadkicker>{headkicker}</CardHeadkicker>
			<CollapseContent {...getCollapseProps()}>
				<CardDescription>
					{typewriterEffect ? (
						<TypewriterComponent
							key={descKey}
							onInit={(w) => {
								w.changeDelay(10)
									.typeString(description)
									.start();
							}}
						/>
					) : (
						<p>{description}</p>
					)}
				</CardDescription>
				<CardChildren>{children}</CardChildren>
			</CollapseContent>
		</CardWrapper>
	);
}

const CardWrapper = styled.div`
	${blurCard}

	width: 90%;
	max-width: 600px;
	cursor: pointer;

	::selection {
		color: ${({ theme }) => theme.colors.secondary[900]};
		background: ${({ theme }) => theme.colors.secondary[500]};
	}
`;

const CollapseContent = styled.div``;

const CardHead = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	margin-bottom: ${({ theme }) => theme.spacing.xs}px;
`;

const CardDate = styled.i`
	color: ${({ theme }) => theme.colors.primary[600]};
	/* text-shadow: 0px 0px 4px ${({ theme }) =>
		theme.colors.primary[900]}90; */
	text-shadow: none !important;
`;

const CardLink = styled.a`
	padding: ${({ theme }) => theme.spacing.xs}px;
`;

const CardHeadkicker = styled.p``;

const CardDescription = styled.div`
	margin: ${({ theme }) => theme.spacing.s}px 0 !important;
	padding-top: ${({ theme }) => theme.spacing.s}px !important;
	border-top: 1px solid ${({ theme }) => theme.colors.secondary[900]}60;
	${text}
`;

const CardChildren = styled.div`
	position: relative;
	/* border-radius: ${({ theme }) => theme.spacing.xs}px; */
	overflow-x: hidden;
	width: 100%;
	display: flex;
	justify-content: center;
`;
