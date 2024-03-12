import React from "react";
import MaxWidthCont from "../layout/maxwidthcont";
import FormComp from "../layout/formcomp";

export default function Contact() {
  return (
    <div>
      <MaxWidthCont>
        <h1 className="text-[35px] font-bold text-white text-center pt-[100px] ">
          Hire Me
        </h1>
        <div className=" mt-[30px] px-[50px] py-[20px] bg-secondary w-[60%] mx-auto rounded-[10px]  shadow-md shadow-secondary ">
          <p className="text-white text-center">
            Let's work to make your brand <b className="text-primary">public</b>
            .
          </p>
          <FormComp />
        </div>
      </MaxWidthCont>
    </div>
  );
}
