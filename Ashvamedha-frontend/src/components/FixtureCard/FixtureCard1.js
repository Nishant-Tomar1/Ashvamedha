import React from 'react'
import vs from "../../assests/demoPhotos/vs2.png";
import { collegeList } from '../../constants';
import "./FixtureCard1.scss"

function FixtureCard1(props) {
    const getCollegeLogo = (collegeName) => {
        if (collegeName.toLowerCase() === "tbd" ) return "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1730474620/ashvamedha/Colleges/zpvqrtb9wxtohfzwl09u.png";
        const college = collegeList.find((item) => item.name === collegeName);
        return college ? college.logo : null; // Returns null if college is not found
      };
    
    return (
        <>    
        <div className="score-card">
        <div className="part2">
            {/* <div className="set-details setname">{props.match.matchName}</div> */}      
            <div className="set-details">{props.match.time}</div>
            <div className="set-details">{props.match.category? props.match.category.toUpperCase() : ""}</div>
            <div className="set-details location">
              Location : {props.match.location}
            </div>
          </div>

          <div className="part1">
            <div className="college1-info">
              <div className="img">
                <img src={getCollegeLogo(props.match.team1?.toLowerCase())} alt="" />
              </div>
              <div className="name">{props.match.team1}</div>
            </div>
            <div className="vs">
              <img src={vs} alt="" />
            </div>
            <div className="college2-info">
              <div className="img">
                <img src={getCollegeLogo(props.match.team2.toLowerCase())} alt="" />
              </div>
              <div className="name">{props.match.team2}</div>

            </div>
          </div>
          <div style={{margin:"20px", fontSize:"1.35rem",textAlign:"center"}} className="set-details">{props.match.matchType.toUpperCase()}</div>
        </div>
        </>
      );
}

export default FixtureCard1
