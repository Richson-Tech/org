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
          <p className="text-xl pt-2 text-center font-semibold">
            Randy Wallace
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-3xl text-center pl-5 font-[roboto] font-bold pb-5 pt-16">We Are Here To Help</h1>
        <div>
          <p className="pt-2 text-center p-2">304 North Cardinal St. Dorchester Center</p>
        </div>
      </div>
      <div>
        <h1 className="text-4xl text-center pl-5 font-[roboto] font-bold pb-5 pt-16">CSBG State Plan Toolkit</h1>
        <p>Publication Date: June 12, 2023</p>
        <p>Current as of: June 14, 2023</p>
        <p>
          Table of Contents The CSBG State Plan Toolkit is a resource for CSBG
          grant recipients that provides links to communications, forms and
          guidelines, webinars, and demos created by the Office of Community
          Services to aid CSBG grant recipients in the creation and submission
          of the CSBG State Plan.
        </p>
      </div>
    </div>
  );
};

export default page;
