"use client";
import { NavCloseIcon, NavOpenIcon } from "@/lib/icons";
import React, { useState } from "react";
import NavLinksComp from "./navlinkscomp";
import MaxWidthCont from "./maxwidthcont";

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className=" z-10 relative" onClick={() => setOpenNav(!openNav)}>
      {openNav ? (
        <div className="bg-[#0000009e] w-screen fixed h-screen">
          <div className="bg-white p-[20px] w-full lg:w-[20%] rounded-[10px] absolute lg:right-0 lg:mr-[40px] top-0 lg:mt-[20px]">
            <div className=" absolute cursor-pointer hover:scale-125 transition-all ">
              {NavCloseIcon}
            </div>
            <div className="flex flex-col mt-[30px] items-center justify-between gap-11">
              <NavLinksComp />
              <div className="h-[6px] rounded w-[60px] bg-primary"></div>
            </div>
          </div>
        </div>
      ) : (
        <MaxWidthCont>
          <div className="hover:scale-125 transition-all absolute right-0 mr-[40px] pt-[20px] cursor-pointer">
            {NavOpenIcon}
          </div>
        </MaxWidthCont>
      )}
    </div>
  );
}