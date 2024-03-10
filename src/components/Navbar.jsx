import React from "react";
import Link from "next/link";
import Menu from "./Menu";



const Navbar = () => {
  return (
    <div className="h-20 w-full text-black flex flex-row px-3 md:flex-row items-center justify-between md:h-24 lg:px-20 xl:px-40">
      {/* LEFT SIDE */}
      <div className="flex md:hidden gap-4">
        {/* LOGO */}
        <h1>LOGO</h1>
      </div>
      <h1 className="hidden md:block">LOGO</h1>
      <div className="hidden md:flex gap-4 flex-1 items-center justify-center">
        {/* Links */}
        <Link href="/">Investing</Link>
        <Link href="/banking">Banking</Link>
        <Link href="/earning">Earning</Link>
        <Link href="/learning">Learning</Link>
        <Link href="/learning"></Link>
      </div>
      {/* Right Side - Visible on Small Screens */}
      <div className="md:hidden flex flex-row justify-center items-center space-x-3 pt-5 pb-5">
        {" "}
        {/* Modified container */}
        <button className="bg-[#79C947] text-white px-3 py-3 rounded-full">
          Get Started
        </button>
        <div className="md:hidden">
          <Menu />
        </div>
      </div>
      {/* Right Side - Hidden on Small Screens */}
      <div className="hidden md:flex items-center justify-center space-x-3">
        <Link href="/login">Login</Link>
        <button className="bg-[#79C947] text-white px-3 py-3 rounded-full hidden md:block">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
