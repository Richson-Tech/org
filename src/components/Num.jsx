"use client"
import React, { useState, useEffect } from 'react';
import numeral from 'numeral';
import { AiOutlineStock } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";

const Num = () => {
  const [currentNumber, setCurrentNumber] = useState(0);

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

  return (
<div className="bg-white h-max w-full">
       <div className="flex flex-col mb-5">
         <div>
           <AiOutlineStock className="text-blue-600" size="2rem" />
           <h1>{numeral(currentNumber).format('0,0')}</h1>
         </div>
         <div>
         <RiTeamFill className="text-blue-600" size="2rem" />
         </div>
       </div>
     </div>
  );
};

export default Num;
