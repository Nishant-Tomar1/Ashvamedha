import React, { useEffect, useState } from "react";
import { server } from "../../constants";
import "./SetPointTableScore.scss";
import { collegeList, collegeList2 } from "../../constants";

import axios from "axios";
import { useLogin } from "../../context/loginContextProvider";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

function SetPointTableScore() {
  const [loading, setLoading] = useState(false);
  const [matchName, setMatchName] = useState("");
  const [college1Name, setCollege1Name] = useState("");
  const [college2Name, setCollege2Name] = useState("");
  const [collegeWon, setCollegeWon] = useState("");
  const [point, setPoint] = useState("");
  const [category, setCategory] = useState("");
  
  const navigate = useNavigate();
  const loginCtx = useLogin();
  const sportName = loginCtx.isLoggedIn ? loginCtx.sport : "";
  async function handleLiveScore(e) {
    setLoading(true)
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
          editedBy : sportName.toLowerCase()+" admin",
        }
      );
      if (response.data.statusCode === 201){
        setLoading(false);
        alert("Points table updated successfully");
        navigate(`/leaderboard/${collegeWon}`)
      }
      else {
        setLoading(false)
         alert(response.data.message);
      }
      
      // console.log("response of setLive score", response);
    } catch (error) {
      setLoading(false);
      console.log("response of setLive score", error);
      alert("Something went wrong. Try again")
    }
  }
  return (
    <>
    <Navbar/>
    <div className='adminlogin'>
      {loginCtx.isLoggedIn ? 
      <form onSubmit={handleLiveScore}>
      <h2>Set Points Table Score</h2>
        <div>
          <label htmlFor="matchName">SportName</label>
          <input required type="text" value={sportName} readOnly/>
        </div>
        <div>
          <label htmlFor="matchName">Enter match name</label>
          <input required type="text" onChange={(e) => setMatchName(e.target.value)} />
        </div>
        <div>
            <label htmlFor="college1Name">
              College 1
            </label>
            <select required onChange={(e) => setCollege1Name(e.target.value)}>
              <option value="">Select a college</option>
              {collegeList2.map((college) => (
                <option key={college.name} value={college.name}>
                  {college.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="matchName">College 2</label>
            <select required onChange={(e) => setCollege2Name(e.target.value)}>
              <option value="">Select a college</option>
              {collegeList2.map((college) => (
                <option key={college.name} value={college.name}>
                  {college.name}
                </option>
              ))}
            </select>
          </div>

        <div>
          <label htmlFor="matchName">College won</label>
          {/* <input required type="text" onChange={(e) => setCollegeWon(e.target.value)} /> */}
          <select required onChange={(e) => setCollegeWon(e.target.value)}>
              <option value="">Select a college</option>
                <option key='1' value={college1Name}>
                  {college1Name}
                </option>
                <option key='2' value={college2Name}>
                  {college2Name}
                </option>
            </select>
        </div>

        <div>
            <label htmlFor="matchName">Category (men/women)</label>
 
            <select required onChange={(e) => setCategory(e.target.value)}>
              <option value="">Select category</option>
                <option key="1" value="men">
                  Men
                </option>
                <option key="2" value="women">
                 Women
              </option>
              <option key="3" value="mixed">
                 Mixed
              </option>
            </select>
          </div>
        <div>
          <label htmlFor="matchName">Enter points</label>
          <input required type="text" onChange={(e) => setPoint(e.target.value)} />
        </div>
        {/* <div>
          <label htmlFor="matchName">editedBy</label>
          <input required type="text" onChange={(e) => setEditedBy(e.target.value)} />
        </div> */}
        {!loading ? <input type="submit" /> : <h2>Loading...</h2>}
      </form>
      :
      <h1>You are not Logged in</h1>
      }
    </div>
    </>
  );
}

export default SetPointTableScore;
