import React from 'react'
import './about.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
const About = () => {
  return (
    <div id='About'>
        <Navbar/>
        <div className='abWrapper'>
        <h1>About our Us</h1>
        <h4>Welcome to our small business!</h4>
        </div>
        <Footer/>
    </div>
  )
}

export default About