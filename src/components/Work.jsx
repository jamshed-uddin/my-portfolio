import workData from "../../public/work.json";
import ProjectCard from "./ProjectCard";
import Title from "./Title";

const Work = () => {
  return (
    <div className="lg:flex  gap-2 " id="work">
      <div className="mb-4 pr-20">
        <Title>Work</Title>
      </div>
      <div className="flex-grow h-full space-y-4">
        {/* <div className="h-60 lg:border-b-2 border-black">1</div>
        <div className="h-60 lg:border-b-2 border-black">2</div>
        <div className="h-60 lg:border-b-2 border-black">3</div> */}

        {workData?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Work;
