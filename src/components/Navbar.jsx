import React, { useEffect, useState } from 'react'
import { IoMoonOutline } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";


function Navbar() {
  const [iconDark, setIconDark]= useState(false);
  useEffect(()=>{
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIconDark(true);
  
    } else {
      document.documentElement.classList.remove('dark');
      setIconDark(false)
    }
  },[])
  
  function changeTheme(){

    if(iconDark){
      setIconDark(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setIconDark(true);
      document.documentElement.classList.add("dark");
     localStorage.setItem("theme", "dark");

    }
  }


  return (
    <div className='bgElement shadow-md mb-3 flex justify-between py-6 px-5 md:px-20'>
        <h1 className='font-bold text-lg'>
            Where in the world ?
        </h1>
        <div className='font-medium inline-flex content-center items-center leading-none gap-x-1'>
          <button onClick={()=>changeTheme()}>
          {iconDark ? <IoMoon/> :<IoMoonOutline/>}
          </button>
          <span className='mt-0.5'>Dark Mode</span>
        </div>
    </div>
  )
}

export default Navbar