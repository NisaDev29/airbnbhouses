import React from 'react'
import './hero.css'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div id="hero">
        <div className="heroWrapper">
            <div className="heroLeft">
                <h1 className='heroTitle'>Find and Pick the <b> Best 
                    Rental Unit</b>. Adjusted to your
                    Needs and Desires. 
                </h1>
                <p className='heroSub'>We have something for everyone.
                Instant booking through the site and 
                with the best prices in the market. No 
                hidden costs. Pay at the property. 
                </p>
                <div className='heroButton'>
                <button ><Link to='/contact'>Book Now</Link></button>
                </div>
            </div>
            <div className="heroRight">
               <img src="https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero