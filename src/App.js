import React, { useEffect, useState } from 'react'
import DisplayCards from './Components/DisplayCards/DisplayCards';
import Navbar from './Components/Navbar/Navbar';
import Searchbar from './Components/Searchbar/Searchbar';
import data from "./Data/Housing.json"
import "./App.css"

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
      const filteredHouses = data.filter((house)=>{
        if(search.location === 'all' && search.price === 'all' && search.type === 'all'){
          return house.name.toLowerCase().includes(search.name.toLowerCase())
        }else if(search.location === 'all' && search.price === 'all'){
          return house.type === search.type && house.name.toLowerCase().includes(search.name.toLowerCase())
        }else if(search.location === 'all' && search.type === 'all'){
          return house.price === search.price && house.name.toLowerCase().includes(search.name.toLowerCase())
        }else if(search.price === 'all' && search.type === 'all'){
          return house.state+","+house.country === search.location && house.name.toLowerCase().includes(search.name.toLowerCase())
        }else if(search.location === 'all'){
          console.log(house.price,search.price)
          return house.price>=search.price[0] && house.price<=search.price[1] && house.type === search.type && house.name.toLowerCase().includes(search.name.toLowerCase())
        }else if(search.price === 'all'){
          return house.state+","+house.country === search.location && house.type === search.type && house.name.toLowerCase().includes(search.name.toLowerCase())
        }else if(search.type === 'all'){
          return house.state+","+house.country === search.location && house.price>=search.price[0] && house.price<=search.price[1] && house.name.toLowerCase().includes(search.name.toLowerCase())
        }else{
          return house.state+","+house.country === search.location && house.price>=search.price[0] && house.price<=search.price[1] && house.type === search.type && house.name.toLowerCase().includes(search.name.toLowerCase())
        }
      })
      setHouses([...filteredHouses])
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
