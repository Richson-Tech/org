import Maps from "@/components/Maps";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdCall } from "react-icons/md";

const page = () => {
  return (
    <div className="bg-blue-700 h-32 w-full pb-32">
      <div className="flex flex-col pb-0">
        <h2 className="text-4xl font-serif text-white text-center pt-10 font-normal">
          Contact Us
        </h2>
        <Maps />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <IoLocationSharp
            className="text-blue-700 text-center"
            size="2.5rem"
          />
          <h5 className="text-2xl pt-5 pb-3 font-bold">Physical Address</h5>
        </div>
        <p className="text-lg text-[#757575] pb-1 font-[inter] text-center pl-5 pr-3">
          330 C Street, S.W.
        </p>
        <p className="text-lg text-[#757575] pb-5 font-[inter] text-center pl-5 pr-3">
          Washington, D.C. 20201
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <MdCall
            className="text-blue-700 text-center"
            size="2.5rem"
          />
          <h5 className="text-2xl pt-5 pb-3 font-bold">Phone Number</h5>
        </div>
        <p className="text-lg text-[#757575] pb-1 font-[inter] text-center pl-5 pr-3">
          7812691505
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <IoLocationSharp
            className="text-blue-700 text-center"
            size="2.5rem"
          />
          <h5 className="text-2xl pt-5 pb-3 font-bold">Email Address</h5>
        </div>
        <p className="text-lg text-[#757575] pb-1 font-[inter] text-center pl-5 pr-3">
          support@c-s-b-g.org
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <IoLocationSharp
            className="text-blue-700 text-center"
            size="2.5rem"
          />
          <h5 className="text-2xl pt-5 pb-3 font-bold">Open Hours</h5>
        </div>
        <p className="text-lg text-[#757575] pb-1 font-[inter] text-center pl-5 pr-3">
          Monday-Saturday 8 am - 6pm
        </p>
        <p className="text-lg text-[#757575] pb-5 font-[inter] text-center pl-5 pr-3">
          Sunday 11am - 4pm
        </p>
      </div>
    </div>
  );
};

export default page;
