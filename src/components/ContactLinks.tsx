import IconLink from "./IconLink";
import styled from "styled-components";
import { GrLinkedin, GrMail } from "react-icons/gr";
import { IoDocumentSharp } from "react-icons/io5";
import pdf from "../assets/LukeCannonResume.pdf";

const Contacts = styled.div`
  display: flex;
  justify-content: space-around;
  color: white;
`;

function ContactLinks() {
  return (
    <Contacts>
      <IconLink
        icon={<GrLinkedin />}
        link="https://www.linkedin.com/in/luke-cannon-28a113168/"
      >
        LinkedIn
      </IconLink>
      <IconLink icon={<GrMail />} copy="lukewzcannon@gmail.com">
        Mail
      </IconLink>
      <IconLink icon={<IoDocumentSharp />} link={pdf}>
        Resume
      </IconLink>
    </Contacts>
  );
}

export default ContactLinks;
