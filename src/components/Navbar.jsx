import React from 'react'
import { IoMoonOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className='bgElement border-b-2 flex justify-between py-6 px-5 md:px-20'>
        <h1 className='font-bold text-lg'>
            Where in the world ?
        </h1>
        <div className='font-medium inline-flex content-center items-center leading-none gap-x-1'>
          <IoMoonOutline />
          <span className='mt-0.5'>Dark Mode</span>
        </div>
    </div>
  )
}

export default Navbar