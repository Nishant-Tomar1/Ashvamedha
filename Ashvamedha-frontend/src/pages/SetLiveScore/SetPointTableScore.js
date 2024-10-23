import React, { useState } from "react";
import { server } from "../../constants";
import "./SetPointTableScore.scss"

import axios from "axios";
import { useLogin } from "../../context/loginContextProvider";

function SetPointTableScore() {
  const [matchName, setMatchName] = useState("");
  const [college1Name, setCollege1Name] = useState("");
  const [college2Name, setcollege2Name] = useState("");
  const [collegeWon, setCollegeWon] = useState("");
  const [point, setPoint] = useState("");
  const [category, setCategory] = useState("");
  const [editedBy, setEditedBy] = useState("");
  
  const loginCtx = useLogin();
  const sportName = loginCtx.isLoggedIn ? loginCtx.sport : "";
  async function handleLiveScore(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${server}/match/`,
        {
          college1Name,
          college2Name,
          collegeWon,
          point,
          matchName,
          category,
          sportName,
          editedBy,
        }
      );
      console.log("response of setLive score", response);
    } catch (error) {
      console.log("response of setLive score", error);
    }
  }
  return (
    
    <div className='adminlogin'>
      {loginCtx.isLoggedIn ? 
      <form onSubmit={handleLiveScore}>
      <h2>Set Points Table Score</h2>
        <div>
          <label htmlFor="matchName">SportName</label>
          <input required type="text"  value={sportName} />
        </div>
        <div>
          <label htmlFor="matchName">Enter match name</label>
          <input required type="text" onChange={(e) => setMatchName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="college1Name">
            Enter college 1 name(in lowercase)
          </label>
          <input
          required
            type="text"
            onChange={(e) => setCollege1Name(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="matchName">Enter college 2 name(inlowercase)</label>
          <input
          required
            type="text"
            onChange={(e) => setcollege2Name(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="matchName">Enter college won</label>
          <input required type="text" onChange={(e) => setCollegeWon(e.target.value)} />
        </div>
        <div>
          <label htmlFor="matchName">Enter category (mens/womens)</label>
          <input required type="text" onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div>
          <label htmlFor="matchName">Enter point</label>
          <input required type="text" onChange={(e) => setPoint(e.target.value)} />
        </div>
        <div>
          <label htmlFor="matchName">editedBy</label>
          <input required type="text" onChange={(e) => setEditedBy(e.target.value)} />
        </div>
        <input type="submit"  />
      </form>
      :
      <h1>You are not Logged in</h1>
      }
    </div>
  );
}

export default SetPointTableScore;
