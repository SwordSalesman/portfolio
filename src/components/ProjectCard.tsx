import { ReactNode, useState } from "react";
import styled from "styled-components";
import IconLink from "./IconLink";
import { HiExternalLink, HiChevronDown, HiChevronUp } from "react-icons/hi";
import { useCollapse } from "react-collapsed";

interface CardProps {
  title: string;
  date?: string;
  link?: string;
  description: string;
  icons?: ReactNode;
  media?: ReactNode;
  technologies?: ReactNode;
}

const ProjectCard = (props: CardProps) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <div>
      <ProjectCardBox
        className="collapsible"
        onClick={() => {
          setExpanded(!isExpanded);
        }}
      >
        <MainBox className="header" {...getToggleProps()}>
          <TextBox>
            <Title>
              {<div>{props.title}</div>}
              {props.date && <DateText>{props.date}</DateText>}
            </Title>
            <Description>{props.description}</Description>
            {props.technologies && <TechChips>{props.technologies}</TechChips>}
          </TextBox>
          <LinkBox>
            {props.link && (
              <IconLink link={props.link} icon={<HiExternalLink />} />
            )}
            {props.media && (
              <IconLink
                icon={isExpanded ? <HiChevronUp /> : <HiChevronDown />}
                onClick={() => {
                  setExpanded(!isExpanded);
                }}
              />
            )}
          </LinkBox>
        </MainBox>
        {
          <div {...getCollapseProps()}>
            <MainBox className="content">
              <div></div>
              {props.media}
              <div></div>
            </MainBox>
          </div>
        }
      </ProjectCardBox>
    </div>
  );
};

export default ProjectCard;

// Styling

const ProjectCardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 0.9);
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
  padding: 0.5rem;
  text-align: left;
  transition-duration: 0.2s;

  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.3em;
  line-height: 1em;
  margin-bottom: 0.5em;
  font-family: "Times New Roman", Times, serif;
`;

const DateText = styled.div`
  color: rgba(183, 173, 204, 0.894);
  font-size: 1rem;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-weight: 500;
  margin-left: 1rem;
`;

const Description = styled.div`
  line-height: 1.1rem;
  color: rgb(255, 255, 255, 0.7);
`;

const TextBox = styled.div`
  display: flex;
  padding: 0.3rem;
  width: 100%;
  flex-direction: column;
  justify-content: left;
`;

const TechChips = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MainBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
