import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div>
      <ProjectCard
        title="Concord Character Creator"
        description="An interactive character creator form for a local LARP which I play in. This is not yet live, but will be replacing a static google form."
        link="https://swordsalesman.github.io/ConcordCharacterCreator/"
      />
      <ProjectCard
        title="Portraits"
        description="Over the years I've been commissioned to paint digital portraits for people - usually with them dressed up in their fanciest kit. Here's a few of them."
        link="https://www.flickr.com/gp/198135874@N04/o560tgwo2U"
      />
      <ProjectCard
        title="Tome"
        description="An app to lookup and save spells for Dungeons and Dragons 5e. This was a skill test for a previous role and was the first time I used React."
        link="https://magictome-6aeb7.web.app/"
      />
    </div>
  );
};

export default Projects;
