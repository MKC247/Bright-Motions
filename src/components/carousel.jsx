import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel
            set showThumbs={false} 
            interval={6000} 
            swipeable={true}
            infiniteLoop useKeyboardArrows autoPlay>
                <div className="carousel-Information">
                    <h1>ENGINE CHECKS</h1>
                    <ul>
                        <li>Engine oil and filter replacement</li>
                        <li>Air filter replacement</li>
                        <li>Timing belt replacement</li>
                        <li>Spark plugs replacement and change</li>
                        <li>Battery change</li>
                    </ul>
                </div>
                <div className="carousel-Information">
                    <h1>MAJOR SERVICE CHECKS</h1>
                    <ul>
                        <li>AC filter change</li>
                        <li>Armbrush replacement</li>
                        <li>Radiator coolant change</li>
                        <li>Radiator washing</li>
                        <li>Alternator replacement</li>
                    </ul>
                </div>
                <div className="carousel-Information">
                    <h1>SUSPENSION SYSTEMS</h1>
                    <ul>
                        <li>Shocks replacement</li>
                        <li>Springs replacement</li>
                        <li>Struts replacement</li>
                        <li>Bull joint replacement</li>
                        <li>Hub bearing replacement</li>
                    </ul>
                </div>
            </Carousel>
        </div>
    );
}