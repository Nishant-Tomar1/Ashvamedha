import React, { useState } from "react";

import axios from "axios";

function SetPointTableScore() {
  const [matchName, setMatchName] = useState("");
  const [college1Name, setCollege1Name] = useState("");
  const [college2Name, setcollege2Name] = useState("");
  const [collegeWon, setCollegeWon] = useState("");
  const [point, setPoint] = useState("");
  const [sportName, setSportName] = useState("");
  const [category, setCategory] = useState("");
  const [editedBy, setEditedBy] = useState("");
  async function handleLiveScore(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://ashvamedha.onrender.com/match/",
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
          <label htmlFor="matchName">Enter college 2 name(inlowercase)</label>
          <input
            type="text"
            onChange={(e) => setcollege2Name(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="matchName">Enter college won</label>
          <input type="text" onChange={(e) => setCollegeWon(e.target.value)} />
        </div>
        <div>
          <label htmlFor="matchName">Enter category (mens/womens)</label>
          <input type="text" onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div>
          <label htmlFor="matchName">Enter point</label>
          <input type="text" onChange={(e) => setPoint(e.target.value)} />
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

export default SetPointTableScore;
