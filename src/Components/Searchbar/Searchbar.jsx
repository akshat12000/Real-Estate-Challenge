import React, { useEffect, useState } from 'react'
import './Searchbar.css'
import data from "../../Data/Housing.json"

const Searchbar = ({search,setSearch}) => {
  const [location, setLocation] = useState('all')
  const [price, setPrice] = useState('all')
  const [type, setType] = useState('all')
  const [searchName,setSearchName] =  useState('')
  const [address,setAddress] = useState([])
  
  const searchHandler = ()=>{
    setSearch({
      location:location,
      price:price==="all"?"all":[parseInt(price.split('-')[0]),parseInt(price.split('-')[1])],
      type:type,
      name:searchName
    })
    // console.log(search)
  
  }

  useEffect(()=>{
    const dupAddress = data.map(house=>house.state+","+house.country)
    const uniqueAddress = [...new Set(dupAddress)]
    setAddress(uniqueAddress)
  },[])

  return (
    <div className='searchbar'>
        <div className='search-top'>
            <h1>Search Properties to Rent</h1>
            <input type="search" value={searchName} onChange={(e)=>setSearchName(e.target.value)} placeholder='Write house name here ...'/>
        </div>
        <div className='search-bottom'>
            <div>
              <label htmlFor='Location'>Location</label>
              <select name='Location' value={location} onChange={(e)=>setLocation(e.target.value)} id='Location'>
                <option value='all'>All</option>
                {address.map(house=>(
                  <option value={house}>{house}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor='When'>When</label>
              <input type="date"/>
            </div>
            <div>
              <label htmlFor='Price'>Price</label>
              <select name='Price' value={price} onChange={(e)=>setPrice(e.target.value)} id='Price'>
                <option value='all'>All</option>
                <option value='100-900'>$100-$900</option>
                <option value='1000-1900'>$1000-$1900</option>
                <option value='2000-2900'>$2000-$2900</option>
                <option value='3000-3900'>$3000-$3900</option>
              </select>
            </div>
            <div>
              <label htmlFor='Type'>Property Type</label>
              <select name='Type' value={type} onChange={(e)=>setType(e.target.value)} id='Type'>
                <option value='all'>All</option>
                <option value='Residential'>Residential</option>
                <option value='Commercial'>Commercial</option>
                <option value='Agricultural'>Agricultural</option>
                <option value='Industrial'>Industrial</option>
              </select>
            </div>
            <div>
              <button onClick={()=>searchHandler()} className='search-btn'>Search</button>
            </div>
        </div>
    </div>
  )
}

export default Searchbar