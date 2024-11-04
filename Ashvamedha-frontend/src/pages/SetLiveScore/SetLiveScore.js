import React, { useEffect, useState } from "react";
import { server } from "../../constants";
import "./SetLiveScore.scss"
import { collegeList } from "../../constants";

import axios from "axios";
import { useLogin } from "../../context/loginContextProvider";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

function SetLiveScore() {
  const [loading, setLoading] = useState(false);
  const [matchName, setMatchName] = useState("");
  const [college1Name, setCollege1Name] = useState("");
  // const [college1Logo, setCollege1Logo] = useState("");
  const [college2Name, setCollege2Name] = useState("");
  // const [college2Logo, setcollege2Logo] = useState("");
  const [college1Score, setCollege1Score] = useState("");
  const [college2Score, setCollege2Score] = useState("");
  const [setInfo, setSetInfo] = useState("");
  const [category, setCategory] = useState("");
  // const [editedBy, setEditedBy] = useState("");
  const [location, setLocation] = useState("");
  const loginCtx = useLogin();
  const sportName = loginCtx.isLoggedIn ? loginCtx.sport : "";

  const navigate = useNavigate()
  
  useEffect(()=>{
  },[loginCtx])

  async function handleLiveScore(e) {
    e.preventDefault();
    if (college1Name === college2Name){
      return alert("Both colleges should be different!!")
    }
    setLoading(true);
    try {
      const response = await axios.post(
        `${server}/sport/setlivescore`,
        {
          college1Name : college1Name.toLowerCase(),
          college2Name: college2Name.toLowerCase(),
          college1Logo : getCollegeLogo(college1Name).toLowerCase(),
          college2Logo : getCollegeLogo(college2Name).toLowerCase(),
          college1Score : college1Score.toLowerCase(),
          college2Score : college2Score.toLowerCase(),
          sportName : sportName.toLowerCase(),
          matchName : matchName.toLowerCase(),
          set: setInfo.toLowerCase(),
          category : category.toLowerCase(),
          editedBy : sportName.toLowerCase()+" admin",
          location : location.toLowerCase(),
        }
      );
      console.log("response of setLive score", response);
      if (response.data.statusCode === 201){
        setLoading(false);
        alert("Created Successfully. Please Confirm it in the livescore section.")
        navigate(`/livescore/${sportName}`)
      }
      else{
        alert("Try again and enter details carefully!")
        
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error of setLive score", error);
    }
  }

  const getCollegeLogo = (collegeName) => {
    const college = collegeList.find((item) => item.name === collegeName);
    return college ? college.logo : null; // Returns null if college is not found
  };

  return (
    <>
    <Navbar/>
    <div className="adminlogin">
      {loginCtx.sport ? (
        <form style={{ color: "white" }} onSubmit={handleLiveScore}>
          <h2> CREATE LIVE MATCH</h2>
          <div>
            <label htmlFor="matchName">SportName </label>
            <input type="text" value={sportName} readOnly />
          </div>
          <div>
            <label htmlFor="matchName">Enter match name</label>
            <input
              required
              type="text"
              onChange={(e) => setMatchName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="college1Name">
              College 1
            </label>
            <select required onChange={(e) => setCollege1Name(e.target.value)}>
              <option value="">Select a college</option>
              {collegeList.map((college) => (
                <option key={college.name} value={college.name}>
                  {college.name}
                </option>
              ))}
            </select>
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
            <label htmlFor="matchName">College 2</label>
            <select required onChange={(e) => setCollege2Name(e.target.value)}>
              <option value="">Select a college</option>
              {collegeList.map((college) => (
                <option key={college.name} value={college.name}>
                  {college.name}
                </option>
              ))}
            </select>
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
            <label htmlFor="matchName">Enter setDetails</label>
            <input
              required
              type="text"
              onChange={(e) => setSetInfo(e.target.value)}
            />
            
          </div>
          <div>
            <label htmlFor="location">Enter Location</label>
            <input
              required
              type="text"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          {!loading ? <input type="submit" /> : <h2>Loading...</h2>}
        </form>
      ) : (
        <h2>Not Logged In!!</h2>
      )}
    </div>
    </>
  );
}

export default SetLiveScore;
