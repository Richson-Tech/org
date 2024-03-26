import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="bg-blue-700 h-max w-full pb-32">
      <p className="text-center p-2 pt-10 text-white">
        The Office of Community Services (OCS) partners with states, tribes,
        territories, and non-profit and community-based organizations to reduce
        the causes and consequences of poverty, increase opportunity and
        economic security of individuals and families, and revitalize
        communities. Our social service and community development programs work
        in a variety of ways to improve the lives of many.
      </p>
      <div className="flex flex-col">
     <div className="bg-slate-50 w-30 h-36 rounded">
          <div className="pt-5">
            <Image
              src="/kyle.webp"
              alt="grants"
              width={155}
              height={195}
              className="object-center object-cover pl-20 ml-20"
            />
          </div>
          <p className="text-xl pt-2 text-center font-semibold">Kyle Estrada</p>
        </div>
      </div>
    </div>
  );
};

export default page;
