import workData from "../../public/work.json";
import ProjectCard from "./ProjectCard";
import Title from "./Title";

const Work = () => {
  return (
    <div className="lg:flex  gap-2  pt-12 lg:pt-16" id="work">
      <div className="mb-4 pr-20">
        <Title>Work</Title>
      </div>
      <div className="flex-grow h-full space-y-6 lg:space-y-5">
        {workData?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Work;
