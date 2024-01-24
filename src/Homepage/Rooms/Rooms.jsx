import React from "react";
import './rooms.css';
import { Link } from "react-router-dom";
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
                    <h3>Rooms</h3>
                    <p>Bedroom for two, with personal bathroom and street view!</p>
                    <button><Link to='/units'>View More</Link></button>
                </div>
            </div>
            <div className="roomCard">
                    <img className="roomImg" src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className="roomInfo">
                    <h3>Apartments</h3>
                    <p>Small Apartment, with Kitchen, Bathroom and Balcony!</p>
                    <button><Link to='/units'>View More</Link></button>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Rooms;