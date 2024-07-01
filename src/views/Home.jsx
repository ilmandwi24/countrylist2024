import React, { useEffect, useMemo, useRef, useState } from 'react'
import Features from '../components/Features'
import Card from '../components/Card'
import { IoIosWarning } from "react-icons/io";
import { IconContext } from "react-icons";
import "./../style.css";
import ReactPaginate from "react-paginate";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";


function Home() {
  const [countries, setCountries] = useState([]);
  const [jumlahData, setJumlahData] = useState(0);
  const [selectRegion, setSelectRegion] = useState('')
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const pageRef = useRef(null);

  const n = 8;
  const [page, setPage] = useState(0);

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

  
  const filteredCountries = useMemo(() => {
    
    console.log("memo", selectRegion);
    const jumlahNegara = countries.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase()) &&  country.region.toLowerCase().includes(selectRegion.toLowerCase())
      )
      // console.log("jml negara",jumlahNegara)
      // console.log("jml negara",typeof jumlahNegara.l)
      setJumlahData(jumlahNegara.length)
      // setPage(0);
    return countries.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase()) &&  country.region.toLowerCase().includes(selectRegion.toLowerCase())
      ).filter((item, index) => {
        return (index >= page * n) & (index < (page + 1) * n);
      });
      

      
  },
    [countries, search, selectRegion, page]
   
  );


  function handleSearch(e) {
    
  
    setPage(0)
    
    setSearch(e.target.value);
    
    
    
    console.log(e.target.value)

    
  }

  function handleRegion(e){
    console.log(e.target.value)
    console.log(page)
    
    setPage(0)
    setSelectRegion(e.target.value)
    
  }



  
  return (
    <div className=' px-5 py-3  md:px-20 h-screen bgMain'>
      <Features handleSearch={handleSearch} handleRegion={handleRegion}  />
      {/* {search} */}
      <div className='my-6 px-7 sm:px-0 grid sm:grid-cols-3 lg:grid-cols-4 gap-11'>
      
      {isLoading ? "loading data" : filteredCountries.length ==0 ? <div className='text-xl md:text-3xl font-bold uppercase bgElements textMain col-span-4 my-10 '><div className='w-full items-center flex flex-col gap-3'>
        <IoIosWarning size={45} />COUNTRY NOT FOUND</div></div> : filteredCountries.map((country,index)=>(<Card country={country} key={index}/>))}
        
      </div>
      <div className="Ap">
        <ReactPaginate
        // renderOnZeroPageCount={null}
        ref={pageRef}
        containerClassName={"pagination"}
        activeClassName={"active"}
        activeLinkClassName={"link-active"}
        pageClassName={"page-item"}
        forcePage={page}
        onPageChange={(event) => {
          console.log(event.selected);
          // if(page==0){
          //   const pagination = document.querySelector('.pagination');

          //   // Find all elements with the class 'page-item' within 'pagination'
          //             const pageItems = pagination.querySelectorAll('.page-item');

          //             // Add 'active' class to the second 'page-item' element (index 1, zero-based)
          //             if (pageItems.length > 1) {
          //                 pageItems[0].classList.add('active');
          //             }
          //             return setPage(event.selected)
          // }
          setPage(event.selected)
        }}
        // selectedPageRel={page}
        breakLabel="..."
        pageCount={Math.ceil(jumlahData / n)}
        previousLabel={
          <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
            <AiFillLeftCircle />
          </IconContext.Provider>
        }
        nextLabel={
          <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
            <AiFillRightCircle />
          </IconContext.Provider>
        }
      />
      </div>
    </div>
  )
}

export default Home