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

function Events() {
  const isLoading = useSelector((state) => state.appReducer.isLoading);
  const navigate = useNavigate();

  const sportsInfo = [
    {
      id: 1,
      sportName: "Chess",
      imgUrl:
        "https://res.cloudinary.com/dzjzrubld/image/upload/v1719870722/eventImgSmall/iinflximk5k8kx3snms9.jpg",
      desc: "Chess is the art of thinking ahead, of making complex decisions under pressure",
      date: "28th-29th October",
    },
    {
      id: 2,
      sportName: "Badminton",
      imgUrl:
        "https://res.cloudinary.com/dzjzrubld/image/upload/v1719870746/eventImgSmall/g1di2rrur5cwmv2fowhm.jpg",
      desc: "Badminton is not only about winning. It's about playing beautiful, memorable games.",
      date: "28th-29th October",
    },
    {
      id: 3,
      sportName: "Volleyball",
      imgUrl:
        "https://res.cloudinary.com/dzjzrubld/image/upload/v1719871170/eventImgSmall/b0h7bbleyjlngxwm54ob.jpg",
      desc: "Success in volleyball comes not from individual glory but from seamless teamwork",
      date: "28th-29th October",
    },
    {
      id: 4,
      sportName: "Football",
      imgUrl:
        "https://res.cloudinary.com/dzjzrubld/image/upload/v1719870796/eventImgSmall/mdow5qp169qbbtjizx7t.jpg",
      desc: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing or learning to do.",
      date: "28th-29th October",
    },
    {
      id: 5,
      sportName: "Basketball",
      imgUrl:
        "https://res.cloudinary.com/dzjzrubld/image/upload/v1719870814/eventImgSmall/ia3xqnti93j65e3mmxmg.jpg",
      desc: "Basketball is like photography. If you don't focus, all you have is the negative.",
      date: "28th-29th October",
    },
    {
      id: 6,
      sportName: "Table Tennis",
      imgUrl:
        "https://res.cloudinary.com/dzjzrubld/image/upload/v1719940618/eventImgSmall/mmqntxiq0mhoan3yv1r8.jpg",
      desc: "The sound of the ball hitting the table is the sound of opportunity. Don't miss your shot.",
      date: "28th-29th October",
    },
  ];
  return (
    !isLoading && (
      <div className="events">
        <Navbar />
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
      </div>
    )
  );
}

export default Events;
