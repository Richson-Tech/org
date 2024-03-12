"use client"
import React, { useState, useEffect } from 'react';
import numeral from 'numeral';
import { AiOutlineStock } from "react-icons/ai";
import { RiTeamFill,RiSettings2Fill } from "react-icons/ri";
import { MdPeople } from "react-icons/md";


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
<div className="bg-slate-200 h-max w-full">
       <div className="bg-white h-max w-4/5 ml-10 flex flex-col mb-5">
         <div className='pt-10 pl-10 pb-5'>
           <AiOutlineStock className="text-blue-600" size="2rem" />
           <h1 className='text-3xl font-bold pt-2'>{numeral(currentNumber).format('0,0')}</h1>
           <h6 className='text-xl'>Years Of Experience</h6>
         </div>
         <div className='pt-10 pl-10 pb-5'> 
         <RiTeamFill className="text-blue-600" size="2rem" />
         <h1 className='text-3xl font-bold'>{numeral(rightNumber).format('0,0')}</h1>
         <h6 className='text-xl'>Team amaembers</h6>
         </div>
         <div className='pt-10 pl-10 pb-5'>
         <RiSettings2Fill className="text-blue-600" size="2rem" />
         <h1 className='text-3xl font-bold'>{numeral(leftNumber).format('0,0')}K</h1>
         <h6 className='text-xl'>Hours Of Maintenance</h6>
         </div>
         <div className='pt-10 pl-10 pb-5'>
         <MdPeople className="text-blue-600" size="2rem" />
         <h1 className='text-3xl font-bold'>{numeral(lastNumber).format('0,0')}K</h1>
         <h6 className='text-xl'>Happy Client</h6>
         </div>
       </div>
     </div>
  );
};

export default Num;
