import React, {useRef} from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = ()=>{
    navRef.current.classList.toggle('responsive_nav');
  }
  return (
    <div className="navbar">
      <nav className="navWrapper">
        <div className="navMenu" ref={navRef}>
          <Link className='navlink' to="/">HOME</Link>
          <Link className='navlink' to="/units">UNITS</Link>
          <Link className='navlink' to="/contact">CONTACTS</Link>
          <button className='nav-buton nav-close'  onClick={showNavbar}><CloseIcon style={{fontSize:'2rem', color:'white'}}/></button>
        </div>
        <h2><Link to='/' className='navTitle'>STUDIO.</Link></h2>
        <div className='navEnd'>
          <AccountCircleIcon/>
          <button className='navButton'><Link style={{textDecoration:"none", color:"inherit"}} to="/contact"> GET IN TOUCH</Link></button>
        </div>
       
        <button className='nav-buton'  onClick={showNavbar}>
            <MenuIcon style={{fontSize:'2rem'}}/>
        </button>
      </nav>
    </div>
  )
}

export default Navbar