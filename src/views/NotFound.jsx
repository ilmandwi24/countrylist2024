import React from 'react'
import { Link } from 'react-router-dom'
import { PiArrowLeftBold } from "react-icons/pi";

function NotFound() {
  return (
    <div className='flex flex-col '>
        <div className='mb-5 mx-20 md:my-14'>
            <Link to="/">
            <button className='inline-flex content-center  items-center gap-2 px-6 py-2 shadow-md bg-slate-100'><PiArrowLeftBold />Back</button>
            </Link>
        </div>
        <h3 className='text-3xl text-orange-600 font-medium text-center'>Page Not Found</h3>
        
    </div>
  )
}

export default NotFound