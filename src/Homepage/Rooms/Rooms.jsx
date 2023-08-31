import React from "react";
import './rooms.css';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
const Rooms = () => {
    return (
        <div id="Rooms">
            <h4 className="roomsSection" >OUR CATEGORIES  <KeyboardDoubleArrowDownIcon style={{color:"black"}}/></h4>
            <h2 className="roomsTitle">Choose Between Two Categories: Rooms & Apartments</h2>
            <div className="roomsWrapper">
            <div className="roomCard">
                    <img className="roomImg" src="https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""  />
                <div className="roomInfo">
                    <h2>Rooms</h2>
                    <p>Bedroom for two, with personal bathroom and street view!</p>
                    <button>View More</button>
                </div>
            </div>
            <div className="roomCard">
                    <img className="roomImg" src="https://i.pinimg.com/474x/39/02/6c/39026cc8e89a23ecfff29b37a2132d71.jpg" alt="" />
                <div className="roomInfo">
                    <h2>Apartments</h2>
                    <p>Small Apartment, with Kitchen, Bathroom and Balcony!</p>
                    <button>View More</button>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Rooms;