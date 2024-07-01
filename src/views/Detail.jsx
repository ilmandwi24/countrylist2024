import React, { useEffect, useState } from 'react'
import { PiArrowLeftBold } from "react-icons/pi";
import { Link, useParams,useLocation } from 'react-router-dom';
// import {  } from 'react-router-dom';

function Detail() {
  let { id } = useParams();
  
  const [country, setCountry] = useState({});
  const [mataUang, setMataUang] = useState('');
  const [negaraPerbatasan, setNegaraPerbatasan] = useState();
  const [bahasa, setBahasa] = useState([]);
  const [loading, setLoading] = useState(false); 

  useEffect(()=>{
    console.log(typeof id == "undefined");
    // fetch(`https://restcountries.com/v3.1/name/${id}?fields=name,population,region,capital,flags,subregion,capital,tld,currencies,languages,borders`)
    // .then((res) => {
    //   return res.json();
    // })
    // .then((data) => {
    //   console.log(data);
    //   setCountry(data);
    //   // await (getCurrency(currency));
      
    // });

    async function fetchData() {
      let data = await fetch(`https://restcountries.com/v3.1/name/${id}?fields=name,population,region,capital,flags,subregion,capital,tld,currencies,languages,borders`).then(res => {
        return res.json();
      });
      setCountry(data);
      // setCurrency(await getCurrency(data[0].currencies));
      let curr = await getCurrency(data[0].currencies)
      let bahasaData = await getBahasa(data[0].languages)
      setMataUang(curr[0].name);
      setBahasa(bahasaData);

      // FETCH CCA3
      let dataCca = await fetch(`https://restcountries.com/v3.1/all?fields=name,cca3`).then(res => {
        return res.json();
      });
      const dataBaruCca = data[0].borders.map((b)=>{
        const filteredData = dataCca.filter(item => item.cca3 === b);
        // filteredData ? console.log(filteredData[0].name.common, "ada" ,b) : console.log("kosong",b)
        if (filteredData ) return filteredData[0].name.common ;
        return null;
      })
      setNegaraPerbatasan(dataBaruCca)
    
      console.log("border",data[0].borders);
      console.log(bahasa);
    } 
    fetchData();

  },[]);

  async function getCurrency(currency){
    return Object.entries(currency).map(([currencyCode, currencyDetails]) => ({
      code: currencyCode,
      name: currencyDetails.name,
      symbol: currencyDetails.symbol
    }))
  }

  async function getBahasa(bahasa){
    return Object.entries(bahasa).map(([code, name]) => ({
      code: code,
      name: name
    }));
  }
  
  // if(country.status == 404){
  //   return "Tidak ada data"
  // }
  
  return (
    <div className='bgMain textMain px-8 py-7 md:px-20'>
      <div className='mb-5 md:my-14'>
        <Link to="/">
        <button className='inline-flex content-center items-center gap-2 px-6 py-2 shadow-md bgElements'><PiArrowLeftBold />Back</button>
        </Link>
      </div>
      <div className='mt-10'>
        {Object.keys(country).length == 0 ? "loading data" : country.status==404 ? "Tidak ditemukan" :(<div className='flex flex-wrap'>
          <div className='basis-full md:basis-5/12'>
            <img className=" bg-blue-100 border-3 shadow-lg " src={country[0].flags.svg} alt="Sunset in the mountains"/>

          </div>
          <div className='flex flex-col gap-5 mt-5 basis-full md:basis-7/12 md:px-32'>
            <h3 className='text-2xl md:text-3xl font-extrabold my-4'>{country[0].name.common}</h3>
            <div className='flex gap-5 md:gap-0 flex-wrap md:mb-8'>
              <div className='basis-full md:basis-1/2 flex flex-col gap-1 md:gap-3'>
                <p><b>Native Name:</b> {country[0].name.common}</p>
                <p><b>Population:</b> {country[0].population}</p>
                <p><b>Region:</b> {country[0].region}</p>
                <p><b>Sub Region:</b> {country[0].subregion}</p>
                <p><b>Capital:</b> {country[0].capital}</p>
                {/* {console.log("ada",getCurrency(country[0].currencies))} */}
              </div>
              <div className='my-4 md:my-0 md:basis-1/2 flex flex-col gap-1 md:gap-3'>
                <p><b>Top Level Domain:</b> .be</p>
                <p><b>Currencies:</b> {mataUang}</p>
                <p><b>Languages:</b> {bahasa.map((b,index)=>{
                  return index === bahasa.length - 1 ? b.name : b.name+', ';
                })}</p>
              </div>
            </div>
            <div className='flex flex-wrap'>
              <div className='basis-full md:basis-1/3 flex items-start'>

               <h4 className='mt-2'>Border Countries</h4>
              </div>
              <div className='inline-flex gap-3 basis-full md:basis-1/2 mt-2 text-sm flex-wrap'>
                {negaraPerbatasan && negaraPerbatasan.map(b=>(<span className=' text-center shadow-md py-1 px-3'>{b}</span>))}
                
        
              </div>
            </div>
          </div>
        </div>) }
        
        {/* card detail */}
        
      </div>
    </div>
  )
}

export default Detail