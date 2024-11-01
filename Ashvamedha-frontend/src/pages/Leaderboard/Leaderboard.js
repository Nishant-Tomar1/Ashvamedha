import "./Leaderboard.scss";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collegeList2, server } from "../../constants.js";

import CollegeWrapper from "../../components/CollegeWrapper/CollegeWrapper.js";
import Footer from "../../components/Footer/Footer.js";
import Navbar from "../../components/Navbar/Navbar.js";
import axios from "axios";
import { setLoading } from "../../redux/appSlice.js";
import Loader from "../../components/Loader/Loader.js"
import ComingSoon from "../../components/ComingSoon/ComingSoon.js";

function Leaderboard() {
  const [loading, setLoading] = useState(true);
  const [collegeScore, setCollegeScore] = useState([]);
  async function fetchScore() {
    try {
      const ticketInfos = collegeList2.map((item) =>
        axios.post(`${server}/college/score`, {
          collegeName: item.name,
        })
      );
      const infos = await Promise.all(ticketInfos);
      const array = infos.map((item) => (item = item.data.result));
      const sortedArray = array.sort(function (a, b) {
        return b[0] - a[0];
      });
      setLoading(false)
      setCollegeScore(sortedArray);
    } catch (e) {
      console.log("error from leaderboard side", e);
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    setLoading(true)      
      fetchScore();    
},[]);
  return (
    <div>
      <Navbar />
      
      {/* <ComingSoon/> */}
    
      {!loading ? (
        <div className="leaderboard">
          <div className="heading">
            <h2 className="text">
              <span className="h1">LEADER</span>
              <span className="h2">BOARD</span>
            </h2>
          </div>
          <div className="content">
            {collegeScore.map((item, index) => (
              <CollegeWrapper collegeInfo={item} key={index} serialNo={index} />
            ))}
          </div>
        </div>
      ) : <Loader/>}
      <Footer />
    </div>
    
  );
}

export default Leaderboard;
