"use client";

import { Children, useEffect } from "react";

export default function MouseFollower() {
  useEffect(() => {
    const handleMouseMove = (e) => {
        document.getElementById("mouse-follower").style.transform = `translate(${e.clientX}px,${e.clientY - 123}px)`; 
    };

    window.addEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      id="mouse-follower"
      
    ></div>
  );
}
