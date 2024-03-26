import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div>
      <h1 className="text-4xl text-center text-[#111518] pl-5 font-[roboto] font-bold pb-5 pt-16">
        Testimonial
      </h1>
      <div className="flex flex-col space-y-8">
        <div className="bg-slate-50 w-67 rounded">
          <div className="pt-5">
            <Image
              src="/alice.webp"
              alt="grants"
              width={155}
              height={195}
              className="object-center object-cover pl-20 ml-20"
            />
          </div>
          <p className="text-xl pt-2 text-center font-semibold">Alice Lee</p>
          <p className="pt-2 text-center p-2 pb-10 text-[#757575]">
            Tested and Trusted
          </p>
        </div>
        <div className="bg-slate-50 w-67 rounded">
          <div className="pt-5">
            <Image
              src="/ethan.webp"
              alt="grants"
              width={155}
              height={195}
              className="object-center object-cover pl-20 ml-20"
            />
          </div>
          <p className="text-xl pt-2 text-center font-semibold">Alice Lee</p>
          <p className="pt-2 text-center p-2 pb-10 text-[#757575]">
            Tested and Trusted
          </p>
        </div>
        <div className="bg-slate-50 w-67 rounded">
          <div className="pt-5">
            <Image
              src="/adam.webp"
              alt="grants"
              width={155}
              height={195}
              className="object-center object-cover pl-20 ml-20"
            />
          </div>
          <p className="text-xl pt-2 text-center font-semibold">Alice Lee</p>
          <p className="pt-2 text-center p-2 pb-10 text-[#757575]">
            Tested and Trusted
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
