import React from "react";

export default function MaxWidthCont({ children, className }: IMAXWIDTH) {
  return (
    <div
      className={`${className} max-w-[1440px] w-full mx-auto px-[20px] lg:px-[70px]`}
    >
      {children}
    </div>
  );
}
