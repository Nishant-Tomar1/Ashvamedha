import "./Events.scss";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";

function Events() {
  const isLoading = useSelector((state) => state.appReducer.isLoading);
  const navigate = useNavigate();

  const sportsInfo = [
    {
      id: 1,
      sportName: "Chess",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1727729822/ashvamedha/events/khcpaoug4b1uegv1q22f.jpg",
      desc: "Chess is the art of thinking ahead, of making complex decisions under pressure",
      date: "28th-29th October",
    },
    {
      id: 2,
      sportName: "Badminton",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728718553/ashvamedha/events/qeyeqi5joaef13p1kkg2.png",
      desc: "Badminton is not only about winning. It's about playing beautiful, memorable games.",
      date: "28th-29th October",
    },
    {
      id: 3,
      sportName: "Volleyball",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1727729823/ashvamedha/events/bwneqkxvz129rbzbmr00.jpg",
      desc: "Success in volleyball comes not from individual glory but from seamless teamwork",
      date: "28th-29th October",
    },
    {
      id: 4,
      sportName: "Football",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728718553/ashvamedha/events/fwn1aohwqu16an071qcv.png",
      desc: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing or learning to do.",
      date: "28th-29th October",
    },
    {
      id: 5,
      sportName: "Basketball",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1727729822/ashvamedha/events/rfmuljtun5pabxcdrlou.jpg",
      desc: "Basketball is like photography. If you don't focus, all you have is the negative.",
      date: "28th-29th October",
    },
    {
      id: 6,
      sportName: "Table Tennis",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728718553/ashvamedha/events/nllyabnsse2bhzpcezfb.png",
      desc: "The sound of the ball hitting the table is the sound of opportunity. Don't miss your shot.",
      date: "28th-29th October",
    },
    {
      id: 7,
      sportName: "BGMI",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728718553/ashvamedha/events/nllyabnsse2bhzpcezfb.png",
      desc: "The sound of the ball hitting the table is the sound of opportunity. Don't miss your shot.",
      date: "28th-29th October",
    },
    {
      id: 8,
      sportName: "GYM and WeighLifting",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728718553/ashvamedha/events/nllyabnsse2bhzpcezfb.png",
      desc: "The sound of the ball hitting the table is the sound of opportunity. Don't miss your shot.",
      date: "28th-29th October",
    },
    {
      id: 9,
      sportName: "Athletics",
      imgUrl:
        "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728718553/ashvamedha/events/nllyabnsse2bhzpcezfb.png",
      desc: "The sound of the ball hitting the table is the sound of opportunity. Don't miss your shot.",
      date: "28th-29th October",
    },
  ];
  return (
    <>
      <Navbar />
      {!isLoading ?
        (
          <div className="events">
            <h2 className="heading">
              <span className="h1">UPCOMING </span>
              <span className="h2">EVENTS</span>
            </h2>
            <div className="event-container">
              {sportsInfo.map((item) => {
                return (
                  <div className="single-sport">
                    <div className="image">
                      <img src={item?.imgUrl} alt="sport" />
                    </div>
                    <div className="sport-info">
                      <div className="name">{item?.sportName}</div>
                      <div className="desc">"{item?.desc}"</div>
                      <div className="button">
                        <button
                          onClick={() => navigate(`/events/${item?.id}`)}
                          className="btn-primary"
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
        : <Loader />}
    </>
  );
}

export default Events;
