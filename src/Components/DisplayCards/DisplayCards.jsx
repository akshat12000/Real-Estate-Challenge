import React from 'react'
import Card from '../Card/Card'
import './DisplayCards.css'


const DisplayCards = ({houses}) => {
    
  return (
    <div className='card-container'>
        {houses?.length ? houses.map(house=>(
            <div>
                <Card house={house}/>
            </div>
        )):<div>No houses found!</div>}
    </div>
  )
}

export default DisplayCards