import React, { useState } from 'react'
import './singledesc.css'
import {TabPanel, TabContext, TabList} from '@mui/lab';
import {Box, Tab} from '@mui/material';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PeopleIcon from '@mui/icons-material/People';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import NoiseControlOffOutlinedIcon from '@mui/icons-material/NoiseControlOffOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';

const SingleDesc = () => {
    const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="dhomaBottom">
                <Box>
                    <TabContext value={value}>
                        <Box width="85%" margin="auto"  sx={{borderBottom: 1, borderColor:"divider"}}>
                            <TabList  
                                    centered onChange={handleChange}>
                                <Tab value="1" label='DESCRIPTION' />
                                <Tab value="2" label='HOUSE RULES' />
                                <Tab value="3" label='REVIEWS' />
                            </TabList>
                        </Box>
                        <TabPanel default className="dhomaTabPanel" value="1">
                            <div className="dhomaTabDesc">
                                <h3 className="dhomaTabTitle">DESCRIPTION</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate placeat, asperiores quo adipisci totam modi ipsa assumenda voluptas doloribus. Soluta nesciunt, exercitationem earum corporis sapiente officia incidunt quae mollitia expedita?</p>
                            </div>
                            <div className="dhomaTabDetails">
                                <h3 className="dhomaTabTitle">DETAILS</h3>
                                <div className="dhomaTabList">
                                <ul>
                                    <li>Room:</li>
                                    <li>Bathroom:</li>
                                    <li>Fridge:</li>
                                    <li>Balcony:</li>
                                </ul>
                                <ul>
                                    <li>1</li>
                                    <li>Yes</li>
                                    <li>1</li>
                                    <li>No</li>
                                </ul>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel className="dhomaTabPanel" value="2">
                            <div className="dhomaRules">
                            <h3 className="dhomaTabTitle">HOUSE RULES</h3>
                            <div className="dhomaRule">
                                <div>
                                    <LoginOutlinedIcon fontSize="small"/><b> CHECK-IN :</b>2PM
                                </div>
                                <div>
                                    <LogoutOutlinedIcon fontSize="small"/><b> CHECK-OUT :</b>11AM
                                </div>
                                <div>
                                    <PeopleIcon fontSize="small"/><b> MAX GUESTS :</b>  2
                                </div>
                                <div>
                                    <PetsOutlinedIcon fontSize="small"/><b> PETS : </b> NOT ALLOWED
                                </div>
                                <div>
                                    <CelebrationOutlinedIcon fontSize="small"/><b> PARTIES : </b> NOT ALLOWED
                                </div>
                                <div>
                                    <NoiseControlOffOutlinedIcon fontSize="small"/><b> QUIET AFTER 10PM</b>
                                </div>
                            </div>
                            </div>
                           
                            <div className="dhomaFacilities">
                            <h3 className="dhomaTabTitle">FACILITIES</h3>
                            <div className="dhomaFacility">
                            <div className='dhomaEachFacility'>
                               <span><FreeBreakfastIcon/><b> BREAKFAST</b></span>
                                <h4>Free Breakfast</h4>
                                <p>Croissant, Coffee, Tea, Fruit and Juice</p>
                            </div>
                            <div className='dhomaEachFacility'>
                                <span><WifiOutlinedIcon/><b> WIFI</b></span>
                                <h4>WiFi is available in all areas and is free of charge</h4>
                            </div>
                            <div className='dhomaEachFacility'>
                                <span><LocalParkingOutlinedIcon/><b> PARKING</b></span>
                                <h4>Free Parking on Premise</h4>
                            </div>
                            <div className='dhomaEachFacility'>
                                <span><TranslateOutlinedIcon/><b> LANGUAGES SPOKEN</b></span>
                                <ul style={{listStyleType:"circle"}}>
                                <li>English</li>
                                <li>Italian</li>
                                <li>French</li>
                                </ul>
                            </div>
                            <div className='dhomaEachFacility'>
                                <span><InfoOutlinedIcon/><b> GENERAL</b></span>
                                <ul style={{listStyleType:"circle"}}>
                                <li>Air conditioning</li>
                                <li>Flat-screen TV</li>
                                <li>Wardrobe or closet</li>
                                <li>Free toiletries</li>
                                <li>Seating Area</li>
                                <li>Safety deposit box</li>
                                </ul>
                            </div>
                            </div>
                            </div>
                        </TabPanel>
                        <TabPanel className="dhomaTabPanel" value="3">REVIEWS</TabPanel>
                    </TabContext>
                    </Box>
                </div>
  )
}

export default SingleDesc