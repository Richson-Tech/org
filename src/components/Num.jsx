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
        <p className="pt-2 text-center p-2">
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
          alt="Logo"
          width={135}
          height={195}
          className="object-center object-cover p-5"
        />
        <Image
          src="/18.png"
          alt="Logo"
          width={135}
          height={195}
          className="object-center object-cover p-5"
        />
      </div>
    </div>
  );
};

export default Num;
