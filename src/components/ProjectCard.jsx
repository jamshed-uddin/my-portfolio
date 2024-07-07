import React from "react";
import { FaGithub } from "react-icons/fa6";
import { LuExternalLink } from "react-icons/lu";

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col gap-y-3 lg:flex-row lg:border-b-2 border-black lg:pb-4 rounded-xl md:rounded-none  shadow-md md:shadow-none p-2 md:p-0 ">
      {/* project title and technology and links */}
      <div className="lg:flex-grow order-last lg:order-first lg:space-y-4 flex lg:block justify-between items-start">
        {/* title and tech */}
        <div className="">
          <h1 className="text-2xl font-medium">
            {project?.title}{" "}
            <span className="text-base ml-2">
              {project?.status === "Ongoing" ? ". Ongoing" : ""}
            </span>
          </h1>
          <h3 className=" w-full lg:w-3/4 leading-4 mt-1">
            {project?.technology?.join(" . ")}
          </h3>
        </div>

        {/* links */}
        <div className="flex items-center gap-6">
          {/* github */}
          <div>
            <a
              href={project?.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </a>
          </div>
          {/* live site */}
          <div>
            {project?.status === "complete" && (
              <a
                href={project?.liveSiteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* project image */}
      <div className="  select-none ">
        <div className="lg:w-80 w-full  lg:shadow-md rounded-lg overflow-hidden">
          <img
            className="w-full object-cover  "
            src={project?.photourl}
            alt=""
            loading="lazy"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
