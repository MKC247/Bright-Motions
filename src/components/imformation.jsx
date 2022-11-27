import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Information = ()=>{

  useEffect(()=>{
    Aos.init({duration: 2000});
     }, []);

    return(
        <div className="informationContainer">
        <div className="functionServiceContainer">
        <div data-aos="fade-right" className="secondImageContainer">
            <img className="firstserviceImage" src="https://n7autorepairs.ie/wp-content/uploads/2020/02/376-3768572_mechanical-clipart-car-repair-shop-car-mechanic-clipart.png" alt=""/>
        </div>
        <div>

        <div data-aos="fade-up" className="informationFunctionContainer">
        <div></div>
        <h1>
             We offer <span className="dynamic">Premium</span> car repair services and checks
        </h1>

        <p>
        We strive to keep you in motion any day, everywhere. One of our qualified mechanics <br/>will get in touch with you immediately.
        </p>
        </div>
        </div>
        </div>




        <div className="functionServiceContainer">

        <div>

        <div data-aos="fade-right" className="informationSecondContainer">
        <h1>
        We're a <span className="dynamic">Dynamic</span> Team that offers Quality checks
        </h1>

        <p>
        CARMATE is dedicated to ensuring all car owners never experience a dull day in their ownership period.<br/> From timely repair of your
        vehicle and easy vehicle parts sourcing to towing your car.          </p>
        </div>
        </div>
        <div data-aos="flip-right" className="secondImageContainer">
            <img className="secondServiceImage" src="https://cdnwebsite.databox.com/wp-content/uploads/2020/12/01062702/about-us-page-examples.png" alt=""/>
        </div>
        </div>
     
        </div>
    )
}

export default Information;