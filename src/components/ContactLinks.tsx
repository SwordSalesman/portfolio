import IconLink from "./IconLink";
import styled from "styled-components";
import { GrLinkedin, GrMail } from "react-icons/gr";
import { IoDocumentSharp } from "react-icons/io5";
import pdf from "../assets/LukeCannonResume.pdf";

function ContactLinks() {
  return (
    <Contacts>
      <ContactWrapper>
        <IconLink
          icon={<GrLinkedin />}
          link="https://www.linkedin.com/in/luke-cannon-28a113168/"
        >
          LinkedIn
        </IconLink>
      </ContactWrapper>
      <ContactWrapper>
        <IconLink icon={<GrMail />} copy="lukewzcannon@gmail.com">
          Mail
        </IconLink>
      </ContactWrapper>
      <ContactWrapper>
        <IconLink icon={<IoDocumentSharp />} link={pdf}>
          Resume
        </IconLink>
      </ContactWrapper>
    </Contacts>
  );
}

export default ContactLinks;

const Contacts = styled.div`
  display: flex;
  justify-content: center;
  color: white;
`;

const ContactWrapper = styled.div`
  margin-right: 1.5rem;
  margin-left: 1.5rem;
`;
