import React from "react";

const Title = ({ children }) => {
  return (
    <h2 className=" text-sm font-medium sticky top-14">
      <span>{children}</span>
    </h2>
  );
};

export default Title;
