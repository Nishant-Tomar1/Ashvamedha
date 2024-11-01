import React from 'react'
import "./FixtureCard2.scss"

function FixtureCard2(props) {
  return (
    <div className="score-card">
        <div className="part2">
            <div className="set-details setname">{props.match.matchType.toUpperCase()}</div>      
            <div className="set-details">{ props.match.category.toUpperCase()}</div>
            <div className="set-details">{props.match.time}</div>
            <div className="set-details location">
              Location : {props.match.location}
            </div>
          </div>
    </div>
  )
}

export default FixtureCard2
