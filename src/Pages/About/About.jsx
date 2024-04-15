import React from 'react'
import './about.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
const About = () => {
  return (
    <div id='About'>
        <Navbar/>
        <div className='abWrapper'>
        <h1>About our Studio.</h1>
        <div className='abStory'>
          <img src="https://images.pexels.com/photos/1842863/pexels-photo-1842863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className='abText'>
          <h4>Welcome to our small business!</h4>
            <p>This is a demo website for airbnb hosts which are keen on expanding their business
              on the web for more exposure to their customer base. 
            </p>
            <p>The Airbnb website is relatively easy to navigate and it shows the main points of your units. If you
              interested in having your own website, similar to this one, please contact on us on this email.
            </p>
            <p style={{fontSize:"18px", fontWeight:"bold"}}>anisasulaj18@gmail.com</p>
            <h5>Thank you for choosing us.</h5>
          </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About