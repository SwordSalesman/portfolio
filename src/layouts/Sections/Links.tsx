import styled from "styled-components";
import { ContactLink } from "../../components/ContactLink";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoDocument } from "react-icons/io5";
const resume = require("../../assets/LukeCannonResume.pdf");

export function Links() {
	return (
		<LinksWrapper>
			<ContactLink
				label='LinkedIn'
				href='https://www.linkedin.com/in/luke-cannon-28a113168/'
				icon={<FaLinkedin size={24} />}
			/>
			<ContactLink
				label='Email'
				copy='lukewzcannon@gmail.com'
				icon={<MdEmail size={24} />}
			/>
			<ContactLink
				label='Resume'
				href={resume}
				icon={<IoDocument size={24} />}
			/>
		</LinksWrapper>
	);
}

const LinksWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	padding: ${({ theme }) => theme.spacing.s}px;
	gap: ${({ theme }) => theme.spacing.xxs}px;

	@media screen and (min-width: ${({ theme }) => theme.mediaSize.sm}px) {
		flex-direction: row;
		gap: ${({ theme }) => theme.spacing.m}px;
		justify-content: center;
	}
`;
