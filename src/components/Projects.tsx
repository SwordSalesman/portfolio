import ProjectCard from "./ProjectCard";
import styled from "styled-components";

import rain_gif from "../assets/demos/rain_demo.gif";
import dice_gif from "../assets/demos/dicetray_demo.gif";
import concord_gif from "../assets/demos/concord_demo.gif";
import tome_gif from "../assets/demos/tome_demo.gif";
import portrait_pierre from "../assets/demos/portrait_pierre.jpg";
import portrait_elizabet from "../assets/demos/portrait_elizabet.jpg";
import portrait_proposal from "../assets/demos/portrait_proposal.jpg";
import procreate from "../assets/procreate.svg";

// Tech Icons from: https://devicon.dev/

const Projects = () => {
  return (
    <div>
      <ProjectCard
        title="Concord Character Creator"
        date="2023"
        description="An interactive character creator form for a local LARP which I play in. This is not yet live, but will be replacing a static google form. This has been a fun challenge in both meeting specific needs for the rule set being facilitated, but having relative freedom to design the process however I like."
        link="https://swordsalesman.github.io/ConcordCharacterCreator/"
        media={<ProjectImg src={concord_gif} alt="loading..." />}
        technologies={
          <div>
            <TechIcon
              className="devicon-react-original not-colored"
              title="React"
            />
            <TechIcon
              className="devicon-tailwindcss-plain not-colored"
              title="Tailwind CSS"
            />
            <TechIcon
              className="devicon-javascript-plain not-colored"
              title="Javascript"
            />
            <TechIcon
              className="devicon-github-original not-colored"
              title="Github Pages"
            />
          </div>
        }
      />
      <ProjectCard
        title="Portraits"
        date="2022-Current"
        description="Over the years I've been commissioned to paint digital portraits for people - usually with them dressed up in their fanciest kit. They are signed by the name of my artist alter ego 'Marius Piccolini', which is a bit of a long story which I love to talk about."
        link="https://www.flickr.com/gp/198135874@N04/o560tgwo2U"
        media={
          <Gallery>
            <GalleryImg
              src={portrait_pierre}
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                e.stopPropagation();
              }}
            />
            <GalleryImg
              src={portrait_proposal}
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                e.stopPropagation();
              }}
            />
            <GalleryImg
              src={portrait_elizabet}
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                e.stopPropagation();
              }}
            />
          </Gallery>
        }
      />
      <ProjectCard
        title="Tome"
        date="2023"
        description="An app to lookup and save spells for Dungeons and Dragons 5e. This was a skill test for a previous role and was the first time that I had used React. This was great fun to build as I got to explore React but in a familiar nerdy environment."
        link="https://magictome-6aeb7.web.app/"
        media={<ProjectImg src={tome_gif} alt="loading..." />}
        technologies={
          <div>
            <TechIcon
              className="devicon-react-original not-colored"
              title="React"
            />
            <TechIcon
              className="devicon-tailwindcss-plain not-colored"
              title="Tailwind CSS"
            />
            <TechIcon
              className="devicon-javascript-plain not-colored"
              title="Javascript"
            />
            <TechIcon
              className="devicon-firebase-plain not-colored"
              title="Firebase"
            />
          </div>
        }
      />
      <ProjectCard
        title="Rain"
        date="2021"
        description="This is a tiny project I did in a couple hours on a rainy winter afternoon while procrastinating doing my Honours thesis. This doesn't showcase much, but I really like this little python script."
        link="https://github.com/SwordSalesman/rain"
        media={<ProjectImg src={rain_gif} alt="loading..." />}
        technologies={
          <div>
            <TechIcon
              className="devicon-python-plain not-colored"
              title="Python"
            />
          </div>
        }
      />
      <ProjectCard
        title="Dice Tray"
        date="2020"
        description="My first HTML project using Electron. I wanted an app which I could run from my desktop to roll a large number of dice quicker than actually doing it. I've learned a lot about UI design since then, but I think I succeeded!"
        link="https://github.com/SwordSalesman/DiceTray"
        media={<ProjectImg src={dice_gif} alt="loading..." />}
        technologies={
          <div>
            <TechIcon
              className="devicon-electron-original not-colored"
              title="Electron"
            />
            <TechIcon className="devicon-css3-plain not-colored" title="CSS" />
            <TechIcon
              className="devicon-javascript-plain not-colored"
              title="Javascript"
            />
            <TechIcon
              className="devicon-html5-plain not-colored"
              title="HTML5"
            />
          </div>
        }
      />
    </div>
  );
};

export default Projects;

const ProjectImg = styled.img`
  margin-top: 1rem;
  max-width: 360px;

  @media (min-width: 600px) {
    max-width: 500px;
  }
`;

const Gallery = styled.div`
  text-align: center;
`;

const GalleryImg = styled.img`
  margin-left: 0.6rem;
  margin-right: 0.6rem;
  transition-duration: 0.3s;

  margin-top: 1rem;
  max-height: 20rem;
  height: 100%;

  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.3);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.35);
  }
`;

const TechIcon = styled.i`
  font-size: 3em;
  margin-left: 0.6rem;
  margin-right: 0.6rem;
`;

const TechImg = styled.img`
  height: 3rem;
`;
