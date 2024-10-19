import "./Leaderboard.scss";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import CollegeWrapper from "../../components/CollegeWrapper/CollegeWrapper.js";
import Footer from "../../components/Footer/Footer.js";
import Navbar from "../../components/Navbar/Navbar.js";
import axios from "axios";
import { setLoading } from "../../redux/appSlice.js";
// import Loader from "../../components/Loader/Loader.js"
import ComingSoon from "../../components/ComingSoon/ComingSoon.js";

function Leaderboard() {
  const [collegeScore, setCollegeScore] = useState([]);
  const isLoading = useSelector((state) => state.appReducer.isLoading);
  const dispatch = useDispatch();
  const collegeInfo = [
    {
      collegeName: "cv-raman",
      displayName: "CV RAMAN",
      collegeLogo: "",
    },
    {
      collegeName: "niser",
      displayName: "NISER",
      collegeLogo: "done",
    },
    {
      collegeName: "iitbbs-a",
      displayName: "IIT BBS-A",
      collegeLogo: "done",
    },
    {
      collegeName: "iitbbs-b",
      displayName: "IIT BBS-B",
      collegeLogo: "done",
    },
    {
      collegeName: "sbu",
      displayName: "S.B.U",
      collegeLogo: "done",
    },
    {
      collegeName: "outr",
      displayName: "OUTR",
      collegeLogo: "",
    },
    {
      collegeName: "centurion",
      displayName: "CENTURION",
      collegeLogo: "",
    },
    {
      collegeName: "aiims",
      displayName: "AIIMS",
      collegeLogo: "",
    },

    {
      collegeName: "silicon",
      displayName: "SILICON",
      collegeLogo: "",
    },
    {
      collegeName: "cet",
      displayName: "C.E.T",
      collegeLogo: "",
    },
    {
      collegeName: "git",
      displayName: "G.I.T",
      collegeLogo: "",
    },
    {
      collegeName: "ssu",
      displayName: "S.S.U",
      collegeLogo: "",
    },
    {
      collegeName: "bjb",
      displayName: "B.J.B",
      collegeLogo: "",
    },
    {
      collegeName: "bgu",
      displayName: "B.G.U",
      collegeLogo: "",
    },
    {
      collegeName: "ict",
      displayName: "I.C.T",
      collegeLogo: "",
    },
    {
      collegeName: "trident",
      displayName: "Trident technology",
      collegeLogo: "",
    },
    {
      collegeName: "iiit",
      displayName: "I.I.I.T",
      collegeLogo: "",
    },
    {
      collegeName: "gita",
      displayName: "G.I.T.A",
      collegeLogo: "",
    },
  ];
  async function fetchScore() {
    try {
      dispatch(setLoading(true));
      const ticketInfos = collegeInfo.map((item) =>
        axios.post("https://ashvamedha.onrender.com/college/score", {
          collegeName: item.collegeName,
        })
      );
      const infos = await Promise.all(ticketInfos);
      const array = infos.map((item) => (item = item.data.result));
      const sortedArray = array.sort(function (a, b) {
        return b[0] - a[0];
      });
      setCollegeScore(sortedArray);
    } catch (e) {
      console.log("error from leaderboard side", e);
    } finally {
      dispatch(setLoading(false));
    }
  }
  useEffect(() => {
    fetchScore();
  }, []);
  return (
    <div>
      <Navbar />
      
      <ComingSoon/>
    
      {/* {!isLoading ? (
        <div className="leaderboard">
          <div className="heading">
            <h2 className="text">
              <span className="h1">POINTS</span>
              <span className="h2">TABLE</span>
            </h2>
          </div>
          <div className="content">
            {collegeScore.map((item, index) => (
              <CollegeWrapper collegeInfo={item} serialNo={index} />
            ))}
          </div>
        </div>
      ) : <Loader/>} */}
      <Footer />
    </div>
    
  );
}

export default Leaderboard;
