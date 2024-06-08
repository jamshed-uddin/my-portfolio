import React from "react";

const Title = ({ children }) => {
  return (
    <h2 className=" text-3xl   font-semibold">
      <span>{children}</span>
    </h2>
  );
};

export default Title;
