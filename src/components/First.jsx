import Image from 'next/image'
import React from 'react'

const First = () => {
  return (
    <div className='bg-blue-700 h-80'>
        <h4 className='text-4xl pt-10 pl-16 text-white'>Our Services</h4>
        <div className='flex flex-col'>
        <Image
              src="/1.jpeg"
              alt="grants"
              width={435}
              height={295}
              className="object-center object-cover p-5"
            />
        <Image
              src="/1.jpeg"
              alt="grants"
              width={435}
              height={295}
              className="object-center object-cover p-5"
            />
        <Image
              src="/1.jpeg"
              alt="grants"
              width={435}
              height={295}
              className="object-center object-cover p-5"
            />
        <Image
              src="/1.jpeg"
              alt="grants"
              width={435}
              height={295}
              className="object-center object-cover p-5"
            />
        <Image
              src="/1.jpeg"
              alt="grants"
              width={435}
              height={295}
              className="object-center object-cover p-5"
            />
        </div>
    </div>
  )
}

export default First