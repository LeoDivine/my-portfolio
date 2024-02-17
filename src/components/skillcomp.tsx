import React from "react";

export default function SkillComp({ name }: ISKILLS) {
  return (
    <div className=" px-[20px] py-[10px] font-semibold rounded-[10px] text-white text-[14px] bg-gradient-to-r from-[#5858E8] to to-[#4242BC]">
      {name}
    </div>
  );
}
