import React from 'react'

function Features({handleSearch}) {
  return (
    <div className='flex flex-wrap gap-y-5 justify-between  mt-8 mb-10'>
        <div className='basis-full sm:basis-2/6 border-1 '>
        {/* <input type="text" value="aa" className='shadow border rounded w-full py-2 px-3'/> */}
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none">
                <svg className="w-4 h-4 text-gray-700 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-3 ps-14 text-sm text-gray-900 border border-gray-300 rounded-md " placeholder="Search for a country" required onChange={handleSearch} />
           
        </div>
        </div>
        <div className='basis-2/3 sm:basis-1/3 sm:text-end'>
        <select id="currency" name="currency" className="h-full shadow border rounded py-2 px-3 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-black" placeholder="Filter by Region">
            <option value="" disabled selected>Select by Region</option>
            <option>CAD</option>
            <option>EUR</option>
        </select>
        </div>

    </div>
  )
}

export default Features