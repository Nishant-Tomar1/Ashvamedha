import React from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard.js";
function Sponsors() {
  const sponsors = [
    { id: 1, name: "a", imgUrl: "" },
    { id: 2, name: "b", imgUrl: "" },
    { id: 3, name: "c", imgUrl: "" },
    { id: 4, name: "d", imgUrl: "" },
    { id: 5, name: "e", imgUrl: "" },
  ];
  return (
    <div className="sponsor">
      <div className="container">
        {sponsors.map((item) => (
          <ProfileCard info={item} />
        ))}
      </div>
    </div>
  );
}

export default Sponsors;
