import React from "react";
import MaxWidthCont from "./maxwidthcont";
import Link from "next/link";
import { SKILLS } from "@/lib/const";
import SkillComp from "./skillcomp";
import Ellipse from "./ellipse";

export default function About() {
  return (
    <>
      <Ellipse className=" bg-bgColor mt-[50px] -left-[200px]" />
      <MaxWidthCont className="bg-secondary">
        <div id="about" className="w-full z-10 pt-[100px] lg:h-screen pb-[20px] relative">
          <div className="flex flex-col lg:flex-row justify-center gap-7">
            <div className="w-full">
              <span className="lg:flex items-center gap-4">
                <h4 className="text-center lg:text-left text-[35px] font-bold text-white">
                  About me
                </h4>
                <div className="w-[70px] hidden lg:inline h-[10px] rounded-full bg-primary"></div>
              </span>
              <div className="text-white lg:text-left text-center mt-[20px]">
                <p>
                  As a <b className="text-primary">Frontend Developer</b>, I
                  work with converting design concept to responsive and engaging
                  websites ensuring the success of the overall products. Check
                  out my{" "}
                  <Link className="text-primary font-bold" href="">
                    Projects.
                  </Link>
                </p>
                <br />
                <p>
                  I am a firm believer of effective communication with clients
                  or a team at large to have a full grasp and understanding of
                  the project demands and prioritizes timely delivery
                  satisfaction. I am goal getter with burning desire to learn
                  more and acquire real life working experience and skill set.
                </p>
              </div>
            </div>
            <div className="w-full">
              <span className="lg:flex items-center gap-4">
                <h4 className="text-center lg:text-left text-[35px] font-bold text-white">
                  My skills
                </h4>
                <div className="w-[70px] hidden lg:inline h-[10px] rounded-full bg-primary"></div>
              </span>
              <div className="mt-[20px] relative justify-center lg:justify-start flex-wrap flex gap-3">
                {SKILLS.map((skill, k) => (
                  <SkillComp key={k} name={skill.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </MaxWidthCont>
      <Ellipse className="hidden lg:inline bg-bgColor top-[140%] -right-[70px]" />
    </>
  );
}
