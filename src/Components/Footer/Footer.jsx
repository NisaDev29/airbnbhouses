import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { FacebookOutlined, Instagram, Pinterest, Web } from '@mui/icons-material'
const Footer = () => {
  return (
    <div id="Footer">
      <div className="footerWrapper">
        <div className="footerLeft">
          STUDIO.
        </div>
        <div className="footerCenter">
          <ul>
            <li><Link to='/' style={{textDecoration:"none", color:"inherit"}}>Home</Link></li>
            <li><Link to='/' style={{textDecoration:"none", color:"inherit"}}>About</Link></li>
            <li><Link to='/units' style={{textDecoration:"none", color:"inherit"}}>Units</Link></li>
            <li><Link to='/contact' style={{textDecoration:"none", color:"inherit"}}>Contact</Link></li>
          </ul>
        </div>
        <div className="footerSocials">
          <ul>
            <li className='facebook'><FacebookOutlined/></li>
            <li className='insta'><Instagram/></li>
            <li className='pinterest'><Pinterest/></li>
            <li className='web'><Web/></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer