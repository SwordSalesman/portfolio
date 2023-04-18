import { ReactNode } from "react";
import styled from "styled-components";
import IconLink from "./IconLink";
import { HiExternalLink, HiChevronDown } from "react-icons/hi";

interface CardProps {
  title: string;
  link?: string;
  description: string;
  icons?: ReactNode;
  media?: ReactNode;
}

const ProjectCard = (props: CardProps) => {
  return (
    <ProjectCardWrapper>
      <TextWrapper>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </TextWrapper>
      <LinkWrapper>
        {props.link && <IconLink link={props.link} icon={<HiExternalLink />} />}
        {props.media && <IconLink icon={<HiChevronDown />} />}
      </LinkWrapper>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;

const ProjectCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: rgb(230, 219, 238);
  background: linear-gradient(
    90deg,
    rgba(230, 219, 238, 0.2007177871148459) 0%,
    rgba(198, 190, 221, 0.08307072829131656) 100%
  );
  border-radius: 0.5rem;
  margin: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.2rem;
  text-align: left;
  transition-duration: 0.2s;

  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;

const Title = styled.div`
  font-size: 1.3em;
  line-height: 1em;
  margin-bottom: 0.5em;
  font-family: "Times New Roman", Times, serif;
`;

const Description = styled.div`
  line-height: 1.1rem;
  color: rgb(255, 255, 255, 0.7);
`;

const TextWrapper = styled.div`
  display: flex;
  padding: 0.3rem;
  flex-direction: column;
  justify-content: left;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
