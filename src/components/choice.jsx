import React, { useEffect } from "react";
import BeenhereIcon from '@mui/icons-material/Beenhere';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import ConstructionIcon from '@mui/icons-material/Construction';
import Aos from "aos";
import "aos/dist/aos.css";

const Choice = ()=>{
  useEffect(()=>{
    Aos.init({duration: 2000})
     
  }, []);

    return(
        <div className='choiceContainerInfo'>
        <div className="mainChoiceHeader">
        <div className="choiceHeading">
            <h2>WHY CHOOSE US?</h2>
         </div>
        </div>
         <div className="choiceChildren">
          <div data-aos="flip-left" className="functionalContainer">
            <div className="muiIconsContainer">
            <DirectionsCarFilledIcon sx={{fontSize:'6rem', opacity:'0.9',}}/>
            </div>
            <div className="muiIconsContainer">
            <h3>EASY MECHANIC ACCESS</h3>
            </div>
            <p> 
            We have a team of mechanics who are always available to help you with any issues you may have. At the tap of a button 
            access our mechanics and their location.
            </p>
          </div>
          <div data-aos="fade-up" className="functionalContainer">
            <div className="muiIconsContainer">
            <ConstructionIcon sx={{fontSize:'6rem', opacity:'0.9'}} />
            </div>
            <div className="muiIconsContainer">
            <h3>EASY PARTS ACCESS</h3>
            </div>
            <div className="muiIconsContainer">
            <p>Let us hustle the spares for you. From importng your spare parts from our established foreign markets to 
               sourcing them locally.</p>
               </div>
          </div>
          <div data-aos="flip-right" className="functionalContainer">
            <div>
            <div className="muiIconsContainer">
            <BeenhereIcon sx={{fontSize:'6rem', opacity:'0.9'}}/> 
            </div>
            </div>
            <div className="muiIconsContainer">
            <h3>TRUSTED BY THOUSANDS</h3>
            </div>
            <p>Services offered with automotive love and passion qualifies CARMATE as every car owners dream mechanic.</p>
          </div>
         </div>
        </div>
    )
}
export default Choice;