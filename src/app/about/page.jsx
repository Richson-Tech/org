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
        <h1 className="text-3xl text-center pl-5 font-[roboto] font-bold pb-5 pt-16">
          We Are Here To Help
        </h1>
        <div>
          <p className="pt-2 text-center p-2">
            304 North Cardinal St. Dorchester Center
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-3xl text-center pl-5 font-[roboto] font-bold pb-5 pt-16">
          CSBG State Plan Toolkit
        </h1>
        <p className="text-[#757575] pt-2 text-center p-2">
          Publication Date: June 12, 2023
        </p>
        <p className="text-[#757575] pt-2 text-center p-2">
          Current as of: June 14, 2023
        </p>
        <p className="text-[#757575] pt-2 text-center p-2">Table of Contents</p>
        <p className="text-[#757575] pt-2 text-center p-2">
          The CSBG State Plan Toolkit is a resource for CSBG grant recipients
          that provides links to communications, forms and guidelines, webinars,
          and demos created by the Office of Community Services to aid CSBG
          grant recipients in the creation and submission of the CSBG State
          Plan.
        </p>
      </div>
      <div className="bg-blue-700">
        <div className="flex flex-col">
          <h1 className="text-4xl text-center text-white pl-5 font-[roboto] font-bold pb-5 pt-16">
            What We DO
          </h1>
          <p className="pt-2 text-center p-2 text-white">
            Current as of: November 21, 2022 The{" "}
            <b> Office of Community Services (OCS) </b> partners with states,
            tribes, territories, and non-profit and community-based
            organizations to reduce the causes and consequences of poverty,
            increase opportunity and economic security of individuals and
            families, and revitalize communities. Our social service and
            community development programs work in a variety of ways to improve
            the lives of many.
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl text-center text-white pl-5 font-[roboto] font-bold pb-5 pt-16">
            Major Goals
          </h1>
          <p className="text-lg text-white pb-2 font-[inter] font-semibold text-center">
            {" "}
            OCS’s main goals are to:
          </p>
          <ul className="list-disc text-lg text-white pb-5 font-[inter] text-center pl-5 pr-3">
            <li>
              Serve the economic and social needs of individuals and families
              with low-incomes;
            </li>
            <li>Provide employment and entrepreneurial opportunities;</li>
            <li>
              Promote individual economic opportunity and security through the
              creation of full-time, permanent jobs;
            </li>
            <li>
              Support asset building strategies for individuals and families
              with low-incomes, such as savings, increasing financial
              capability, and securing assets;
            </li>
            <li>
              Assist community development corporations in utilizing existing
              funding for neighborhood revitalization projects;
            </li>
            <li>
              Provide financial and technical resources to state, local, and
              public and private agencies for economic development and related
              social service activities; and Provide energy assistance to
              households with low-incomes.
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-4xl text-center text-white pl-5 font-[roboto] font-bold pb-5 pt-16">
            Programs
          </h1>
          <p className="pt-2 text-center p-2 text-white">
            The Office of Community Services (OCS) administers seven social
            service and community development programs. In 2021, this totaled
            about $7.3 billion in funding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
