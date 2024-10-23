import "./LiveScore.scss";

import React, { useEffect, useState } from "react";

import Footer from "../../components/Footer/Footer.js";
import Navbar from "../../components/Navbar/Navbar.js";
import ScoreCard from "../../components/ScoreCard/ScoreCard.js";
import axios from "axios";
import { server } from "../../constants.js";
import live from "../../assests/demoPhotos/live.png";
import { useParams } from "react-router-dom";

function LiveScore() {
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
    } catch (err) {
      console.log("error", err);
    }
  }
  useEffect(() => {
    const interval = setInterval(fetchLiveScore, 1000);
    return () => clearInterval(interval);
  }, [params]);

  return (
    <div className="score-page">
      <Navbar />
      <div className="live-score">
        <div className="sport-name">
          <div className="name">{sportname}</div>
        </div>
        <div className="score-content">
          {liveScore.length !== 0 &&
            liveScore.map((item, index) => <ScoreCard key={index} info={item} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LiveScore;
