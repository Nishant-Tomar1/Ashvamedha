import React from "react";
import "./CollegeWrapper.scss";
import { AiOutlineDoubleRight } from "react-icons/ai/index.esm.js";
import { useNavigate } from "react-router-dom";
function CollegeWrapper(props) {
  const navigate = useNavigate();
  return (
    <div className="collegewrapper">
      <div className="serial-no">{props.serialNo + 1}</div>
      <div className="collegename">{props.collegeInfo[1]}</div>
      <div className="score"> {props.collegeInfo[0]}</div>
      <div
        className="next"
        onClick={() => navigate(`/leaderboard/${props.collegeInfo[1]}`)}
      >
        <AiOutlineDoubleRight />
      </div>
    </div>
  );
}

export default CollegeWrapper;
