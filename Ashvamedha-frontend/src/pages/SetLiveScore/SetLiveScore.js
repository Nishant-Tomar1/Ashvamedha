import React, { useEffect, useState } from "react";
import { server } from "../../constants";
import "./SetLiveScore.scss"

import axios from "axios";
import { useLogin } from "../../context/loginContextProvider";

//   matchName,
// college1Score,
//   college2Name,
//   college2Score,
//   category,
//   sportName,
//   editedBy,
//   set,
function SetLiveScore() {
  const [matchName, setMatchName] = useState("");
  const [college1Name, setCollege1Name] = useState("");
  const [college1Logo, setCollege1Logo] = useState("");
  const [college2Name, setcollege2Name] = useState("");
  const [college2Logo, setcollege2Logo] = useState("");
  const [college1Score, setCollege1Score] = useState("");
  const [college2Score, setCollege2Score] = useState("");
  const [setInfo, setSetInfo] = useState("");
  const [category, setCategory] = useState("");
  const [editedBy, setEditedBy] = useState("");
  const [location, setLocation] = useState("");
  const loginCtx = useLogin();
  const sportName = loginCtx.isLoggedIn ? loginCtx.sport : "";
  
  useEffect(()=>{
    
    console.log(loginCtx);
  },[loginCtx])

  async function handleLiveScore(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${server}/sport/setlivescore`,
        {
          college1Name : college1Name.toLowerCase(),
          college1Logo : college1Logo.toLowerCase(),
          college2Logo : college2Logo.toLowerCase(),
          college1Score : college1Score.toLowerCase(),
          college2Name: college2Name.toLowerCase(),
          college2Score : college2Score.toLowerCase(),
          matchName : matchName.toLowerCase(),
          category : category.toLowerCase(),
          sportName : sportName.toLowerCase(),
          editedBy : editedBy.toLowerCase(),
          set: setInfo.toLowerCase(),
          location : location.toLowerCase(),
        }
      );
      console.log("response of setLive score", response);
    } catch (error) {
      console.log("response of setLive score", error);
    }
  }

  

  return (
    <div className='adminlogin'>
      {
        loginCtx.sport ? 
        (<form style={{color: 'white'}} onSubmit={handleLiveScore}>
          <h2 > CREATE LIVE MATCH</h2>
          <div>
          <label htmlFor="matchName">SportName </label>
            <input type="text" value={sportName} readOnly />
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
            <label htmlFor="matchName">Enter college 1 score</label>
            <input
              required
              type="text"
              onChange={(e) => setCollege1Score(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="matchName">Enter college 1 Logo</label>
            <input
              required
              type="text"
              onChange={(e) => setCollege1Logo(e.target.value)}
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
            <label htmlFor="matchName">Enter college 2 score</label>
            <input
              required
              type="text"
              onChange={(e) => setCollege2Score(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="matchName">Enter college 2 Logo</label>
            <input
              required
              type="text"
              onChange={(e) => setcollege2Logo(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="matchName">Enter category (mens/womens)</label>
            <input required type="text" onChange={(e) => setCategory(e.target.value)} />
          </div>
          <div>
            <label htmlFor="matchName">Enter setDetails</label>
            <input required type="text" onChange={(e) => setSetInfo(e.target.value)} />
          </div>
          <div>
            <label htmlFor="location">Enter Location</label>
            <input required type="text" onChange={(e) => setLocation(e.target.value)} />
          </div>
          <div>
            <label htmlFor="matchName">editedBy</label>
            <input required type="text" onChange={(e) => setEditedBy(e.target.value)} />
          </div>
          <input type="submit"  />
        </form>)
        :
        (<h2>Not Logged In!!</h2>)
      }

      
    </div>
  );
}

export default SetLiveScore;
