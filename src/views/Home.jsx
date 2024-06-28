import React, { useEffect, useMemo, useState } from 'react'
import Features from '../components/Features'
import Card from '../components/Card'
import { IoIosWarning } from "react-icons/io";
import { IconContext } from "react-icons";


function Home() {
  const [countries, setCountries] = useState([]);

  const [selectRegion, setSelectRegion] = useState('')
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    
    fetch('https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      setCountries(data);
      setIsLoading(false);
      
    });

   

  },[]);

  // const filteredCountries = useMemo(() => (
  //     countries.filter((country) =>
  //     country.name.common.toLowerCase().includes(search.toLowerCase())
  //     )
  //     // console.log("memo", regions);
  // ),
  //   [countries, search]
   
  // );
  const filteredCountries = useMemo(() => {
    console.log("memo", selectRegion);
    const belajar = countries.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase()) &&  country.region.toLowerCase().includes(selectRegion.toLowerCase())
      )
      console.log("hasil",belajar);
    return countries.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase()) &&  country.region.toLowerCase().includes(selectRegion.toLowerCase())
      )
      

      
  },
    [countries, search, selectRegion]
   
  );


  function handleSearch(e) {
    setSearch(e.target.value);
    console.log(e.target.value)

    // const filteredItems = countries.filter((country) =>
    //   country.name.common.toLowerCase().includes(search.toLowerCase())
    //   );

    // setCountries(filteredItems)
  }

  function handleRegion(e){
    console.log(e.target.value)
    setSelectRegion(e.target.value)
  }



  
  return (
    <div className='bg-main-light px-5 py-5  md:px-20 h-screen'>
      <Features handleSearch={handleSearch} handleRegion={handleRegion} />
      {/* {search} */}
      <div className='my-6 px-7 sm:px-0 grid sm:grid-cols-3 lg:grid-cols-4 gap-11'>
     
      {isLoading ? "loading data" : filteredCountries.length ==0 ? <div className='text-xl md:text-3xl font-bold uppercase text-orange-700 col-span-4 my-10 '><div className='w-full items-center flex flex-col gap-3'>
        <IoIosWarning size={45} />COUNTRY NOT FOUND</div></div> : filteredCountries.map((country,index)=>(<Card country={country} key={index}/>))}
      </div>
    </div>
  )
}

export default Home