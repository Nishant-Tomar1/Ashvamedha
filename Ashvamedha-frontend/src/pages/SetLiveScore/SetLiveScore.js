import React, { useState } from "react";

import axios from "axios";

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
  const [sportName, setSportName] = useState("");
  const [category, setCategory] = useState("");
  const [editedBy, setEditedBy] = useState("");
  const [location, setLocation] = useState("");
  async function handleLiveScore(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://ashvamedha.onrender.com/sport/setlivescore",
        {
          college1Name,
          college1Logo,
          college2Logo,
          college1Score,
          college2Name,
          college2Score,
          matchName,
          category,
          sportName,
          editedBy,
          set: setInfo,
          location,
        }
      );
      console.log("response of setLive score", response);
    } catch (error) {
      console.log("response of setLive score", error);
    }
  }
  return (
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
          <label htmlFor="college1Name">
            Enter college 1 name(in lowercase)
          </label>
          <input
            type="text"
            onChange={(e) => setCollege1Name(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="matchName">Enter college 1 score</label>
          <input
            type="text"
            onChange={(e) => setCollege1Score(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="matchName">Enter college 1 Logo</label>
          <input
            type="text"
            onChange={(e) => setCollege1Logo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="matchName">Enter college 2 name(inlowercase)</label>
          <input
            type="text"
            onChange={(e) => setcollege2Name(e.target.value)}
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
          <label htmlFor="matchName">Enter college 2 Logo</label>
          <input
            type="text"
            onChange={(e) => setcollege2Logo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="matchName">Enter category (mens/womens)</label>
          <input type="text" onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div>
          <label htmlFor="matchName">Enter setDetails</label>
          <input type="text" onChange={(e) => setSetInfo(e.target.value)} />
        </div>
        <div>
          <label htmlFor="location">Enter Location</label>
          <input type="text" onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div>
          <label htmlFor="matchName">editedBy</label>
          <input type="text" onChange={(e) => setEditedBy(e.target.value)} />
        </div>
        <input type="submit" onClick={handleLiveScore} />
      </form>
    </div>
  );
}

export default SetLiveScore;
