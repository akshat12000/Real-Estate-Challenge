import React from 'react'
import './Navbar.css'

const Navbar = () => {

  // Navbar Toggler Function
  const toggler = ()=>{
    const navLinks = document.querySelector('.nav-links');
    const loginDetails = document.querySelector('.login-details');
    const icon = document.querySelector('.toggler i');
    navLinks.classList.toggle('active');
    loginDetails.classList.toggle('active');
    if(navLinks.classList.contains('active')){
      icon.classList.remove('bi-x');
      icon.classList.add('bi-list');
    }else{
      icon.classList.remove('bi-list');
      icon.classList.add('bi-x');
    }
  }

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
            <a href="/" className='active'>Rent</a>
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