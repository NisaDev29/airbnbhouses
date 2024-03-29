import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import './single.css';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShowerIcon from '@mui/icons-material/Shower';
import KitchenIcon from '@mui/icons-material/Kitchen';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import EuroIcon from '@mui/icons-material/Euro';
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PinterestIcon from '@mui/icons-material/Pinterest';
import SimilarRooms from "../../Components/SimilarRooms/SimilarRooms";
import SingleDesc from "../../Components/SingleDesc/SingleDesc";
import { useState } from "react";

const Dhoma = () => {
  
    const [images, setImages] = useState({
        img1 :"https://i.pinimg.com/564x/a2/2e/6b/a22e6b072ab387bed0d9a65bd92d4ce3.jpg",
        img2 : "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img3 : "https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img4 : "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    })

    const [activeImg, setActiveImage] = useState(images.img1)

    return (
        <div className="dhoma">
             <Navbar/>
            <div className="dhomaWrapper">
                <div className="dhomaTop">
                    <div className="dhomaImg">
                        <img className="dhomaMainImg" src={activeImg} alt="" />
                        <div className="dhomaOtherImages">
                            <ul>
                                <li><img src={images.img1} alt="" onClick={() => setActiveImage(images.img1)} /></li>
                                <li><img src={images.img2} alt="" onClick={() => setActiveImage(images.img2)}/></li>
                                <li><img src={images.img3} alt="" onClick={() => setActiveImage(images.img3)}/></li>
                                <li><img src={images.img4} alt="" onClick={() => setActiveImage(images.img4)}/></li>
                            </ul>
                        </div>
                    </div>
                    <div className="dhomaText">
                        <span className="dhomaCategory">DOUBLE ROOM </span>
                        <h2 className="dhomaTitle">DOUBLE ROOM WITH A STREET VIEW</h2>
                        <p className="dhomaSubText">Most popular unit amoung our guests.
                                Best suited for couple. Equiped with personal bathroom and fridge.
                                Perfect for a few days in Tirana.</p>
                        <div className="dhomaRating"> 
                        <span><StarIcon /><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/></span> 
                        <span style={{textDecoration:"underline"}} >98 Reviews</span>
                        </div>
                        <span className="dhomaPrice"><EuroIcon/> 40</span>
                        <div className="dhomaIncludes">
                            <h5>Includes:</h5>
                            <div>
                            <span className="dhomaIncl"><ShowerIcon/> Indoor Bathroom</span>
                            <span className="dhomaIncl"><KitchenIcon/> Small Fridge</span>
                            <span className="dhomaIncl"><FreeBreakfastIcon/> Small Breakfast</span>
                            </div>
                        </div>
                        <div className="dhomaActions">
                        <button type="button" className="dhomaButton"><CallIcon fontSize="small"/>  CONTACT HOST</button>
                        <span className="dhomaFavorite"><FavoriteBorderIcon/></span>
                        </div>
                        <div className="dhomaShare">
                            <span>Share: <InstagramIcon fontSize="small"/> <FacebookOutlinedIcon fontSize="small"/> <WhatsAppIcon fontSize="small"/> <PinterestIcon fontSize="small"/> 
                            </span>
                        </div>
                    </div>
                </div>
                <SingleDesc/>
                <SimilarRooms/>
            </div>
             <Footer/>
        </div>
    )
}

export default Dhoma;