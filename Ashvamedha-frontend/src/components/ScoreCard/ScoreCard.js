import "./ScoreCard.scss";

import React from "react";
import vs from "../../assests/demoPhotos/vs2.png";
import { useLogin } from "../../context/loginContextProvider";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import { server } from "../../constants";

function ScoreCard(props) {
  const loginCtx = useLogin()
  const navigate = useNavigate();
  const handleDelete = async()=>{
    if (window.confirm("Delete the livescore??")){
      try {
        const res = await axios.delete(`${server}/sport/deletelivescore`,{
          data :{
            matchId : props.info._id
          }
        })
      console.log(res);
      if (res.data.statusCode === 200){
        alert(`Live Score Ended for MatchName : "${props.info.matchName}", Update the points table`);
        navigate("/updatepointstable")
      }
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <>    
    <div className="score-card">
    {(loginCtx.sport === props.info.sportName) &&
    <>
    <button onClick={handleDelete}style={{color:"red", background:"#090909",padding:"5px",cursor:"pointer"}}>Delete </button>
    <button onClick={()=>{navigate("/updatelivescore")}}style={{color:"yellow", background:"#090909",padding:"5px",cursor:"pointer"}}>Update </button>
    </>
    }
      <div className="part1">
        <div className="college1-info">
          <div className="img">
            <img src={props?.info?.college1Logo} alt="" />
          </div>
          <div className="name">{props.info.college1Name}</div>
          <div className="score">{props.info.college1Score}</div>
        </div>
        <div className="vs">
          <img src={vs} alt="" />
        </div>
        <div className="college2-info">
          <div className="img">
            <img src={props?.info?.college2Logo} alt="" />
          </div>
          <div className="name">{props.info.college2Name}</div>
          <div className="score">{props.info.college2Score}</div>
        </div>
      </div>
      <div className="part2">
      {(loginCtx.sport === props.info.sportName) && <div className="set-details setname">{props.info.matchName} (match number is visible to admin only)</div>}
        <div className="set-details setname">{props.info.set}</div>
        <div className="set-details">{props.info.category}</div>
        <div className="set-details location">
          Location : {props.info.location}
        </div>
      </div>
    </div>
    </>
  );
}

export default ScoreCard;
