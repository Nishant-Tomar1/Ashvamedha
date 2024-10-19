import "./ScoreCard.scss";

import React from "react";
import vs from "../../assests/demoPhotos/vs1.png";

function ScoreCard(props) {
  return (
    <>    
    <div className="score-card">
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
