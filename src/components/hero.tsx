import Image from "next/image";
import Link from "next/link";
import React from "react";
import Ellipse from "./ellipse";
import { SOCIALS } from "@/lib/const";
import SocialMedia from "./socialmedia";
import MaxWidthCont from "@/components/maxwidthcont";

export default function Hero() {
  return (
    <>
      <Ellipse className="bg-secondary -left-[200px] mt-[40px] " />
      <MaxWidthCont>
        <div className="relative mx-auto lg:flex lg:gap-4 w-full pt-[59px]">
          <hgroup className="text-white text-center lg:text-left py-[95px]">
            <p className="text-[18px]">What's good? This is</p>
            <h1 className="lg:text-[60px] text-[30px] w-full lg:w-[40%] font-bold">
              Onyekachukwu Divine.
            </h1>
            <p className="text-[18px]">
              I am a <b className="text-primary">Frontend Developer</b>
            </p>
            <div className="flex w-full justify-center lg:justify-start gap-4 mt-[10px]">
              <Link href="">
                <button className="rounded-[10px] text-[18px] bg-primary py-[8px] px-[20px] lg:py-[10px] lg:px-[30px]">
                  Hire me
                </button>
              </Link>
              <Link href="">
                <button className="rounded-[10px] text-[18px] bg-primary py-[8px] px-[20px] lg:py-[10px] lg:px-[30px]">
                  Get CV
                </button>
              </Link>
            </div>
            <div className="flex gap-3 mt-[20px] w-full lg:w-[37%] justify-center">
              {SOCIALS.map((social, k) => (
                <SocialMedia key={k} link={social.link} icon={social.icon} />
              ))}
            </div>
          </hgroup>
          <div className="hidden lg:inline">
            <Image src="/myimage.png" alt="myimage" height="520" width="520" />
          </div>
        </div>
      </MaxWidthCont>
    </>
  );
}
