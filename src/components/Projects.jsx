import projectsData from "../../public/work.json";
import ProjectCard from "./ProjectCard";
import Title from "./Title";

const Projects = () => {
  return (
    <div className="    grid grid-cols-1 lg:grid-cols-12 " id="projects">
      <div className="mb-4 lg:pr-20 col-span-3 ">
        <Title>Projects</Title>
      </div>
      <div className="flex-grow h-full  col-span-9  grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10">
        {projectsData?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
