import React from "react";
import ScrollDown from "./ScrollDown";

const Hero = () => {
  return (
    <div className="lg:h-screen my-44 lg:my-0 ">
      <div className="lg:h-[calc(100vh-3rem)] flex items-center ">
        <div className="lg:w-[35%] md:w-[60%] w-[80%] ">
          <h1 className="text-lg">Hello___ I am Md Jamshed Uddin</h1>
          <h1 className="text-sm lg:text-base">
            Web developer focused on front-end. I thrive on building intuitive
            and engaging web interfaces.
          </h1>
        </div>
      </div>
      <ScrollDown />
    </div>
  );
};

export default Hero;
