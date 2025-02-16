import React from "react";

const NotFound = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="lg:w-1/2 h-[calc(100vh-5rem)] ">
        <video
          src={"/confuseTravolta.mp4"}
          controls={false}
          loop
          preload="none"
          className="w-full h-full "
          autoPlay
          muted
        >
          404 | Not found
        </video>
      </div>
    </div>
  );
};

export default NotFound;
