import React from "react";
import MaxWidthCont from "./maxwidthcont";
import { PROJECTS } from "@/lib/const";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <MaxWidthCont>
        <div className="relative pt-[50px]">
          <span className="lg:flex items-center gap-4">
            <h4 className="text-center lg:text-left text-[35px] font-bold text-white">
              My projects
            </h4>
            <div className="w-[70px] hidden lg:inline h-[10px] rounded-full bg-primary"></div>
          </span>
          <div className="">
            {PROJECTS.map((value, k) => (
              <div key={k} className="flex mt-[50px] justify-center gap-4">
                <div className="w-[50%]">
                  <Image
                    className="w-full rounded-[10px] h-[400px] object-cover "
                    src={value.image}
                    width="1000"
                    height="1000"
                    alt="image"
                  />
                </div>

                <div className="flex flex-col gap-4 w-[50%] ">
                  <div className=" text-white text-center text-[17px] font-semibold bg-secondary px-[200px] py-[20px] rounded-[10px] ">
                    <h1>{value.title}</h1>
                  </div>
                  <div className=" h-full rounded-[10px] p-[20px] text-white bg-secondary">
                    <p>{value.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthCont>
    </>
  );
}
