import Image from 'next/image'
import React from 'react'

const Maps = () => {
  return (
    <div>
        <Image
            src="/map.jpeg"
            alt="grants"
            width={435}
            height={295}
            className="object-center object-cover p-5 mb-2"
          />
    </div>
  )
}

export default Maps