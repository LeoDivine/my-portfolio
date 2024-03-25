import React from "react";

export default function Ellipse({className}:IELLIPSE) {
  return (
    <div
      className={`absolute rounded-full ${className}`}
    ></div>
  );
}
