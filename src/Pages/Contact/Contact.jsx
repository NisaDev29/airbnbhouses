import React from 'react'
import './contact.css'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PinDropIcon from '@mui/icons-material/PinDrop';

const Contact = () => {
  return (
    <div className="contact">
    <Navbar/>   
        <h2>GET IN TOUCH</h2>
        <div className="ctWrapper">
            <div className="ctForm">
                <h3>Send a Message</h3>
                <p>Write us a message if you want to make an enquiry
                    on a property or ask us question. We will get back at 
                    you as soon as possible. Thank you in advance.
                </p>
                <form >
                    <div className='ctFormInput'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' id='name' />
                    </div>
                    <div className='ctFormInput'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' id='email' />
                    </div>
                    <div className='ctFormInput'>
                        <label htmlFor="room">Interested In:</label>
                        <select name="room" id="room">
                            <option value="single">Single Room</option>
                            <option value="double">Double Room</option>
                            <option value="studio">Studio</option>
                            <option value="apartment">Apartment</option>
                        </select>
                    </div>
                    <div className='ctFormInput'>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" name='phone' id='phone' />
                    </div>
                    <div className='ctTextArea'>
                        <label>Message</label>
                        <textarea name="message" cols="20" id="message"  rows="8"/>
                    </div>
                    <button className='ctButton'>Submit <ArrowRightAltIcon fontSize='small'/></button>
                </form>
            </div>
            <div className="ctContact">
                <h3>Contact Us</h3>
                <div className='ctContactWrapper'>
                <div className='ctMethods'>
                    <h5>Call Us</h5>
                    <p><PhoneIcon sx={{backgroundColor:"palevioletred", borderRadius:"50%", padding:"3px", marginRight:'10px'}} /> +355 69 587 634230</p>
                </div>
                <div  className='ctMethods'>
                    <h5>Email Us</h5>
                    <p><AlternateEmailIcon sx={{backgroundColor:"palevioletred", borderRadius:"50%", padding:"3px", marginRight:'10px'}}/> anisasulaj18@gmail.com</p>
                </div>
                <div  className='ctMethods'>
                    <h5>Address</h5>
                    <p><PinDropIcon sx={{backgroundColor:"palevioletred", borderRadius:"50%", padding:"3px", marginRight:'10px'}}/> Tirana, Albania</p>
                   
                </div>
                </div>
            </div>
        </div>
    <Footer/>
</div>
)

}

export default Contact