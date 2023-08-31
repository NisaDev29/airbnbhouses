import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navWrapper">
        <div className="navMenu">
          <Link className='navlink' to="/">HOME</Link>
          <Link className='navlink' to="/units">UNITS</Link>
          <Link className='navlink' to="/contact">CONTACTS</Link>
        </div>
        <h1>STUDIO.</h1>
        <div className='navEnd'>
          <AccountCircleIcon/>
          <button className='navButton'><Link style={{textDecoration:"none", color:"inherit"}} to="/contact"> GET IN TOUCH</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar