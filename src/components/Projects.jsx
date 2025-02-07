import projectsData from "../../public/work.json";
import ProjectCard from "./ProjectCard";
import Title from "./Title";

const Projects = () => {
  return (
    <div className="lg:flex  gap-2  pt-12 lg:pt-16" id="projects">
      <div className="mb-4 lg:pr-20">
        <Title>Projects</Title>
      </div>
      <div className="flex-grow h-full space-y-6 lg:space-y-5">
        {projectsData?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
