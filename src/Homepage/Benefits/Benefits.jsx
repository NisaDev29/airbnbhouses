import React from 'react';
import './benefits.css';
import { WorkRounded } from '@mui/icons-material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import BedIcon from '@mui/icons-material/Bed';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

const Benefits = () => {
  return (
        <div id="Benefits">
            <div className="bfWrapper">
                <div className="bfLeft">
                    <img loading='lazy' src="https://i.pinimg.com/564x/14/af/11/14af114936a8fc368cbe95d68d3eccf9.jpg" alt="" />
                </div>
                <div className="bfRight">
                    <h4 className='bfSub'>BENEFITS <KeyboardDoubleArrowDownIcon style={{color:"black"}}/></h4>
                    <h2 className='bfTitle'>Why You Should Pick Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A fuga labore ut maxime deleniti iure recusandae consectetur sint eius pariatur?</p>
                    <div className='bfCards'>
                        <div className="bfEach">
                            <span><SupportAgentOutlinedIcon /></span>
                            <div className='bfFeature'>
                                    <h3>Great Service</h3>
                                    <p>We are always at your back and call 24h service for all our guests.</p>
                            </div>
                        </div> 
                        <div className="bfEach">
                            <span><BedIcon/></span>
                            <div className='bfFeature'>
                                    <h3>Comfortable Stay</h3>
                                    <p>You will never hear our guests complain about our units comfort and relax.</p>
                            </div>
                        </div>
                        <div className="bfEach">
                            <span><PaidOutlinedIcon /></span>
                            <div className='bfFeature'>
                                    <h3>Great Value</h3>
                                    <p>The best value to price ratio in Tirana. Quality at the best price.</p>
                            </div>
                        </div>
                        <div className="bfEach">
                            <span><Diversity1OutlinedIcon/></span>
                            <div className='bfFeature'>
                                    <h3>Something For Everyone</h3>
                                    <p>We have something for everyone. Singles, Couple and More.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Benefits;