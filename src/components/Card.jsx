import React from 'react'
import { Link } from "react-router-dom";
function Card(props) {
  const {flags,name, region,population,capital} = props.country;
//   console.log(name)
  return (
    <div className='rounded-md border border-gray-400 overflow-hidden shadow-lg'>
        <img className="w-full  border-solid border-b-2 " src={flags.svg} alt="Sunset in the mountains"/>
        <div className='px-5 py-7'>
        <h3 className='text-2xl font-bold mb-3'>
            <Link to={`/detail/${name.common}`}>{name.common}</Link>
            
        </h3>
        <div>
            <p><b>Population:</b> {population}</p>
            <p><b>Region:</b> {region}</p>
            <p><b>Capital:</b> {capital}</p>
        </div>
        </div>
    </div>
  )
}

export default Card