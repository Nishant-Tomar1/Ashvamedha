import React from "react";
import { useNavigate } from "react-router-dom";
// import Navbar from  "../Navbar/Navbar.js"
import "./SportsCard.scss";
function SportsCard(props) {
  // props.info.id
  // props.info.imgUrl
  // props.info.sportName;
  const navigate = useNavigate();
  return (
    <>
    {/* <Navbar/> */}
    <div class="ui-card" onClick={() => navigate(`/events/${props.info.id}`)}>
      <img src={props.info.imgUrl} alt="" />
      <div class="description">
        <h3>{props.info.sportName}</h3>
      </div>
    </div>
    </>
  );
}

export default SportsCard;
