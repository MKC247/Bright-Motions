import React from "react";
import "./requestService.css";

const RequestService = () => {
     
    return (
        <div className="need-a-service-container">
        <div className="need-a-service-child">
        <h1>NEED A SERVICE</h1>
            <p>We offer diagnosis and in store repair. Need us to come to you?
            We also do door to door services. Simply add your most convenient location
            and one of our mechanics will be with you. To read more, Click the button below.</p>
            <button className="need-a-service-button">
            <a href="/library/service">NEED A SERVICE</a>
            </button>
        </div>
        </div>
    );
}
export default RequestService;