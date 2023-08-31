import React from "react";
import './process.css';
import step1 from '../../Assets/Images/process1.png'
import step2 from '../../Assets/Images/process2.png'
import step3 from '../../Assets/Images/process3.png'
import step4 from '../../Assets/Images/process4.png'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import {Link} from 'react-router-dom'
const Process = () => {
    const Steps = [
        {
            step:"CHEKOUT THE UNITS",
            message:"Take a look at our rental units and find the one most suitable to you."
        },
        {
            step:"MAKE INQUARY",
            message:"Message us for your prefered checkin and checkout days and unit you would like to book."
        },
        {
            step:"RESERVATION APPROVED",
            message:"The reservation is approved only we send you an confirmation email or message."
        },
        {
            step:"CHECKIN DATE",
            message:"After the checkin, you make the payment and the host explains the last steps in the process. "
        },
     ]
    return (
       <div id="Process">
        <h4 className="processSub">HOW IT WORKS <KeyboardDoubleArrowDownIcon style={{color:"black"}}/></h4>
        <h2 className="processHeader">Find Your Perfect House in 3 Simple Steps</h2>
        <div className="processWrapper">
            <div className="stepsCard">
                <div className="stepIcon">
                    <img src={step1} alt="" />
                    <span>1</span>
                </div>
                <h1>{Steps[0].step}</h1>
                <p>{Steps[0].message}</p>
            </div>
            <div className="stepsCard">
                <div className="stepIcon">
                <img src={step2} alt="" />
                    <span>2</span>
                </div>
                <h1>{Steps[1].step}</h1>
                <p>{Steps[1].message}</p>
            </div>
            <div className="stepsCard">
                <div className="stepIcon">
                <img src={step3} alt="" />
                    <span>3</span>
                </div>
                <h1>{Steps[2].step}</h1>
                <p>{Steps[2].message}</p>
            </div>
            <div className="stepsCard">
                <div className="stepIcon">
                <img src={step4} alt="" />
                    <span>4</span>
                </div>
                <h1>{Steps[3].step}</h1>
                <p>{Steps[3].message}</p>
            </div>
        </div>
        <button className="processButton"><Link to="/units" style={{textDecoration:"none", color:"inherit"}}>Check Out Our Units Now</Link></button>
       </div>
    )
}
export default Process;