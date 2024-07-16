import Link from "next/link";
import React from "react";
import DoggosLogo from "../logo";

export default function Navbar() {
  return (
    <nav className="py-4 px-2 fixed w-full">
      <div className="container mx-auto flex justify-between">
        <Link href={"/"} className="font-bold inline-flex gap-2">
          <DoggosLogo />
        </Link>
      </div>
    </nav>
  );
}
