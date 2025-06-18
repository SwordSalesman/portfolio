import styled from "styled-components";
import { ContactLink } from "../../components/ContactLink";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoDocument, IoLogoGithub } from "react-icons/io5";
const resume = require("../../assets/LukeCannonResume.pdf");

export function Links() {
	const logoSize = 21;
	return (
		<LinksWrapper>
			<ContactLink
				label='Email'
				href='mailto:lukewzcannon@gmail.com'
				icon={<MdEmail size={logoSize} />}
			/>
			<ContactLink
				label='Resume'
				href={resume}
				icon={<IoDocument size={logoSize} />}
			/>
			<ContactLink
				label='LinkedIn'
				href='https://www.linkedin.com/in/luke-cannon-28a113168/'
				icon={<FaLinkedin size={logoSize} />}
			/>
			<ContactLink
				label='Github'
				href={"https://github.com/SwordSalesman?tab=repositories"}
				icon={<IoLogoGithub size={logoSize} />}
			/>
		</LinksWrapper>
	);
}

const LinksWrapper = styled.div`
	display: flex;
	flex-direction: column;

	padding: 16px 0;
	gap: 8px;

	@media screen and (min-width: ${({ theme }) => theme.mediaSize.sm}px) {
		flex-direction: row;
		justify-content: space-around;
		padding: 16px 0;
		flex-wrap: wrap;
		/* gap: 24px; */
	}
`;
