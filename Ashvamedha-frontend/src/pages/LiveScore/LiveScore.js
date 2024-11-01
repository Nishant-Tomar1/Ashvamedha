import "./LiveScore.scss";

import React, { useEffect, useState } from "react";

import Footer from "../../components/Footer/Footer.js";
import Navbar from "../../components/Navbar/Navbar.js";
import ScoreCard from "../../components/ScoreCard/ScoreCard.js";
import axios from "axios";
import { server } from "../../constants.js";
import live from "../../assests/demoPhotos/live.png";
import { useParams } from "react-router-dom";
import { setLoading } from "../../redux/appSlice.js";
import {  useDispatch } from "react-redux";
import ComingSoon from "../../components/ComingSoon/ComingSoon.js"

function LiveScore() {
  const [text, setText] = useState("Searching for live matches ...");
  const dispatch = useDispatch();
  const [liveScore, setLiveScore] = useState([]);
  const params = useParams();
  const { sportname } = params;
  async function fetchLiveScore() {
    try {
      const result = await axios.post(
        `${server}/sport/getlivescore`,
        {
          sportname: sportname.toLowerCase(),
        }
      );
      // console.log(result.data.result.liveScoreInfo);
      
      setLiveScore(result.data.result.liveScoreInfo);
      
    dispatch(setLoading(false));
    } catch (err) {
      
    dispatch(setLoading(false));
      console.log("error", err);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if(!liveScore.length) setText("No live matches present")
    }, 4000);
    dispatch(setLoading(true));
    const interval = setInterval(fetchLiveScore, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="score-page">
      <Navbar />
      <>
        <div className="live-score">
            {liveScore.length !== 0 &&
          <div className="sport-name">
            <div className="name">
              <span> <img src={live} className="live" alt="" /></span>
            {sportname} </div>
          </div>}
          <div className="score-content">
            {liveScore.length !== 0 ?
              liveScore.map((item, index) => <ScoreCard key={index} info={item} />)
              :
            <div style={{minHeight:"75vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",textAlign:"center",fontSize:"30px",color:"orangered"}}>
                  <br />
              {text} </div>}
          </div>
        </div>
      </>
      {/* <ComingSoon/> */}
      <Footer />
    </div>
    
  );
}

export default LiveScore;
