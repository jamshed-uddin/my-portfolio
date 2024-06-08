import React from "react";
import { HiArrowDown } from "react-icons/hi2";

const ScrollDown = () => {
  return (
    <div className="hidden lg:flex justify-end">
      <div className="animate-bounce  w-fit flex flex-col items-center">
        <h3>
          <HiArrowDown />
        </h3>
        <h3>Scroll down</h3>
      </div>
    </div>
  );
};

export default ScrollDown;
