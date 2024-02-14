import Link from "next/link";
import React from "react";

export default function NavLinkComp({ link, linkname }: INAVLINKS) {
  return (
    <div>
      <Link className="font-bold text-bgColor" href={link}>
        {linkname}
      </Link>
    </div>
  );
}
