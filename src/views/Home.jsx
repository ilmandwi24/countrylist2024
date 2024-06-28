import React, { useEffect, useMemo, useState } from 'react'
import Features from '../components/Features'
import Card from '../components/Card'



function Home() {
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState('');
  useEffect(()=>{
    
    fetch('https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      setCountries(data);
      
    });
  },[]);

  const filteredCountries = useMemo(() => 
    countries.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
      ),
    [countries, search]
);


  function handleSearch(e) {
    setSearch(e.target.value);
    console.log(e.target.value)

    // const filteredItems = countries.filter((country) =>
    //   country.name.common.toLowerCase().includes(search.toLowerCase())
    //   );

    // setCountries(filteredItems)
}
  
  return (
    <div className='bg-main-light px-5 py-5  md:px-20 h-screen'>
      <Features handleSearch={handleSearch}/>
      {search}
      <div className='my-6 px-7 sm:px-0 grid sm:grid-cols-3 lg:grid-cols-4 gap-11'>
     
      {filteredCountries.length ==0 ? "loading data" : filteredCountries.map((country,index)=>(<Card country={country} key={index}/>))}
      </div>
    </div>
  )
}

export default Home