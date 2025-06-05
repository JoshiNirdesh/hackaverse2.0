import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import logo from '../../../../assets/logo.png' 

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        { <img src={logo} alt="logo" className='logo' />}
        <p>Company Name</p>
      </div>
      <ul className='nav-menu'>
        <li><Link to='/startups'>Startups</Link></li>
        <li><Link to='/investor'>Investors</Link></li>
        <li><Link to='/deals'>Deals</Link></li>
        <li><Link to='/about'>About</Link></li>
        
      </ul>
      <div className='nav-register'>
        <Link to='/signin'><button>Sign In</button></Link>
        <li><Link to='/investorbutton'><button className='nav-register-button'>Register</button></Link></li>
      </div>
    </div>
  )
}

export default Navbar
