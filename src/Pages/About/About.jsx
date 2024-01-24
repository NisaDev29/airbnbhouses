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
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio corrupti earum, dolore, labore laborum ad, eveniet aspernatur voluptatibus nesciunt eligendi ipsam? Tempore, hic. Architecto sit a eum, nihil obcaecati deleniti?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellat magni eum consectetur vel molestias natus tempore dolore minus ea.</p>
            <h5>Thank you for choosing us.</h5>
          </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About