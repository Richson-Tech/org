import React from "react";
import Link from "next/link";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <nav className="bg-amber-400 h-20 w-full text-black flex flex-row px-3 md:flex-row items-center justify-between md:h-24 lg:px-20 xl:px-40">
      {/* LEFT SIDE */}
      <div className="flex flex-col ">
        <h1 className="text-2xl font-bold">CSBG</h1>
        <p className="text-[#757575] text-sm">COMMUNITY SERVICE BLOCK GRANT</p>
      </div>
      <div className="hidden md:flex gap-4 flex-1 items-center justify-center">
        {/* Links */}
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {/* Right Side - Visible on Small Screens */}
      <div className="md:hidden flex flex-row justify-center items-center space-x-3 pt-5 pb-5">
        <div className="md:hidden">
          <Menu />
        </div>
      </div>
      {/* Right Side - Hidden on Small Screens */}
      <div className="hidden md:flex items-center justify-center space-x-3">
        <button className="bg-blue-700 text-white px-3 py-3 rounded hidden md:block">
          7812691505
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
