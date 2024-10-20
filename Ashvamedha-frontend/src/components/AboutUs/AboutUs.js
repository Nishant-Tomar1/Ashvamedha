import "./AboutUs.scss";
import React from "react";

import CounterUpPage from "./CounterUpPage.js";
import merch from "../../assests/aboutusassets/merch.png"
import { Link} from "react-router-dom";

function AboutUs() {
  

  return (
   (
      <div className="AboutUs" id="hello">
        
          <div className="content">
            <div className="title">
              <h1>
                <span className="title1">ABOUT </span>
                <span className="title2"> US</span>
              </h1>
            </div>
            <div className="main-body">
              <div className="description">
                <p className="para">
                Welcome to Ashvamedha, IIT Bhubaneswar's annual sports fest! Driven by our passion for sports, we aim to promote fitness, competition, and camaraderie. More than just a sports event, Ashvamedha celebrates teamwork and sportsmanship.
                </p>
                <p className="para">
                This year, we offer a wide range of activities for all skill levels. Whether you’re a seasoned athlete or just looking for fun, Ashvamedha has something for everyone.
                </p>
                <p className="para">
                Join us for an exciting week of sports, competition, and celebration, and help make Ashvamedha 2024 an unforgettable experience!
                </p>
              </div>
            </div>
          </div>
          <div className="counter">
            <CounterUpPage />
          </div>

          <div className="content">
            <div className="title">
              <h1>
                <span className="title1">OUR </span>
                <span className="title2"> MERCHANDISE</span>
              </h1>
            </div>
            
          </div>
          <div className="merchbox">
            <div className="ath">
              <img src={merch} alt="tshirt" />
            </div>
            <div className="buttondiv">
                          <Link
                            to="https://forms.gle/iap77hortfY7i6jf8"
                            className="btn-primary"
                          >
                             GET YO<span style={{color : "white"}}>UR MERCH!!</span>
                          </Link>
            </div>
          </div>
      </div>
    )
  );
}

export default AboutUs;
