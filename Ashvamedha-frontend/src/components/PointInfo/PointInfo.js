import { useParams } from "react-router-dom";
import "./PointInfo.scss";

import React from "react";

function PointInfo(props) {
  const params = useParams();
  
  return (
    <div className="pointinfo">
      {/* <div className="serial-no">{props?.serialNo + 1 || "S.No"}</div> */}
      <div className="category"> {props?.gameInfo?.category}</div>
      <div className="opponent">
        {/* <span className="vs"></span> */}
        <span className="name">{props?.gameInfo?.college1 === params.collegename ? props?.gameInfo?.college2 : props?.gameInfo?.college1  }</span>
      </div>
      <div className="point">{props?.gameInfo?.point}</div>
      <div className="sportname">{props?.gameInfo?.sportName}</div>
    </div>
  );
}

export default PointInfo;
