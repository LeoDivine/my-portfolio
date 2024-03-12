import React from "react";
import MaxWidthCont from "./maxwidthcont";
import { SOCIALS } from "@/lib/const";
import SocialMedia from "../socialmedia";

export default function Footer() {
  return (
    <div className="bg-secondary mt-[60px]">
      <MaxWidthCont>
        <div className="flex flex-col items-center gap-4 py-[10px]">
          <div className="flex gap-3 mt-[20px] w-full justify-center">
            {SOCIALS.map((social, k) => (
              <SocialMedia key={k} link={social.link} icon={social.icon} />
            ))}
          </div>
          <div className="text-white font-semibold">
            <p>© Copyright 2024: Made by Divine Onyekachukwu</p>
          </div>
        </div>
      </MaxWidthCont>
    </div>
  );
}
