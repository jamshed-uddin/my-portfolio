import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const ProfileLinks = () => {
  return (
    <div className="flex items-center gap-4">
      <a
        href={"https://github.com/jamshed-uddin"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={20} />
      </a>
      <a
        href={"https://www.linkedin.com/in/mdjamsheduddin/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={20} />
      </a>
    </div>
  );
};

export default ProfileLinks;
