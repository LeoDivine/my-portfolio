import React from "react";

export default function MaxWidthCont({ children, className }: IMAXWIDTH) {
  return (
    <div
      className={`${className} max-w-[1440px] mx-auto px-[20px] lg:px-[40px]`}
    >
      {children}
    </div>
  );
}
