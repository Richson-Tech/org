"use client";
import React from "react";
import { AiOutlineStock } from "react-icons/ai";
import { useState, useEffect } from "react";



const Num = () => {
  const [count, setCount] = useState(0);
  const targetNumber = 20;

  useEffect(() => {
    const incrementNumber = () => {
      if (count < targetNumber) {
        // Increment the count by a certain amount (adjust as needed)
        setCount((prevCount) => prevCount + 20); // Adjust the increment as needed
      }
    };

    const intervalId = setInterval(incrementNumber, 100); // Adjust the interval as needed

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <div className="bg-white h-max w-full">
      <div className="flex flex-col mb-5">
        <div>
          <AiOutlineStock className="text-blue-600" size="2rem" />
        </div>
      </div>
    </div>
  );
};

export default Num;
