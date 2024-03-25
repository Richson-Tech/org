import React from "react";

const Testimonial = () => {
  return (
    <div>
      <h1 className="text-4xl text-center text-[#111518] pl-5 font-[roboto] font-bold pb-5 pt-16">
        Testimonial
      </h1>
      <div className="flex flex-col">
        <div className="bg-white rounded">
        <Image
          src="/alice.webp"
          alt="grants"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />

        </div>
      </div>
    </div>
  );
};

export default Testimonial;
