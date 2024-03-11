// "use client";
// import React from "react";
// import { AiOutlineStock } from "react-icons/ai";
// import { useState, useEffect } from "react";
// import numeral from "numeral";



// const Num = () => {
//   const [count, setCount] = useState(0);
//   const targetNumber = 20;

//   useEffect(() => {
//     const incrementNumber = () => {
//       if (count < targetNumber) {
//         // Increment the count by a certain amount (adjust as needed)
//         setCount((prevCount) => prevCount + 20); // Adjust the increment as needed
//       }
//     };

//     const intervalId = setInterval(incrementNumber, 100); // Adjust the interval as needed

//     // Cleanup function to clear the interval when the component unmounts
//     return () => clearInterval(intervalId);
//   }, [count]);

//   return (
//     <div className="bg-white h-max w-full">
//       <div className="flex flex-col mb-5">
//         <div>
//           <AiOutlineStock className="text-blue-600" size="2rem" />
//           <h1>{numeral(count).format("0,0")}</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Num;

"use client"
import React, { useState, useEffect } from 'react';
import numeral from 'numeral';

const NumberLoadingComponent = () => {
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
    }, 100); // Set the interval to 1000 milliseconds (1 second)

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [currentNumber]); // Re-run the effect when the currentNumber changes

  return (
    <div>
      <p>Loading Numbers:</p>
      <p>{numeral(currentNumber).format('0,0')}</p>
    </div>
  );
};

export default NumberLoadingComponent;
