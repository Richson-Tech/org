import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="bg-blue-700 h-96 w-full pb-12">
      <p className="text-center p-2 pt-10 text-white">
        The Office of Community Services (OCS) partners with states, tribes,
        territories, and non-profit and community-based organizations to reduce
        the causes and consequences of poverty, increase opportunity and
        economic security of individuals and families, and revitalize
        communities. Our social service and community development programs work
        in a variety of ways to improve the lives of many.
      </p>
      <div className="flex flex-col">
        <div className="pt-2">
          <Image
            src="/kyle.webp"
            alt="grants"
            width={500}
            height={310}
            className="object-center object-cover"
          />
          <p className="text-xl pt-2 text-center font-semibold">Kyle Estrada</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="pt-2">
          <Image
            src="/tom.webp"
            alt="grants"
            width={500}
            height={310}
            className="object-center object-cover"
          />
          <p className="text-xl pt-2 text-center font-semibold">Tom Gray</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="pt-2">
          <Image
            src="/randy.jpeg"
            alt="grants"
            width={500}
            height={310}
            className="object-center object-cover"
          />
          <p className="text-xl pt-2 text-center font-semibold">Randy Wallace</p>
        </div>
      </div>
    </div>
  );
};

export default page;
