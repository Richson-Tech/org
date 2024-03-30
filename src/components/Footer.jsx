import React from 'react'

const Footer = () => {
  return (
    <footer>
       <div className="bg-[#11BF97] flex flex-col p-12 text-white">
        <h6 className="text-black font-bold text-xl text-center">Contact Us</h6>
        <p className="pt-5 pb-8 text-center text-xl font-[roboto]">
          phone: (781)2691505
        </p>
        <p className="pt-2 pb-3 text-center text-xl font-[roboto]">
          Need help or have a question?
        </p>
        <p className="pt-2 pb-3 text-center text-xl font-[roboto]">
          Contact us at:
        </p>
        <p className="pt-2 pb-3 text-center text-xl font-[roboto]">
          support@c-s-b-g.org
        </p>
      </div>
      <div className="bg-white">
        <p className="text-[#757575] font-[inter] text-center pt-3 pb-3">
          All content © 2006-2023 Community Service Block Grant, and its
          representatives. All rights reserved
        </p>
      </div> 
    </footer>
  )
}

export default Footer