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
        <p className="pt-2 text-center p-2 text-[#757575]">CSBG State and Tribal Plans are due September 1, 2023.</p>
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
        <p className="pt-2 text-center p-2 text-[#757575]">Remember to check CSBG Events for upcoming events.</p>
        <Image
          src="/impact.png"
          alt="CSBG"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <h2 className="text-4xl text-[#111518] pl-5 font-[roboto] font-bold pb-5">Project Impact Grant Recipients</h2>
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
        <h2 className="text-4xl text-[#111518] pl-5 font-[roboto] font-bold pb-5">Need Help Finding Assistance?</h2>
        <p className="pt-2 text-center p-2 text-[#757575]">
          Looking for housing, employment, education, utility, or emergency
          assistance? Click Find Your CAA to find CSBG-funded Community Action
          Agencies (CAAs) in your area.
        </p>
        <p className="pt-2 text-center p-2 text-[#757575]">Tribal members, click CSBG Tribal Grantees</p>
      </div>
    </div>
  );
};

export default Num;
