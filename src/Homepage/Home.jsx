import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Hero from './Hero/Hero'
import Process from './Process/Process'
import Rooms from './Rooms/Rooms'
import Review from './Review/Review'
import Benefits from './Benefits/Benefits'
import CTA from './CTA/CTA'

const Home = () => {
  return (
    <div id='home'>
      <Navbar/>
      <Hero/>
      <Rooms/>
      <Benefits/>
      <Process/>
      <Review/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default Home