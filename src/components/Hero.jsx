import React from "react";
import ScrollDown from "./ScrollDown";

const Hero = () => {
  return (
    <div className="lg:h-screen my-36 lg:my-0 lg:mt-0">
      <div className="lg:h-[calc(100vh-3rem)] flex items-center ">
        <div className="lg:w-[35%] md:w-[60%] w-[80%] text-xl">
          <h1>Hello___ I am Md Jamshed Uddin</h1>
          <h1 className="text-lg">
            Web developer focused on front-end.I thrive on building intuitive
            and engaging web interfaces.
          </h1>
          <h4 className="w-fit underline text-lg cursor-pointer">My resume</h4>
        </div>
      </div>
      <ScrollDown />
    </div>
  );
};

export default Hero;
