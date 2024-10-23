import React, { useState } from "react";
import { server } from "../../constants";
import "./UpdateLiveScore.scss"
import axios from "axios";
import { useLogin } from "../../context/loginContextProvider";

function UpdateLiveScore() {
  const [matchName, setMatchName] = useState("");
  const [college1Score, setCollege1Score] = useState("");
  const [college2Score, setCollege2Score] = useState("");
  const [setInfo, setSetInfo] = useState("");
  const loginCtx = useLogin();
  const sportName = loginCtx.isLoggedIn ? loginCtx.sport :"";
  async function handleLiveScore(e) {
    e.preventDefault();
    
    try {
      await axios.put(
        `${server}/sport/updatelivescore`,
        {
          matchname: matchName.toLowerCase(),
          sportname: sportName.toLowerCase(),
          set: setInfo.toLowerCase(),
          college1Score : college1Score.toLowerCase(),
          college2Score : college2Score.toLowerCase(),
        }
      );
      // console.log(res);
      
      // console.log("response of livescore", response?.data?.result);
    } catch (error) {
      console.log("response of setLive score", error);
    }
  }
  return (
    <div className='adminlogin'>
      {loginCtx.isLoggedIn ? 
      <div>
        <form style={{color:'white'}} onSubmit={handleLiveScore}>
        <h2>Update Live Score</h2>
          <div>
            <label htmlFor="matchName">SportName  </label>
            <input type="text" value={sportName} readOnly />
          </div>
          <div>
            <label htmlFor="matchName">Enter match name</label>
            <input type="text" required onChange={(e) => setMatchName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="matchName">Enter college 1 score</label>
            <input
            required
              type="number"
              onChange={(e) => setCollege1Score(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="matchName">Enter college 2 score</label>
            <input
            required
              type="number"
              onChange={(e) => setCollege2Score(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="matchName">Enter setDetails</label>
            <input required type="text" onChange={(e) => setSetInfo(e.target.value)} />
          </div>

          <input type="submit"  />
        </form>
      </div>
      :
      <h1>You are not Logged In</h1>
      }
    </div>
  );
}

export default UpdateLiveScore;
