import Maps from '@/components/Maps'
import React from 'react'
import { IoLocationSharp } from "react-icons/io5";

const page = () => {
  return (
    <div className='bg-blue-700 h-32 w-full pb-32'>
      <div className='flex flex-col pb-0'>
      <h2 className="text-4xl font-serif text-white text-center pt-10 font-normal">
          Our Services
        </h2>
        <Maps/>
      </div>
      <div className='flex flex-col'>
      <IoLocationSharp className="text-blue-700 pl-2" size="2.5rem" />
      </div>

    </div>
  )
}

export default page 