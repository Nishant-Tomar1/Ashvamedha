import React, { useState } from "react";

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
        "https://ashvamedha.onrender.com/sport/updatelivescore",
        {
          matchname: matchName,
          sportname: sportName,
          set: setInfo,
          college1Score,
          college2Score,
        }
      );
      console.log("response of livescore", response?.data?.result);
    } catch (error) {
      console.log("response of setLive score", error);
    }
  }
  return (
    <div>
      <div>
        <form>
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
