import "./Hero.scss";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

function Hero() {
  const isLoading = useSelector((state) => state.appReducer.isLoading);
  const navigate = useNavigate();
  return (
    !isLoading ? (
      <div className="hero">
        <div className="container">
          <div className="content-hero">
            <div className="hero-info">
              <h1 className="ashvamedha">
                <span className="ashva">ASHVA</span>
                <span className="medha">MEDHA</span>
              </h1>
              <p className="theme">EMPOWER ENDURE EXCEL</p>
              <p className="date">4th-5th November</p>
            </div>
            <div className="buttons">
              <div className="btn1">
                <button
                  className="btn-primary"
                  onClick={() => {
                    navigate("/events");
                  }}
                >
                  REGISTER NOW
                </button>
              </div>
              <div className="btn2">
                <button className="btn-secondary">FIXTURES</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (<Loader/>)
  );
}

export default Hero;
