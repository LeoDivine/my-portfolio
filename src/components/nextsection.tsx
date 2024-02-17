import { CaretDownIcon } from "@/lib/icons";
import Link from "next/link";
import React from "react";

export default function NextSection({ link }: INEXTSECTION) {
  return (
    <Link
      href={link}
      className="absolute mb-[20px] bottom-0"
    >
      <div className=" shadow-md h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] flex items-center justify-center rounded-full bg-primary">
        {CaretDownIcon}
      </div>
    </Link>
  );
}
