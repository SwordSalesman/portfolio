import { ReactNode, useEffect, useState } from "react";
import { useCollapse } from "react-collapsed";
import styled from "styled-components";
import { text } from "../../theme/presets";
import TypewriterComponent from "typewriter-effect";
import { FaExternalLinkAlt } from "react-icons/fa";

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
					<h3 style={{ textTransform: "uppercase" }}>{title}</h3>
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
							<FaExternalLinkAlt />
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
	background-color: ${({ theme }) => theme.colors.backgroundTertiary};
	border-radius: ${({ theme }) => theme.spacing.xs}px;
	padding: ${({ theme }) => theme.spacing.s}px;

	transition: 0.2s ease-out;
	&:hover {
		background-color: ${({ theme }) => theme.colors.backgroundSecondary};
	}

	position: relative;
	overflow: hidden;
	width: 95%;
	max-width: 600px;
	cursor: pointer;
`;

const CollapseContent = styled.div``;

const CardHead = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	/* margin-bottom: ${({ theme }) => theme.spacing.xs}px; */
`;

const CardDate = styled.p`
	color: ${({ theme }) => theme.colors.primary};
	text-shadow: none !important;
	font-family: "mono", monospace;
`;

const CardLink = styled.a`
	padding: ${({ theme }) => theme.spacing.xs}px;
`;

const CardHeadkicker = styled.p`
	opacity: 0.8;
	font-style: italic;
	/* font-size: 0.9rem; */
`;

const CardDescription = styled.div`
	margin: ${({ theme }) => theme.spacing.s}px 0 !important;
	padding: 10px 0 !important;
	/* border-top: 1px solid ${({ theme }) => theme.colors.primary}60; */
	${text}
`;

const CardChildren = styled.div`
	position: relative;
	overflow-x: hidden;
	width: 100%;
	display: flex;
	justify-content: center;
`;
