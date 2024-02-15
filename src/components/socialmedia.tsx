import Link from "next/link";
import React from "react";

export default function SocialMedia({ link, icon }: ISOCIALS) {
  return (
    <div>
      <Link target="__blank" href={link}>
        <div className=" hover:scale-125 transition-all p-[10px] rounded-3xl bg-gradient-to-r from-[#5858E8] to to-[#4242BC]">
          {icon}
        </div>
      </Link>
    </div>
  );
}
