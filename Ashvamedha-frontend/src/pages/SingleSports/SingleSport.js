import "./SingleSport.scss";

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { AiOutlineDoubleRight } from "react-icons/ai";
import Navbar from "../../components/Navbar/Navbar";
import UpcomingMatch from "../../components/UpcomingMatch/UpcomingMatch";
import badminton from "../../assests/demoPhotos/badminton.jpg";
import bb from "../../assests/demoPhotos/basketball.jpg";
import chess from "../../assests/demoPhotos/chess.jpg";
import fb from "../../assests/demoPhotos/football.jpg";
import tt from "../../assests/demoPhotos/tt.jpg";
import vb from "../../assests/demoPhotos/vb.jpg";

function SingleSport() {
  const params = useParams();
  const navigate = useNavigate();
  const { sportid } = params;
  const [sportDetail, setSportDetails] = useState({});
  const [sportImg, setSportImg] = useState([]);
  const [popUpOpen, setPopUpOpen] = useState(false);
  function handleRegistration(sportName) {
    const response = sportsInfo.find((item) => item.sportName === sportName);
    window.open(response.registrationLink);
  }
  useEffect(() => {
    const result = sportsInfo.find(({ id }) => id == sportid);
    setSportDetails(result);
  }, [sportid]);
  const sportsInfo = [
    {
      id: 1,
      sportName: "Chess",
      imgUrl: chess,
      desc: "Chess, the game of intellect and strategy, challenges players to outthink their opponents, anticipate moves, and plan ahead. At the Ashvamedha Chess Championship, we celebrate this timeless battle of wits. Whether you're a seasoned player or just starting, join us for two days of intense competition and camaraderie.Information Regarding the event is given below.",
      date: "4th-5th November",
      location: "SES Room No: 218,219",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSeNmRWHKw7EtnT9qHi1RQR9wtH4C9qmPTaGY9KRuHwmKY3gQQ/viewform?usp=sf_link",
      rulebook: "https://linktr.ee/ashvamedha.iitbbs",
      poc: "Devesh Patodkar",
    },
    {
      id: 2,
      sportName: "Badminton",
      imgUrl: badminton,
      desc: "Badminton is a sport that demands speed, agility, and finesse. Whether you're smashing shuttlecocks or diving for a crucial save, the Ashvamedha Badminton Championship promises intense rallies and thrilling matches. Join us on the court for a birdie-tastic showdown.Information Regarding the event is given below.",
      date: "4th-5th November",
      location: "Inside SAC Badminton Court 1,2",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSfQCeZ8wOvee8Bsib_gDMM6h8qAxHkCR4GnQZQCtuPbmL6RPQ/viewform?usp=sf_link",
      rulebook: "https://linktr.ee/ashvamedha.iitbbs",
      poc: "Pranav P",
    },
    {
      id: 3,
      sportName: "Volleyball",
      imgUrl: vb,
      desc: "Volleyball is a dynamic team sport that demands coordination, agility, and teamwork. Whether you're spiking, blocking, or diving for a save, it's all about the thrill of the game. Join us for a spirited match at Ashvamedha Sports Arena.Information Regarding the event is given below.",
      date: "4th-5th November",
      location: "Volleyball Court 1,2",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSdZNWWyt43KqeVfyfwrqCBKLU24Yjs6xC1VTdGSLvT5hBCeXA/viewform?usp=sf_link",
      rulebook: "https://linktr.ee/ashvamedha.iitbbs",
      poc: "Justa Tirkey",
    },
    {
      id: 4,
      sportName: "Football",
      imgUrl: fb,
      desc: "Football, the world's most beloved sport, unites people through the joy of scoring goals and making breathtaking saves. At Ashvamedha, we bring the football community together for a thrilling tournament filled with skill, passion, and unforgettable moments.Information Regarding the event is given below.",
      date: "4th-5th November",
      location: "Football Ground",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSc2LLCqkKikPE8qUvW8eX3Rmp8GWkdcjXeoXIavFJUSOjCOlw/viewform?usp=sf_link",
      rulebook: "https://linktr.ee/ashvamedha.iitbbs",
      poc: "Megha Shyam",
    },
    {
      id: 5,
      sportName: "Basketball",
      imgUrl: bb,
      desc: "Basketball is a fast-paced, high-flying game of strategy and skill. Dribble, pass, and shoot your way to victory in the Ashvamedha Basketball Championship. Join us on the court for slam dunks and three-pointers that will leave you in awe.Information Regarding the event is given below.",
      date: "4th-5th November",
      location: "Basketball Court 1,2",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLScZ59xCzIccTuFT4DQmOQJPpFEc0kId6C02FGHorU22KDyDFQ/viewform?usp=sf_link",
      rulebook: "https://linktr.ee/ashvamedha.iitbbs",
      poc: "Ayush Singh & Pranav P",
    },
    {
      id: 6,
      sportName: "Table Tennis",
      imgUrl: tt,
      desc: "Requires lightning-quick reflexes and precision. Ashvamedha's table tennis tournament is a showcase of spin serves, rallies, and impressive volleys. Come and experience the thrill of ping pong.Information Regarding the event is given below.",
      location: "Inside SAC Multi-Purpose Hall",
      date: "4th-5th November",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSfktHYxmXIKN_iowh15gurxkvr8BKKoSigVkyIp7YVchMMgvA/viewform?usp=sf_link",
      poc: "Jatin Sahu",
      rulebook: "https://linktr.ee/ashvamedha.iitbbs",
    },
  ];
  return (
    <div className="single-sport-page">
      <Navbar />
      <div className="sportspage">
        <div className="popup-content">
          <div className="match-popup">
            <h2 onClick={() => setPopUpOpen(!popUpOpen)} className="hover-link">
              Upcoming Matches
            </h2>
            <AiOutlineDoubleRight
              onClick={() => setPopUpOpen(!popUpOpen)}
              className="next"
            />
          </div>
          <div
            className="match-liveScore"
            onClick={() => navigate(`/livescore/${sportDetail.sportName}`)}
          >
            <h2 className="hover-link"> Live Score</h2>
            <AiOutlineDoubleRight
              className="next"
              onClick={() => navigate(`/livescore/${sportDetail.sportName}`)}
            />
          </div>
          {popUpOpen && (
            <UpcomingMatch
              trigger={true}
              children={"this is popup"}
              sportid={sportid}
            />
          )}
        </div>
        <div className="cards">
          <div className="sports-info">
            <h1 className="name">{sportDetail.sportName}</h1>
            <p className="desc">{sportDetail.desc}</p>
            <p className="poc">
              <span className="highlight">Person of Contact:</span>{" "}
              {sportDetail.poc}
            </p>
            <p className="venue">
              <span className="highlight">Location:</span>{" "}
              {sportDetail.location}
            </p>
            <p className="date">
              <span className="highlight">Date:</span> {sportDetail.date}
            </p>
            <a
              className="rulebook"
              href={sportDetail.rulebook}
              download="Rulebook"
            >
              <span className="highlight">Rulebook:</span> Click here
            </a>
          </div>
          <div className="sports-img">
            <img src={sportDetail.imgUrl} alt="Loading" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleSport;
