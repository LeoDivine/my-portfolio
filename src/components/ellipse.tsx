import React from "react";

export default function Ellipse({className}:IELLIPSE) {
  return (
    <div
      className={`absolute rounded-full h-[500px] w-[500px] ${className}`}
    ></div>
  );
}
