import "./SingleSport.scss";

import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";

import { AiOutlineDoubleRight } from "react-icons/ai/index.esm.js";
// import Navbar from "../../components/Navbar/Navbar.js";
// import UpcomingMatch from "../../components/UpcomingMatch/UpcomingMatch.js";
// import badminton from "../../assests/demoPhotos/badminton.jpg";
// import bb from "../../assests/demoPhotos/basketball.jpg";
// import chess from "../../assests/demoPhotos/chess.jpg";
// import fb from "../../assests/demoPhotos/football.jpg";
// import tt from "../../assests/demoPhotos/tt.jpg";
// import vb from "../../assests/demoPhotos/vb.jpg";

const sportsInfo = [
  {
    id: 1,
    sportName: "Chess",
    imgUrl: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1727729822/ashvamedha/events/khcpaoug4b1uegv1q22f.jpg",
    desc: "Chess, the game of intellect and strategy, challenges players to outthink their opponents, anticipate moves, and plan ahead. At the Ashvamedha Chess Championship, we celebrate this timeless battle of wits. Whether you're a seasoned player or just starting, join us for two days of intense competition and camaraderie.Information Regarding the event is given below.",
    date: "26th - 27th October",
    location: "SES Room No: 218,219",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSd9i_E6j5lr2aquQ3RxkeBOb_-mL9OcEjlplMMVasNJw4iZFg/viewform",
    rulebook: "https://drive.google.com/file/d/1InFTI3Zu8qfCHNtCNvprIHpEpjz94Xjg/view?usp=sharing",
    poc: "Srikanth (9392358848)",
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
    rulebook: "https://drive.google.com/file/d/1InFTI3Zu8qfCHNtCNvprIHpEpjz94Xjg/view?usp=sharing",
    poc: "Harish (6264869374) and Sai Vardhan (8144574654)",
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
    rulebook: "https://drive.google.com/file/d/1InFTI3Zu8qfCHNtCNvprIHpEpjz94Xjg/view?usp=sharing",
    poc: "Baman Teja (6304640345)",
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
    rulebook: "https://drive.google.com/file/d/1InFTI3Zu8qfCHNtCNvprIHpEpjz94Xjg/view?usp=sharing",
    poc: "Ajay (9152177679) and Yasas (7847825923)",
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
    rulebook: "https://drive.google.com/file/d/1InFTI3Zu8qfCHNtCNvprIHpEpjz94Xjg/view?usp=sharing",
    poc: "Shivam (6378287518) and Varsha (8002166766)",
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
    poc: "Thanvi Reddy (9381811060) and Ayush (6367645929)",
    rulebook: "https://drive.google.com/file/d/1InFTI3Zu8qfCHNtCNvprIHpEpjz94Xjg/view?usp=sharing",
    theme: "cold",
  },
  {
    id: 7,
    sportName: "BGMI",
    imgUrl:
      "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1727729822/ashvamedha/events/gwbnnstk5f6m2so6m4s4.jpg",
    desc: "Battlegrounds Mobile India (BGMI) immerses players in a thrilling battle royale experience. Parachute onto a vibrant island, scavenge for weapons, and outmaneuver opponents in intense firefights",
    location: "ONLINE",
    date: "26th - 27th October",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeK79UZD1OPOyf_3djG2tUhWAhvMO8VOqh77xP9HO4KwJELaw/viewform",
    poc: "Sanskar Kosare (8208278646)",
    rulebook: "https://drive.google.com/file/d/1InFTI3Zu8qfCHNtCNvprIHpEpjz94Xjg/view?usp=sharing",
    theme: "warm",
  },
  {
    id: 8,
    sportName: "GYM & Weightlifting",
    imgUrl:
      "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728721504/ashvamedha/events/dhsxh0cezuu09f1z9zyo.jpg",
    desc: "The gym, a sanctuary of sweat and determination, becomes a canvas where weightlifting transforms mere metal into the artistry of strength, sculpting not only physiques but also character.",
    location: "SAC GYM",
    date: "26th - 27th October",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSf1Ib2CKYc8CGiFOyoPLyyBV1cvjqKlH8jfPjQImGfxQCqcAA/viewform",
    poc: "Deekshansh (7225855505) and Tanish (6350108695)",
    rulebook: "https://drive.google.com/file/d/1InFTI3Zu8qfCHNtCNvprIHpEpjz94Xjg/view?usp=sharing",
    theme: "cold",
  },
  {
    id: 9,
    sportName: "Athletics",
    imgUrl:
      "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1727729822/ashvamedha/events/wdxnqj88su8gu4gus0fc.jpg",
    desc: "Athletics, the exhilarating pursuit of speed, agility, and endurance, unfolds as a dynamic tapestry of human potential, where each race and jump becomes a vivid expression of determination and skill.",
    location: "Beside Football Ground",
    date: "26th - 27th October",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeex8BxbszNjeyrJbllYiodsJWSH2TeEsPaDYVRHms1wGrTJw/viewform",
    poc: "Sreenath Reddy (9703040597) and Lukge Jilen (7085758430)",
    rulebook: "https://drive.google.com/file/d/1InFTI3Zu8qfCHNtCNvprIHpEpjz94Xjg/view?usp=sharing",
    theme: "warm",
  },
  {
    id: 10,
    sportName: "Lawn Tennis",
    imgUrl:
      "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728895226/ashvamedha/events/yaocywewl3qdfk26lnha.jpg",
    desc: "Step onto the vibrant court of lawn tennis, where each stroke of the racket echoes with determination and grace. Here, athletes transform challenges into artistry, competing in a dance of precision and skill.",
    location: "SAC Tennis Courts",
    date: "26th - 27th October",
    registrationLink:
      "https://forms.gle/w2a4Sm1PXMms3qJD6",
    poc: "M Pranavram (8072477461) and Krish Garg (7217530667)",
    rulebook: "https://drive.google.com/file/d/1InFTI3Zu8qfCHNtCNvprIHpEpjz94Xjg/view?usp=sharing",
    theme: "cold",
  },
];

function SingleSport() {
  const [sportDetail, setSportDetails] = useState({
    sportName:"",
    imgUrl:"",
    desc:"",
    location:"",
    date:"",
    registrationLink:"",
    poc:"",
    rulebook:"",
    theme:"",
  });
  const params = useParams();
  const {sportid} = params;

  // const [sportImg, setSportImg] = useState([]);
  // const [popUpOpen, setPopUpOpen] = useState(false);
  function handleRegistration(sportName) {
    const response = sportsInfo.find((item) => item.sportName === sportName);
    window.open(response.registrationLink);
  }
  useEffect(() => {
    const result = sportsInfo.find(({ id }) => id === Number.parseInt(sportid));
    
    setSportDetails(result);
  },[setSportDetails, sportid]);
  
  return (
    <>
      {/* <Navbar /> */}
    <div className="single-sport-page">
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

        <div className="cards" >
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
    </>
  );
}

export default SingleSport;
