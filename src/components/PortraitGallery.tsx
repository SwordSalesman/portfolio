import { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { theme } from "../theme/theme";

var portrait1 = require("../assets/portraits/portrait-1.jpg");
var portrait2 = require("../assets/portraits/portrait-2.jpg");
var portrait3 = require("../assets/portraits/portrait-3.jpg");

const portraits = [portrait2, portrait1, portrait3];

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
				<img src={p} alt='A digitally painted portrait' />
			</PortraitWrapper>
		);
	});

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
				<FullScreenPortrait>
					{modalImageIndex !== null ? (
						<img src={portraits[modalImageIndex]} alt='' />
					) : null}
				</FullScreenPortrait>
			</Modal>
			<GalleryContent>{renderedPortraits}</GalleryContent>
		</GalleryWrapper>
	);
}

const modalStyle = {
	content: {
		animation: "fadeIn 0.3s ease-out",
		width: "fit-content",
		maxWidth: "95%",
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
	},
	overlay: {
		background: `${theme.colors.background[100]}c0`,
		animation: "fadeIn 0.3s ease-out",
	},
};

const GalleryWrapper = styled.div`
	position: relative;
`;

const GalleryContent = styled.div`
	display: flex;
	gap: 10px;
	flex-direction: column;
	overflow-x: scroll;

	@media screen and (min-width: ${({ theme }) => theme.mediaSize.sm}px) {
		flex-direction: row;
		overflow-x: scroll;
	}
`;

const PortraitWrapper = styled.div`
	overflow: hidden;
	cursor: pointer;

	img {
		transition: 0.2s ease-out;
	}

	&:hover {
		& img {
			transform: scale(1.08);
		}
	}
`;

const FullScreenPortrait = styled.div`
	img {
		width: 100%;
		overflow: hidden;
	}
`;
