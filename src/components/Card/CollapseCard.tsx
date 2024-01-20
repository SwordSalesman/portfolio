import { ReactNode } from "react";
import { useCollapse } from "react-collapsed";
import styled from "styled-components";

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
				<CardDescription>{description}</CardDescription>
				<CardChildren>{children}</CardChildren>
			</CollapseContent>
		</CardWrapper>
	);
}

const CardWrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.background[400]}40;
	backdrop-filter: blur(${({ theme }) => theme.spacing.xxs}px);
	/* box-shadow: inset 0px 0px 3px 0px
			${({ theme }) => theme.colors.secondary[500]},
		0px 0px 6px 0px ${({ theme }) => theme.colors.secondary[500]}; */
	box-shadow: 0px 0px 6px 1px ${({ theme }) => theme.colors.background[400]};
	border: 1px solid ${({ theme }) => theme.colors.secondary[400]};
	border-radius: ${({ theme }) => theme.spacing.xs}px;
	padding: ${({ theme }) => theme.spacing.s}px;
	width: 90%;
	max-width: 600px;
	cursor: pointer;
	transition: 0.2s ease-out;

	&:hover {
		background-color: ${({ theme }) => theme.colors.background[500]}50;
		box-shadow: 0px 0px 6px 1px
			${({ theme }) => theme.colors.background[500]};
	}

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

const CardDescription = styled.p`
	margin: ${({ theme }) => theme.spacing.s}px 0 !important;
	padding-top: ${({ theme }) => theme.spacing.s}px !important;
	border-top: 1px solid ${({ theme }) => theme.colors.secondary[900]}60;
`;

const CardChildren = styled.div`
	position: relative;
	width: 100%;
	border-radius: ${({ theme }) => theme.spacing.xs}px;
	overflow: hidden;

	img {
		width: 100%;
	}
`;
