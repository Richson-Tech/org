import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="bg-blue-700 h-32 w-full pb-32">
      <div className="flex flex-col pb-0">
        <h2 className="text-4xl font-serif text-white text-center pt-10 font-normal">
          Our Services
        </h2>
        <Image
          src="/01.jpeg"
          alt="grants"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <Image
          src="/02.jpeg"
          alt="grants"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <Image
          src="/03.jpeg"
          alt="grants"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <Image
          src="/04.jpeg"
          alt="grants"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <Image
          src="/05.jpeg"
          alt="grants"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <Image
          src="/06.jpeg"
          alt="grants"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <Image
          src="/07.jpeg"
          alt="grants"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <Image
          src="/08.jpeg"
          alt="grants"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <Image
          src="/09.jpeg"
          alt="grants"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <Image
          src="/010.jpeg"
          alt="grants"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <Image
          src="/011.jpeg"
          alt="grants"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <Image
          src="/012.jpeg"
          alt="grants"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <Image
          src="/013.jpeg"
          alt="grants"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
      </div>

      <div className="flex flex-col">
        <h1 className="text-4xl text-center text-[#111518] pl-5 font-[roboto] font-bold pb-5 pt-16">
          What We DO
        </h1>
        <p className="pt-2 text-center p-2 text-[#757575]">
          Current as of: November 21, 2022 The Office of Community Services
          (OCS) partners with states, tribes, territories, and non-profit and
          community-based organizations to reduce the causes and consequences of
          poverty, increase opportunity and economic security of individuals and
          families, and revitalize communities. Our social service and community
          development programs work in a variety of ways to improve the lives of
          many.
        </p>
      </div>
      <div className="flex flex-col">
        <h1 className="text-4xl text-center text-[#111518] pl-5 font-[roboto] font-bold pb-5 pt-16">
          Major Goals
        </h1>
        <p className="text-lg text-[#757575] pb-2 font-[inter] font-semibold text-center"> OCS’s main goals are to:</p>
        <ul className="list-disc text-lg text-[#757575] pb-5 font-[inter] text-center pl-5 pr-3">
          <li>
            Serve the economic and social needs of individuals and families with
            low-incomes;
          </li>
          <li>Provide employment and entrepreneurial opportunities;</li>
          <li>
            Promote individual economic opportunity and security through the
            creation of full-time, permanent jobs;
          </li>
          <li>
            Support asset building strategies for individuals and families with
            low-incomes, such as savings, increasing financial capability, and
            securing assets;
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
        <h1>Programs</h1>
        <p>The Office of Community Services (OCS) administers seven social service and community development programs. In 2021, this totaled about $7.3 billion in funding.</p>
      </div>
    </div>
  );
};

export default page;
