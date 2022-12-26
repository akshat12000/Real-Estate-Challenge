import React, { useEffect, useState } from 'react'
import DisplayCards from './Components/DisplayCards/DisplayCards';
import Navbar from './Components/Navbar/Navbar';
import Searchbar from './Components/Searchbar/Searchbar';
import data from "./Data/Housing.json"
import "./App.css"
import { filterHousesFromSearch } from './Utilites/FilteringFunction';

const intitalState = {
  location: 'all',
  price: 'all',
  type: 'all',
  name:''
}
function App() {
  const [search, setSearch] = useState(intitalState)
  const [houses,setHouses] = useState(data)

  // Setting the state according to the search
  useEffect(()=>{
      setHouses(filterHousesFromSearch(data,search))
  },[search, houses])

  return (
    <div className="App">
      <Navbar/>
      <Searchbar search={search} setSearch={setSearch} />
      <DisplayCards houses={houses}/>
    </div>
  );
}

export default App;
