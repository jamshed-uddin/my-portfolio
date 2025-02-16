"use client";

import React, { useEffect, useRef, useState } from "react";

const MouseTrailer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const trailerRef = useRef(null);

  useEffect(() => {
    const animateTrailer = (e) => {
      const trailer = trailerRef.current;

      if (!trailer) return;

      const x = e.clientX - trailer.offsetWidth / 2;
      const y = e.clientY - trailer.offsetHeight / 2;

      trailer.animate(
        {
          transform: `translate(${x}px, ${y}px) `,
        },
        {
          duration: 800,
          fill: "forwards",
        }
      );
    };
    window.addEventListener("mousemove", animateTrailer);

    return () => {
      window.removeEventListener("mousemove", animateTrailer);
    };
  }, []);

  return (
    <div
      ref={trailerRef}
      style={{
        top: mousePosition.y,
        left: mousePosition.x,
        position: "fixed",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        fill: "forwards",
      }}
      className={`hidden lg:block h-3 w-3 rounded-full bg-black z-50 `}
      id="trailer"
    ></div>
  );
};

export default MouseTrailer;
