import React, { useEffect, useState } from 'react'

function Features({handleSearch, handleRegion}) {
    const [regions, setRegions] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all?fields=region')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          const hasil = uniqueRegion(data);
          console.log(hasil);
          setRegions(hasil)
    
          
        });
    },[])

  
  function handleChange(e) {
    alert(e.target.value)
  }

  function uniqueRegion (array) {
    let uniqueSet = new Set(array.map(item => JSON.stringify(item)));
    let uniqueArray = Array.from(uniqueSet).map(item => JSON.parse(item));
    let hasil = uniqueArray.sort((a, b) => a.region.localeCompare(b.region));
    return hasil;
  }
  return (
    <div className='flex flex-wrap gap-y-5 justify-between  mt-8 mb-10'>
        <div className='basis-full sm:basis-2/6 border-1 '>
        {/* <input type="text" value="aa" className='shadow border rounded w-full py-2 px-3'/> */}
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none">
                <svg className="w-4 h-4 text-gray-700 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-3 ps-14 bgElement shadow-md  rounded-md  " placeholder="Search for a country" required onChange={handleSearch} />
           
        </div>
        </div>
        <div className='basis-autp sm:basis-1/3 sm:text-end select-wrapper'>
        <select id="currency" name="currency" className="h-full shadow-md bgElement rounded py-2 pl-3 pr-6 sm:text-sm appearance-none " onChange={handleRegion} >
            <option value=""  selected>Select by Region</option>
            {regions != 0 && regions.map((reg, index) => <option key={index} value={reg.region}>{reg.region}</option>)}
           
            {/* <option>EUR</option> */}
        </select>
        </div>

    </div>
  )
}

export default Features