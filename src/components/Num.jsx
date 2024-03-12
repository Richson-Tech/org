"use client";
import React, { useState, useEffect } from "react";
import numeral from "numeral";
import { AiOutlineStock } from "react-icons/ai";
import { RiTeamFill, RiSettings2Fill } from "react-icons/ri";
import { MdPeople } from "react-icons/md";
import Image from "next/image";

const Num = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [rightNumber, setRightNumber] = useState(0);
  const [leftNumber, setLeftNumber] = useState(0);
  const [lastNumber, setLastNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the number until it reaches 20
      if (currentNumber < 20) {
        setCurrentNumber((prevNumber) => prevNumber + 1);
      } else {
        // Clear the interval when the number reaches 20
        clearInterval(interval);
      }
    }, 100); // Set the interval to 100 milliseconds

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [currentNumber]); // Re-run the effect when the currentNumber changes

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the number until it reaches 75
      if (rightNumber < 75) {
        setRightNumber((prevNumber) => prevNumber + 1);
      } else {
        // Clear the interval when the number reaches 75
        clearInterval(interval);
      }
    }, 100); // Set the interval to 100 milliseconds

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [rightNumber]); // Re-run the effect when the rightNumber changes

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the number until it reaches 20
      if (leftNumber < 15) {
        setLeftNumber((prevNumber) => prevNumber + 1);
      } else {
        // Clear the interval when the number reaches 20
        clearInterval(interval);
      }
    }, 100); // Set the interval to 100 milliseconds

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [leftNumber]); // Re-run the effect when the leftNumber changes

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the number until it reaches 20
      if (lastNumber < 6) {
        setLastNumber((prevNumber) => prevNumber + 1);
      } else {
        // Clear the interval when the number reaches 20
        clearInterval(interval);
      }
    }, 100); // Set the interval to 100 milliseconds

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [lastNumber]); // Re-run the effect when the lastNumber changes

  return (
    <div className="bg-slate-100 h-max pb-96 w-full">
      <div className="bg-white h-max w-4/5 ml-10 flex flex-col mb-5 pb-20">
        <div className="pt-10 pl-10 pb-5">
          <AiOutlineStock className="text-blue-600" size="2rem" />
          <h1 className="text-3xl font-bold pt-2 pb-1">
            {numeral(currentNumber).format("0,0")}
          </h1>
          <h6 className="text-xl">Years Of Experience</h6>
        </div>
        <div className="pt-10 pl-10 pb-5">
          <RiTeamFill className="text-blue-600" size="2rem" />
          <h1 className="text-3xl font-bold pt-2 pb-1">
            {numeral(rightNumber).format("0,0")}
          </h1>
          <h6 className="text-xl">Team Members</h6>
        </div>
        <div className="pt-10 pl-10 pb-5">
          <RiSettings2Fill className="text-blue-600" size="2rem" />
          <h1 className="text-3xl font-bold pt-2 pb-1">
            {numeral(leftNumber).format("0,0")}K
          </h1>
          <h6 className="text-xl">Hours Of Maintenance</h6>
        </div>
        <div className="pt-10 pl-10 pb-5">
          <MdPeople className="text-blue-600" size="2rem" />
          <h1 className="text-3xl font-bold pt-2 pb-1">
            {numeral(lastNumber).format("0,0")}K
          </h1>
          <h6 className="text-xl">Happy Client</h6>
        </div>
      </div>
      <div className="pt-20">
        <p className="pl-5">Current of: November 14, 2024</p>
        <Image
          src="/logo.png"
          alt="Logo"
          width={135}
          height={195}
          className="object-center object-cover p-5"
        />
        <p className="pt-2 text-center p-2 text-[#757575]">
          The Community Services Block Grant (CSBG) is a federally funded block
          grant in the Office of Community Services, Administration for Children
          and Families, United States Department of Health and Human Services
          that provides funds to states, territories, and tribes to administer
          to support services that alleviate the causes and conditions of
          poverty in under resourced communities. Tribes, territories, and over
          1,000 local Community Action Agencies provide CSBG funded services and
          activities including housing, nutrition, utility, and transportation
          assistance; employment, education, and other income and asset building
          services; crisis and emergency services; and community asset building
          initiatives, among other things. Over 9 million individuals are served
          by CSBG-funded programs annually.
        </p>
        <Image
          src="/17.png"
          alt="CSBG"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <Image
          src="/18.png"
          alt="CSBG"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <h2 className="text-4xl text-[#111518] pl-5 font-[roboto] font-bold pb-5">
          Performance Management Framework
        </h2>
        <p className="pt-2 text-center p-2 text-[#757575]">
          CSBG State and Tribal Plans are due September 1, 2023.
        </p>
        <p className="pt-2 text-center p-2 text-[#757575]">
          The State Plan Toolkit conCSBG tains state submission guidance,
          including the most recent communications, OLDC step-by-step guides and
          manuals, current OMB approved forms, fillable forms, webinars, and
          training demos.
        </p>
        <p className="pt-2 text-center p-2 text-[#757575]">
          CSBG-AT-2023-07 Tribal Plan Application FY 2024 contains tribal
          submission guidance, including plan requirements, a fillable tool, and
          training and technical support information.
        </p>
        <p className="pt-2 text-center p-2 text-[#757575]">
          Remember to check CSBG Events for upcoming events.
        </p>
        <Image
          src="/impact.png"
          alt="CSBG"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <h2 className="text-4xl text-[#111518] pl-5 font-[roboto] font-bold pb-5">
          Project Impact Grant Recipients
        </h2>
        <p className="pt-2 text-center p-2 text-[#757575]">
          Project Impact grants help organizations prepare for and respond to
          the economic and social effects of COVID-19. For more information and
          to view grant recipient abstracts, click Project Impact Grant
          Recipients.
        </p>
        <Image
          src="/news.jpeg"
          alt="CSBG"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <h2 className="text-4xl text-[#111518] pl-5 font-[roboto] font-bold pb-5">
          Need Help Finding Assistance?
        </h2>
        <p className="pt-2 text-center p-2 text-[#757575]">
          Looking for housing, employment, education, utility, or emergency
          assistance? Click Find Your CAA to find CSBG-funded Community Action
          Agencies (CAAs) in your area.
        </p>
        <p className="pt-2 text-center p-2 text-[#757575]">
          Tribal members, click CSBG Tribal Grantees
        </p>
        <h2 className="text-4xl text-[#111518] pl-5 font-[roboto] pt-16 font-bold pb-5">
          CSBG Fact Sheet
        </h2>
        <h5 className="text-lg text-[#757575] pb-5 font-serif pl-2 font-semibold">
          COMMUNITY SERVICES BLOCK GRANT (CSBG)
        </h5>
        <h6 className="text-lg text-[#757575] pb-2 font-[inter] font-semibold text-center">
          Purpose:
        </h6>
        <p className="text-lg text-[#757575] pb-5 font-[inter] text-center pl-3 pr-3">
          To support services and activities for individuals and families with
          low incomes that alleviate the causes and conditions of poverty in
          communities.
        </p>
        <h6 className="text-lg text-[#757575] pb-2 font-[inter] font-semibold text-center">
          Legislative Authority:
        </h6>
        <p className="text-lg text-[#757575] pb-5 font-[inter] text-center pl-3 pr-3">
          Community Opportunities, Accountability, and Training and Educational
          Services Human Services Reauthorization Act of 1998, P.L. 105-285
        </p>
        <h6 className="text-lg text-[#757575] pb-2 font-[inter] font-semibold text-center">
          Appropriations:
        </h6>
        <p className="text-lg text-[#757575] pb-5 font-[inter] text-center pl-3 pr-3">
          In FY 2022, Block Grant: $755 million
        </p>
        <p className="text-lg text-[#757575] pb-5 font-[inter] text-center pl-3 pr-3">
          In FY 2021, Block Grant: $745 million
        </p>
        <p className="text-lg text-[#757575] pb-5 font-[inter] text-center pl-3 pr-3">
          In FY 2020, Block Grant: $740 million
        </p>
        <p className="text-lg text-[#757575] pb-5 font-[inter] text-center pl-3 pr-3">
          In FY 2020, Coronavirus Aid, Relief, and Economic Security (CARES) Act
          Supplemental: $1 billion
        </p>
        <h6 className="text-lg text-[#757575] pb-2 font-[inter] font-semibold text-center">
          Eligible Applicants:
        </h6>
        <p className="text-lg text-[#757575] pb-5 font-[inter] text-center pl-3 pr-3">
          States, the District of Columbia, the Commonwealth of Puerto Rico,
          U.S. territories (America Samoa, Guam, Northern Mariana Islands, and
          Virgin Islands), and federally recognized tribes and tribal
          organizations.
        </p>
        <h6 className="text-lg text-[#757575] pb-2 font-[inter] font-semibold text-center">
          Target Population:
        </h6>
        <p className="text-lg text-[#757575] pb-5 font-[inter] text-center pl-3 pr-3">
          Individuals and families with low incomes as well as low-income
          communities.
        </p>
        <h6 className="text-lg text-[#757575] pb-2 font-[inter] font-semibold text-center">
          Uses:
        </h6>
        <p className="text-lg text-[#757575] pb-5 font-[inter] text-center pl-3 pr-3">
          Block Grants — States receive funds according to a statutory formula.
          In turn, states fund a network of local eligible entities with 90
          percent of their CSBG grant award. These local eligible entities
          include, but are not limited to, local governments, migrant and
          seasonal farm worker organizations, tribes and tribal organizations,
          and Community Action Agencies (CAAs). The local entities provide
          services and activities addressing employment, education, income and
          asset building services, housing, nutrition, emergency services,
          and/or healthcare based on community needs assessments conducted by
          the local entities. Examples of services provided include child/young
          adult education programs (such as Summer Education Programs and
          College-Readiness Preparation/Support), adult education programs (such
          as adult literacy classes and financial literacy education),
          transportation services, utility payments, and emergency hygiene
          assistance (such as kits and boxes). Discretionary Grants — A small
          portion of funds are reserved to support technical assistance and
          monitoring efforts of CSBG. Eligible applicants include statewide or
          local organizations, or associations with demonstrated expertise in
          providing training to individuals and organizations on methods of
          effectively addressing the needs of families and individuals with low
          income and low-income communities.
        </p>
        <h6 className="text-lg text-[#757575] pb-2 font-[inter] font-semibold text-center">
          Type of Grant:
        </h6>
        <p className="text-lg text-[#757575] pb-5 font-[inter] text-center pl-3 pr-3">
          Block and Discretionary Grants
        </p>
        <h6 className="text-lg text-[#757575] pb-2 font-[inter] font-semibold text-center">
          Program Requirements:
        </h6>
        <p className="text-lg text-[#757575] pb-5 font-[inter] text-center pl-3 pr-3">
          States must pass through no less than 90 percent of the CSBG grant
          award. Of the remaining 10 percent, states can use up to five percent
          for administrative costs and the remaining funds for projects that
          support the statutory goals of CSBG. States are also required to
          conduct a full on-site review of each local entity at least once every
          three years.
        </p>
        <h6 className="text-lg text-[#757575] pb-2 font-[inter] font-semibold text-center">
          Program Highlights:
        </h6>
        <div className="prose">
          <ul className="list-disc text-lg text-[#757575] pb-5 font-[inter] text-center pl-5 pr-3">
            <li>
              Directly funds approximately 66 tribes and tribal organizations.
            </li>
            <li>
              Approximately 1,007 eligible entities provide CSBG-funded services
              to 99 percent of the country.
            </li>
            <li>
              In FY 2020, CSBG received additional funding in the amount of $1
              billion under the Coronavirus Aid, Relief, and Economic Security
              (CARES) Act to respond to Coronavirus Disease 2019 (COVID-19)
              related needs, such as providing COVID vaccinations, personal
              protective equipment (PPE), and COVID testing.
            </li>
            <li>
              In FY 2021, CSBG funded 16 organizations across the U.S. that will
              spend 15 months exploring how the service models used to respond
              to the COVID-19 pandemic can be strengthened and adapted to meet
              ongoing and future community needs.
            </li>
            <li>
              In FY 2021, CSBG hosted their first annual CSBG Tribal Network
              Annual Meeting, an event that contributed to a 50 percent increase
              in tribal leadership participation in CSBG activities.
            </li>
            <li>
              Preliminary data indicates that CSBG grant recipients served 9.5
              million individuals and 4.8 million families, in FY 2020. Of those
              served, 11 percent were between ages 0 — 5, 22 percent were
              children between the ages of 6 — 17, and 23 percent were persons
              55 years of age and older.
            </li>
            <li>
              Over the last several years, OCS and the CSBG Network — comprised
              of CSBG eligible entities, state CSBG Lead Agencies, State
              Community Action Agency Associations, national training and
              technical assistance partners, and others — collaborated to create
              a new Performance Management Framework to increase effectiveness
              and accountability across federal, state, and local entities.
            </li>
          </ul>
        </div>
      </div>
      {/* images section  */}
      <div className="flex flex-col">
        <Image
          src="/19.jpeg"
          alt="grants"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <Image
          src="/20.jpeg"
          alt="grants"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <Image
          src="/21.jpeg"
          alt="grants"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <Image
          src="/22.jpeg"
          alt="grants"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <Image
          src="/23.jpeg"
          alt="grants"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <Image
          src="/24.jpeg"
          alt="grants"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <Image
          src="/25.jpeg"
          alt="grants"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <Image
          src="/26.jpeg"
          alt="grants"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <Image
          src="/27.jpeg"
          alt="grants"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <Image
          src="/28.jpeg"
          alt="grants"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <Image
          src="/29.jpeg"
          alt="grants"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <div className="flex flex-col items-center justify-center">
  <Image
    src="/30.jpeg"
    alt="grants"
    width={435}
    height={295}
    className="object-center object-cover p-5 mb-2"
  />
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/FMPVcWSOuHo?si=RYfLlpAV-5GJusYv"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
</div>

      </div>
    </div>
  );
};

export default Num;
