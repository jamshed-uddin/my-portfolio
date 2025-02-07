import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { LuExternalLink } from "react-icons/lu";

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-lg     ">
      {/* project image */}
      <div className="  select-none ">
        <div className=" w-full  rounded-lg overflow-hidden">
          <Image
            className="w-full object-cover  "
            src={project?.photourl}
            alt={project?.title}
            priority
            width={320}
            height={180}
            draggable="false"
          />
        </div>
      </div>
      {/* project title and technology and links */}
      <div className="mt-4 lg:mt-5 lg:p-2 space-y-3">
        {/* title and tech */}
        <div className="">
          <h1 className="  font-medium">
            {project?.title}
            <span className="text-xs lg:text-base ml-2">
              {project?.status === "Ongoing" ? ".  Ongoing" : ""}
            </span>
          </h1>
          <h3 className=" text-xs">{project?.technology?.join(" . ")}</h3>
        </div>

        {/* links */}
        <div className="flex items-center gap-3">
          {/* github */}
          <div>
            <a
              href={project?.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={15} />
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
                <LuExternalLink size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
