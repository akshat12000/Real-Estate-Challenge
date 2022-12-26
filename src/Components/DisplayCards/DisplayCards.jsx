import React from 'react'
import Card from '../Card/Card'
import './DisplayCards.css'


const DisplayCards = ({houses}) => {
    
  return (
    <div className='card-container'>
        {houses.map(house=>(
            <div>
                <Card house={house}/>
            </div>
        ))}
    </div>
  )
}

export default DisplayCards