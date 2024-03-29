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
      <h5 className='text-2xl text-center pt-10 font-bold'>Physical Address</h5>
      <p className='text-lg text-[#757575] pb-5 font-[inter] text-center pl-5 pr-3'>330 C Street, S.W.</p>
      <p className='text-lg text-[#757575] pb-5 font-[inter] text-center pl-5 pr-3'>Washington, D.C. 20201</p>
      </div>

    </div>
  )
}

export default page 