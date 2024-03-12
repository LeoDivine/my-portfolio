import React from "react";

export default function FormComp() {
  return (
    <form className="flex gap-7 flex-col">
      <div className="flex flex-col">
        <label className="font-semibold text-white">Name</label>
        <input
          className="mt-[4px] w-full rounded-[10px] pl-5 outline-none bg-textField text-white text-[15px] h-[45px] "
          type="text"
          placeholder="Enter your name"
        />
      </div>
      <div className="flex flex-col items-start">
        <label className="font-semibold text-white">Email</label>
        <input
          className="mt-[4px] w-full rounded-[10px] pl-5 outline-none bg-textField text-white text-[15px] h-[45px] "
          type="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold text-white">Message</label>
        <textarea
          placeholder="Write your message"
          className="mt-[4px] rounded-[10px] resize-none bg-textField outline-none px-5 py-4 text-white text-[15px] "
          cols={30}
          rows={10}
        ></textarea>
      </div>
      <div className="">
        <input
          type="submit"
          className=" text-left px-[30px] rounded text-white font-semibold py-[10px] bg-primary "
          value="Submit"
        />
      </div>
    </form>
  );
}
