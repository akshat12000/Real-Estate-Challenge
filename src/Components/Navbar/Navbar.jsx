import React from 'react'
import { toggler } from '../../Utilites/Navbar'
import './Navbar.css'

const Navbar = () => {

  return (
    <div className='navbar'>
        <div className="nav-brand">
            <div className='title'>
              <i class="bi bi-buildings"></i>
              <h2>Estatery</h2>
            </div>
            <div className='toggler'>
              <i class="bi bi-x" onClick={()=>toggler()} style={{color:"#333"}}></i>
            </div>
        </div>
        <div className="nav-links">
            <a href="/" className='is-active'>Rent</a>
            <a href="/">Buy</a>
            <a href="/">Sell</a>
            <a href="/">Manage Property&nbsp;<i class="bi bi-caret-down-fill"></i></a>
            <a href="/">Resources&nbsp;<i class="bi bi-caret-down-fill"></i></a>
        </div>
        <div className='login-details'>
            <button className='login-btn'>Login</button>
            <button className='signup-btn'>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar