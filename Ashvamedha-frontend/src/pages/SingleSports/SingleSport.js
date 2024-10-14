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
      imgUrl: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1727729822/ashvamedha/events/khcpaoug4b1uegv1q22f.jpg",
      desc: "Chess, the game of intellect and strategy, challenges players to outthink their opponents, anticipate moves, and plan ahead. At the Ashvamedha Chess Championship, we celebrate this timeless battle of wits. Whether you're a seasoned player or just starting, join us for two days of intense competition and camaraderie.Information Regarding the event is given below.",
      date: "26th - 27th October",
      location: "SES Room No: 218,219",
      registrationLink:
        "",
      rulebook: "#",
      poc: "Devesh Patodkar",
      theme: "warm",
    },
    {
      id: 2,
      sportName: "Badminton",
      imgUrl: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728718553/ashvamedha/events/qeyeqi5joaef13p1kkg2.png",
      desc: "Badminton is a sport that demands speed, agility, and finesse. Whether you're smashing shuttlecocks or diving for a crucial save, the Ashvamedha Badminton Championship promises intense rallies and thrilling matches. Join us on the court for a birdie-tastic showdown.Information Regarding the event is given below.",
      date: "26th - 27th October",
      location: "Inside SAC Badminton Court",
      registrationLink:
        "https://forms.gle/RZHEHSQfr8Lar6HFA",
      rulebook: "#",
      poc: "Harish and  Ronanki Sai Vardhan",
      theme: "cold",
    },
    {
      id: 3,
      sportName: "Volleyball",
      imgUrl: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1727729823/ashvamedha/events/bwneqkxvz129rbzbmr00.jpg",
      desc: "Volleyball is a dynamic team sport that demands coordination, agility, and teamwork. Whether you're spiking, blocking, or diving for a save, it's all about the thrill of the game. Join us for a spirited match at Ashvamedha Sports Arena.Information Regarding the event is given below.",
      date: "26th - 27th October",
      location: "Volleyball Court 1,2",
      registrationLink:
        "https://forms.gle/3PL7abtt11sK1HxF7",
      rulebook: "#",
      poc: "Baman Teja",
      theme: "warm",
    },
    {
      id: 4,
      sportName: "Football",
      imgUrl: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728718553/ashvamedha/events/fwn1aohwqu16an071qcv.png",
      desc: "Football, the world's most beloved sport, unites people through the joy of scoring goals and making breathtaking saves. At Ashvamedha, we bring the football community together for a thrilling tournament filled with skill, passion, and unforgettable moments.Information Regarding the event is given below.",
      date: "26th - 27th October",
      location: "Football Ground",
      registrationLink:
        "https://forms.gle/1toBjx9Ss2oJtbqi9",
      rulebook: "#",
      poc: "Ajay Matasugur and Yasas",
      theme: "cold",
    },
    {
      id: 5,
      sportName: "Basketball",
      imgUrl: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1727729822/ashvamedha/events/rfmuljtun5pabxcdrlou.jpg",
      desc: "Basketball is a fast-paced, high-flying game of strategy and skill. Dribble, pass, and shoot your way to victory in the Ashvamedha Basketball Championship. Join us on the court for slam dunks and three-pointers that will leave you in awe.Information Regarding the event is given below.",
      date: "26th - 27th October",
      location: "Basketball Court 1,2",
      registrationLink:
        "https://forms.gle/HhyeT3XzW8qmMYAY6",
      rulebook: "#",
      poc: "Yash and Varsha",
      theme: "warm",
    },
    {
      id: 6,
      sportName: "Table Tennis",
      imgUrl: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728718553/ashvamedha/events/nllyabnsse2bhzpcezfb.png",
      desc: "Requires lightning-quick reflexes and precision. Ashvamedha's table tennis tournament is a showcase of spin serves, rallies, and impressive volleys. Come and experience the thrill of ping pong.Information Regarding the event is given below.",
      location: "Inside SAC Multi-Purpose Hall",
      date: "26th - 27th October",
      registrationLink:
        "https://forms.gle/AA6bNJrpzKDjDieUA",
      poc: "Thanvi Reddy and Ayush",
      rulebook: "#",
      theme: "cold",
    },
    {
      id: 7,
      sportName: "BGMI",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1727729822/ashvamedha/events/gwbnnstk5f6m2so6m4s4.jpg",
      desc: "Battlegrounds Mobile India (BGMI) immerses players in a thrilling battle royale experience. Parachute onto a vibrant island, scavenge for weapons, and outmaneuver opponents in intense firefights",
      location: "Inside SAC Multi-Purpose Hall",
      date: "26th - 27th October",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSfktHYxmXIKN_iowh15gurxkvr8BKKoSigVkyIp7YVchMMgvA/viewform?usp=sf_link",
      poc: "Jatin Sahu",
      rulebook: "#",
      theme: "warm",
    },
    {
      id: 8,
      sportName: "GYM and WeighLifting",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728721504/ashvamedha/events/dhsxh0cezuu09f1z9zyo.jpg",
      desc: "The gym, a sanctuary of sweat and determination, becomes a canvas where weightlifting transforms mere metal into the artistry of strength, sculpting not only physiques but also character.",
      location: "Inside SAC Multi-Purpose Hall",
      date: "26th - 27th October",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSfktHYxmXIKN_iowh15gurxkvr8BKKoSigVkyIp7YVchMMgvA/viewform?usp=sf_link",
      poc: "Jatin Sahu",
      rulebook: "",
      theme: "cold",
    },
    {
      id: 9,
      sportName: "Athletics",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1727729822/ashvamedha/events/wdxnqj88su8gu4gus0fc.jpg",
      desc: "Athletics, the exhilarating pursuit of speed, agility, and endurance, unfolds as a dynamic tapestry of human potential, where each race and jump becomes a vivid expression of determination and skill.",
      location: "Inside SAC Multi-Purpose Hall",
      date: "26th - 27th October",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSfktHYxmXIKN_iowh15gurxkvr8BKKoSigVkyIp7YVchMMgvA/viewform?usp=sf_link",
      poc: "Jatin Sahu",
      rulebook: "",
      theme: "warm",
    },
    {
      id: 10,
      sportName: "Lawn Tennis",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728895226/ashvamedha/events/yaocywewl3qdfk26lnha.jpg",
      desc: "Step onto the vibrant court of lawn tennis, where each stroke of the racket echoes with determination and grace. Here, athletes transform challenges into artistry, competing in a dance of precision and skill.",
      location: "Lawn Tennis Court",
      date: "26th - 27th October",
      registrationLink:
        "https://forms.gle/w2a4Sm1PXMms3qJD6",
      poc: "M Pranavram and Krish Garg",
      rulebook: "#",
      theme: "cold",
    },
  ];
  return (
    <div className="single-sport-page">
      <Navbar />
      <div className="sportspage">
        <div className="popup-content">
          <div className="match-popup">
            <h2
              onClick={() => handleRegistration(sportDetail.sportName)}
              className={sportDetail.theme}
            >
              Register
            </h2>
            <AiOutlineDoubleRight
              onClick={() => handleRegistration(sportDetail.sportName)}
              className="next"
            />
          </div>
          {/* Uncomment if you want to add a Live Score option */}
          {/* <div
    className="match-liveScore"
    onClick={() => navigate(`/livescore/${sportDetail.sportName}`)}
  >
    <h2 className="hover-link"> Live Score</h2>
    <AiOutlineDoubleRight
      className="next"
      onClick={() => navigate(`/livescore/${sportDetail.sportName}`)}
    />
  </div> */}
        </div>

        <div className="cards" style={{ marginTop: "20px" }}>
          <div className="sports-info">
            <h1 id={sportDetail.theme}>{sportDetail.sportName}</h1>
            <p className="desc">{sportDetail.desc}</p>
            <p className="poc">
              <span className={sportDetail.theme}>Person of Contact:</span>{" "}
              {sportDetail.poc}
            </p>
            <p className="venue">
              <span className={sportDetail.theme}>Location:</span>{" "}
              {sportDetail.location}
            </p>
            <p className="date">
              <span className={sportDetail.theme}>Date:</span> {sportDetail.date}
            </p>
            <a
              className="rulebook"
              href={sportDetail.rulebook}
            >
              <span className={sportDetail.theme}>Rulebook:</span> Click here
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
