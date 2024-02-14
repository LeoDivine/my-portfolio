import { NAVLINKS } from "@/lib/const";
import React from "react";
import NavLinkComp from "./navlinkcomp";
import Link from "next/link";

export default function NavLinksComp() {
  return (
    <div className="text-center mt-2 flex flex-col gap-6">
      {NAVLINKS.map((link, k) => (
        <NavLinkComp key={k} link={link.link} linkname={link.linkname} />
      ))}
      <>
        <Link
          className="text-white py-[10px] px-[30px] rounded-[10px] bg-gradient-to-r from-[#5858E8] to to-[#4242BC]"
          href=""
        >
          <button>Get CV</button>
        </Link>
      </>
    </div>
  );
}
