"use client";
import { NavCloseIcon, NavOpenIcon } from "@/lib/icons";
import React, { useState } from "react";
import NavLinksComp from "./navlinkscomp";
import MaxWidthCont from "./maxwidthcont";

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div onClick={() => setOpenNav(!openNav)}>
      {openNav ? (
        <div className="bg-[#0000009e] w-full top-0 fixed h-screen">
          <div className="bg-white p-[20px] w-[90%] lg:w-[20%] rounded-[10px] absolute right-0 m-[20px] lg:mr-[40px] top-0 lg:mt-[20px]">
            <div className="cursor-pointer">{NavCloseIcon}</div>
            <div className="flex flex-col items-center justify-between gap-11">
              <NavLinksComp />
              <div className="h-[6px] rounded w-[60px] bg-primary"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute right-0 pt-[20px] cursor-pointer">
          <MaxWidthCont>{NavOpenIcon}</MaxWidthCont>
        </div>
      )}
    </div>
  );
}
