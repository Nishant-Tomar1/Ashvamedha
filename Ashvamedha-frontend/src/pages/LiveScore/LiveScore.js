import "./LiveScore.scss";

import React, { useEffect, useState } from "react";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ScoreCard from "../../components/ScoreCard/ScoreCard";
import axios from "axios";
import live from "../../assests/demoPhotos/live.png";
import { useParams } from "react-router-dom";

function LiveScore() {
  const [liveScore, setLiveScore] = useState([]);
  const params = useParams();
  const { sportname } = params;
  async function fetchLiveScore() {
    try {
      const result = await axios.post(
        "https://ashvamedha.onrender.com/sport/getlivescore",
        {
          sportname: sportname.toLowerCase(),
        }
      );
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
            liveScore.map((item) => <ScoreCard info={item} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LiveScore;
