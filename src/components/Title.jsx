import React from "react";

const Title = ({ children, className }) => {
  return (
    <h2 className={`text-sm font-medium sticky top-14 ${className}`}>
      <span>{children}</span>
    </h2>
  );
};

export default Title;
