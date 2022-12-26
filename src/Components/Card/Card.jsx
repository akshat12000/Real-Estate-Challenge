import React from 'react'
import './Card.css'
import { FaBed,FaBath,FaSquare} from "react-icons/fa"

const Card = ({house}) => {
  return (
    <div className='card'>
        <div className='card-image'>
            <img src={house.image} alt="house"/>
        </div>
        <div className='content-div'>
            <h3>${house.price}<span>/month</span></h3>
            <h3>{house.name}</h3>
            <p>{`${house.address},${house.city},${house.state},${house.country} ${house.zip}`.substring(0,25)} ...</p>
        </div>
        <div className='footer-div'>
            <p><FaBed color='#a861ff'/> {house.bedrooms} beds</p>
            <p><FaBath color='#a861ff'/> {house.bathrooms} bathrooms</p>
            <p><FaSquare color='#a861ff'/> {house.area} sqft</p>
        </div>
    </div>
  )
}

export default Card