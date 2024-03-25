import Image from "next/image";
import Link from "next/link";
import React from "react";
import Ellipse from "../ellipse";
import { SOCIALS } from "@/lib/const";
import SocialMedia from "../socialmedia";
import MaxWidthCont from "@/components/layout/maxwidthcont";

export default function Hero() {
  return (
    <>
      <Ellipse className="bg-secondary 2xl:hidden h-[500px] w-[500px] -left-[300px] lg:-left-[200px] mt-[40px] " />
      <MaxWidthCont>
        <div className="flex w-full h-screen flex-col items-center justify-center">
          <div className="relative items-center mx-auto lg:flex lg:gap-4 w-full">
            <hgroup className="text-white text-center md:text-center lg:text-left py-[218px]">
              <p className="lg:text-[18px] text-[15px]">What's good? I am</p>
              <h1 className="lg:text-[60px] text-[30px] w-full lg:w-[40%] font-bold">
                Onyekachukwu Divine.
              </h1>
              <p className="text-[18px]">
                I am a <b className="text-primary">Frontend Developer</b>
              </p>
              <div className="flex w-full justify-center lg:justify-start gap-4 mt-[10px]">
                <Link href="#contact">
                  <button className="rounded-[10px] lg:text-[14px] text-[15px] bg-primary py-[8px] px-[20px] lg:py-[10px] lg:px-[30px]">
                    Hire me
                  </button>
                </Link>
                <Link href="">
                  <button className="rounded-[10px] lg:text-[14px] text-[15px] bg-primary py-[8px] px-[20px] lg:py-[10px] lg:px-[30px]">
                    Get CV
                  </button>
                </Link>
              </div>
              <div className="flex gap-3 mt-[20px] w-full lg:justify-start justify-center">
                {SOCIALS.map((social, k) => (
                  <SocialMedia key={k} link={social.link} icon={social.icon} />
                ))}
              </div>
            </hgroup>
            <div className="hidden relative md:hidden lg:inline">
              <Image
                src="/myimage.png"
                alt="myimage"
                height="1000"
                width="1000"
                className="lg:w-[100%] xl:w-[60%] lg:ml-[30px] xl:ml-[250px] z-10 relative rounded-full"
              />
              <Ellipse className=" bg-secondary top-[90px] lg:left-[65px] xl:left-[299px] w-[360px] h-[360px] " />
            </div>
          </div>
        </div>
      </MaxWidthCont>
    </>
  );
}
