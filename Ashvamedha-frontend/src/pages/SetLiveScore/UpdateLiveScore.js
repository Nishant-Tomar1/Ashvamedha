import React, { useState } from "react";
import { server } from "../../constants";
import "./UpdateLiveScore.scss"
import axios from "axios";

function UpdateLiveScore() {
  const [matchName, setMatchName] = useState("");
  const [college1Score, setCollege1Score] = useState("");
  const [college2Score, setCollege2Score] = useState("");
  const [setInfo, setSetInfo] = useState("");
  const [sportName, setSportName] = useState("");
  async function handleLiveScore(e) {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${server}/sport/updatelivescore`,
        {
          matchname: matchName.toLowerCase(),
          sportname: sportName.toLowerCase(),
          set: setInfo.toLowerCase(),
          college1Score : college1Score.toLowerCase(),
          college2Score : college2Score.toLowerCase(),
        }
      );
      // console.log("response of livescore", response?.data?.result);
    } catch (error) {
      console.log("response of setLive score", error);
    }
  }
  return (
    <div>
      <div>
        <form style={{color:'white'}}>
        <h2>Update Live Score</h2>
          <div>
            <label htmlFor="matchName">Enter sport name</label>
            <input type="text" onChange={(e) => setSportName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="matchName">Enter match name</label>
            <input type="text" onChange={(e) => setMatchName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="matchName">Enter college 1 score</label>
            <input
              type="text"
              onChange={(e) => setCollege1Score(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="matchName">Enter college 2 score</label>
            <input
              type="text"
              onChange={(e) => setCollege2Score(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="matchName">Enter setDetails</label>
            <input type="text" onChange={(e) => setSetInfo(e.target.value)} />
          </div>

          <input type="submit" onClick={handleLiveScore} />
        </form>
      </div>
    </div>
  );
}

export default UpdateLiveScore;
