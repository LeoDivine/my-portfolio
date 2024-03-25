import React from "react";
import MaxWidthCont from "../layout/maxwidthcont";
import FormComp from "../layout/formcomp";

export default function Contact() {
  return (
    <div id="contact" >
      <MaxWidthCont>
        <h1 className="text-[35px] font-bold text-white text-center pt-[50px] ">
          Hire me
        </h1>
        <div className=" lg:mt-[30px] mt-[15px] lg:px-[50px] lg:py-[20px]  lg:bg-secondary w-full lg:w-[60%] mx-auto rounded-[10px]  lg:shadow-md lg:shadow-secondary ">
          <p className="text-white text-center mb-[10px] ">
            Let's work to make your brand <b className="text-primary">public</b>
            .
          </p>
          <FormComp />
        </div>
      </MaxWidthCont>
    </div>
  );
}
