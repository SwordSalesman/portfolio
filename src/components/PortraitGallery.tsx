import { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { theme } from "../theme/theme";

var portrait1 = require("../assets/portraits/portrait-1.jpg");
var portrait2 = require("../assets/portraits/portrait-2.jpg");
var portrait3 = require("../assets/portraits/portrait-3.jpg");

const portraits = [
	{
		portrait: portrait2,
		title: "The Maiden of Hearts",
		date: "May 2023",
		description: "",
	},
	{
		portrait: portrait1,
		title: "Proposal",
		date: "February 2023",
		description: "",
	},
	{
		portrait: portrait3,
		title: "The Bard's Band",
		date: "December 2023",
		description: "",
	},
];

export function PortraitGallery() {
	const [showModal, setShowModal] = useState(false);
	const [modalImageIndex, setModalImageIndex] = useState<number | null>(null);

	const handleClick = (index: number) => {
		if (window.innerWidth > theme.mediaSize.sm) {
			setShowModal(true);
			setModalImageIndex(index);
		}
	};

	const handleClose = () => {
		setShowModal(false);
	};

	const renderedPortraits = portraits.map((p, i) => {
		return (
			<PortraitWrapper onClick={() => handleClick(i)}>
				<img src={p.portrait} alt='A digitally painted portrait' />
			</PortraitWrapper>
		);
	});

	const selected =
		modalImageIndex !== null ? portraits[modalImageIndex] : null;

	return (
		<GalleryWrapper
			onClick={(e: any) => {
				e.stopPropagation();
			}}
		>
			<Modal
				isOpen={showModal}
				onRequestClose={handleClose}
				style={modalStyle}
			>
				{selected ? (
					<>
						<FullScreenPortrait>
							<img src={selected.portrait} alt='' />
						</FullScreenPortrait>
						<PortraitDescription onClick={handleClose}>
							<h2>{selected.title}</h2>
							<i>{selected.date}</i>
							<p>{selected.description}</p>
						</PortraitDescription>
					</>
				) : null}
			</Modal>
			<GalleryContent>{renderedPortraits}</GalleryContent>
		</GalleryWrapper>
	);
}

const PortraitDescription = styled.div`
	max-width: 250px;
`;

const modalStyle = {
	content: {
		animation: "fadeIn 0.3s ease-out",
		width: "fit-content",
		maxWidth: "90%",
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		padding: "0",
		border: "none",
		borderRadius: "0",
		background: "none",
		display: "flex",
		gap: "20px",
	},
	overlay: {
		background: `${theme.colors.background[100]}e0`,
		animation: "fadeIn 0.3s ease-out",
	},
};

const GalleryWrapper = styled.div`
	cursor: default;
`;

const GalleryContent = styled.div`
	display: flex;
	gap: 10px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow-x: scroll;

	@media screen and (min-width: ${({ theme }) => theme.mediaSize.sm}px) {
		flex-direction: row;
		overflow-x: scroll;
	}
`;

const PortraitWrapper = styled.div`
	overflow: hidden;
	cursor: pointer;
	border-radius: ${theme.spacing.xxs}px;

	img {
		transition: 0.2s ease-out;
		width: 100%;
	}

	@media screen and (min-width: ${({ theme }) => theme.mediaSize.sm}px) {
		&:hover {
			& img {
				transform: scale(1.07);
			}
		}
	}
`;

const FullScreenPortrait = styled.div`
	img {
		width: 100%;
		overflow: hidden;
	}
`;
