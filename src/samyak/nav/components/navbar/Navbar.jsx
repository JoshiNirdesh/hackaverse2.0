import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import logo from '../../../../assets/logo.png'; 

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="logo" className='logo' />
        <p>Company Name</p>
      </div>

      <ul className='nav-menu'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/startups'>Startups</Link></li>
        <li><Link to='/investor'>Investors</Link></li>
        <li><Link to='/deals'>Deals</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>

      <div className='nav-register'>
        <Link to='/signin'><button>Sign In</button></Link>
        <button className='nav-register-button' onClick={() => navigate('/register')}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
