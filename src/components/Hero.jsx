import React from "react";
import ScrollDown from "./ScrollDown";

const Hero = () => {
  return (
    <div className="lg:h-screen my-44 lg:my-0 ">
      <div className="lg:h-[calc(100vh-3rem)] flex items-center ">
        <div className="lg:w-[35%] md:w-[60%] w-[80%] text-xl">
          <h1>Hello___ I am Md Jamshed Uddin</h1>
          <h1 className="text-lg">
            Web developer focused on front-end.I thrive on building intuitive
            and engaging web interfaces.
          </h1>
          <a
            className="w-fit underline text-lg cursor-pointer"
            href="https://drive.google.com/file/d/1WVkoYKNe8F9_VIU02x8RsJr27uPHXBzX/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            My resume
          </a>
        </div>
      </div>
      <ScrollDown />
    </div>
  );
};

export default Hero;
