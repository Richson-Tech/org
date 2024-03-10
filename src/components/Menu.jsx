"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CgMenu } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Investing", url: "/investing" },
  { id: 3, title: "Banking", url: "/banking" },
  { id: 4, title: "Earning", url: "/earning" },
  { id: 4, title: "Learning", url: "/learning" },
  { id: 4, title: "Pricing", url: "/pricing" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [showInvestDropdown, setShowInvestDropdown] = useState(false);

  const handleInvestHover = () => {
    // Show the dropdown on hover
    setShowInvestDropdown(true);
  };

  const handleInvestLeave = () => {
    // Hide the dropdown when the mouse leaves
    setShowInvestDropdown(false);
  };

  //  TEMPORARY USER
  const user = false;

  return (
    <div>
      {!open ? (
        <CgMenu size="2rem" onClick={() => setOpen(true)} />
      ) : (
        <MdOutlineClose size="2rem" onClick={() => setOpen(false)} />
      )}
      {open && (
        <div className="bg-white text-black absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 pl-6 items-start justify-center text-3xl font-serif2] z-10">
          {links.map((item) => (
            <React.Fragment key={item.id}>
              {item.title === "Investing" ? (
                <div
                  className="relative"
                  onMouseEnter={handleInvestHover}
                  onMouseLeave={handleInvestLeave}
                >
                  {item.title}
                  {showInvestDropdown && (
                    <div className="absolute flex flex-col top-full left-0 bg-white text-black py-2 px-4 ">
                      <Link href="/investing">
                        <p className="text-base font-serif">Invest</p>
                        <p className="text-sm text-[#767676] font-mono">
                          Investment Account
                        </p>
                      </Link>
                      <Link href="/later">
                        <p className="text-base font-serif">Later</p>
                        <p className="text-sm text-[#767676] font-mono">
                          Retirement
                        </p>
                      </Link>
                      <Link href="/early">
                        <p className="text-base font-serif">Early</p>
                        <p className="text-sm text-[#767676] font-mono">
                          Invest for kids
                        </p>
                      </Link>
                      <Link href="/sustainable">
                        <p className="text-base font-serif">Sustainable</p>
                        <p className="text-sm text-[#767676] font-mono">
                          Sustainable ESG portfolio
                        </p>
                      </Link>
                      <Link href="/bitcoins">
                        <p className="text-base font-serif">Bit of Bitcoins</p>
                        <p className="text-sm text-[#767676] font-mono">
                          Bitcoin ETF
                        </p>
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link href={item.url} onClick={() => setOpen(false)}>
                  {item.title}
                </Link>
              )}
            </React.Fragment>
          ))}
          {/* ... (previous code) */}
        </div>
      )}
    </div>
  );
};

export default Menu;
