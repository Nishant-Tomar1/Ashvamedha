import "./Events.scss";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Footer from "../../components/Footer/Footer.js";
import Navbar from "../../components/Navbar/Navbar.js";
import React from "react";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Loader from "../../components/Loader/Loader.js";

function Events() {
  // const isLoading = useSelector((state) => state.appReducer.isLoading);
  const navigate = useNavigate();

  const sportsInfo = [
    {
      id: 1,
      sportName: "Chess",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1727729822/ashvamedha/events/khcpaoug4b1uegv1q22f.jpg",
      desc: "Chess is the art of thinking ahead, of making complex decisions under pressure",
      date: "26th and 27th October",
      theme: "warm",
    },
    {
      id: 2,
      sportName: "Badminton",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728718553/ashvamedha/events/qeyeqi5joaef13p1kkg2.png",
      desc: "Badminton is not only about winning. It's about playing beautiful, memorable games.",
      date: "26th and 27th October",
      theme: "cold",
    },
    {
      id: 3,
      sportName: "Volleyball",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1727729823/ashvamedha/events/bwneqkxvz129rbzbmr00.jpg",
      desc: "Success in volleyball comes not from individual glory but from seamless teamwork",
      date: "26th and 27th October",
      theme: "warm",
    },
    {
      id: 4,
      sportName: "Football",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728718553/ashvamedha/events/fwn1aohwqu16an071qcv.png",
      desc: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing or learning to do.",
      date: "26th and 27th October",
      theme: "cold",
    },
    {
      id: 5,
      sportName: "Basketball",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1727729822/ashvamedha/events/rfmuljtun5pabxcdrlou.jpg",
      desc: "Basketball is like photography. If you don't focus, all you have is the negative.",
      date: "26th and 27th October",
      theme: "warm",
    },
    {
      id: 6,
      sportName: "Table Tennis",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728718553/ashvamedha/events/nllyabnsse2bhzpcezfb.png",
      desc: "The sound of the ball hitting the table is the sound of opportunity. Don't miss your shot.",
      date: "26th and 27th October",
      theme: "cold",
    },
    {
      id: 7,
      sportName: "BGMI",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1727729822/ashvamedha/events/gwbnnstk5f6m2so6m4s4.jpg",
      desc: "Every drop brings a new chance; gear up and make your mark in the battlefield .",
      date: "26th and 27th October",
      theme: "warm",
    },
    {
      id: 8,
      sportName: "GYM and WeighLifting",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728721504/ashvamedha/events/dhsxh0cezuu09f1z9zyo.jpg",
      desc: "Every rep is a step closer to becoming the strongest version of yourself",
      date: "26th and 27th October",
      theme: "cold",
    },
    {
      id: 9,
      sportName: "Athletics",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1727729822/ashvamedha/events/wdxnqj88su8gu4gus0fc.jpg",
      desc: "Run with purpose, leap with passion, and let every stride take you closer to your dreams.",
      date: "26th and 27th October",
      theme: "warm",
    },
    {
      id: 10,
      sportName: "Lawn Tennis",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728895226/ashvamedha/events/yaocywewl3qdfk26lnha.jpg",
      desc: "In tennis, every point is a battle, and every match is a journey toward excellence and self-discovery.",
      date: "26th and 27th October",
      theme: "cold",
    },
  ];
  return (
    <>
      <Navbar />
        (
          <div className="events">
            <h2 className="heading">
              <span className="h1">OUR</span>
              <span className="h2">EVENTS</span>
            </h2>
            <div className="event-container">
              {sportsInfo.map((item) => {
                return (
                  <div  key={item.id} className="single-sport">
                    <div className="image">
                      <img src={item?.imgUrl} alt="sport" />
                    </div>
                    <div className="sport-info">
                      <div className={`${item?.theme} heading`} >{item?.sportName}</div>
                      <div className="desc">"{item?.desc}"</div>
                      <div className="button">
                        <button
                          onClick={() =>{ 
                            window.scrollTo(0,0);
                            navigate(`/events/${item?.id}`)}}
                          className="btn-primary"
                          id={item?.theme}
                        >
                          Register now
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <Footer />
          </div>)
    </>
  );
}

export default Events;
