import React from "react";
import MaxWidthCont from "./maxwidthcont";
import Link from "next/link";
import { SKILLS } from "@/lib/const";
import SkillComp from "./skillcomp";

export default function About() {
  return (
    <MaxWidthCont className="bg-secondary">
      <div className="w-full pt-[50px] h-screen relative">
        <div className="flex justify-center gap-7">
          <div className="w-full">
            <span className="flex items-center gap-4">
              <h4 className="text-[35px] font-bold text-white">About me</h4>
              <div className="w-[70px] h-[10px] rounded-full bg-primary"></div>
            </span>
            <div className="text-white mt-[20px]">
              <p>
                As a <b className="text-primary">Frontend Developer</b>, I work
                with converting design concept to responsive and engaging
                websites ensuring the success of the overall products. Check out
                my{" "}
                <Link className="text-primary font-bold" href="">
                  Projects.
                </Link>
              </p>
              <br />
              <p>
                I am a firm believer of effective communication with clients or
                a team at large to have a full grasp and understanding of the
                project demands and prioritizes timely delivery satisfaction. I
                am goal getter with burning desire to learn more and acquire
                real life working experience and skill set.
              </p>
            </div>
          </div>
          <div className="w-full">
            <span className="flex items-center gap-4">
              <h4 className="text-[35px] font-bold text-white">My skills</h4>
              <div className="w-[70px] h-[10px] rounded-full bg-primary"></div>
            </span>
            <div className="mt-[20px] flex-wrap flex gap-3">
              {SKILLS.map((skill, k) => (
                <SkillComp key={k} name={skill.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MaxWidthCont>
  );
}
