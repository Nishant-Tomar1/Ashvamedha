import "./Navbar.scss";

// import {
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaYoutubeSquare,
// } from "react-icons/fa/index.esm.js";
import { IoClose, IoMenu } from "react-icons/io5";
import React, { useState } from "react";

// import { GiHamburgerMenu } from "react-icons/gi/index.esm.js";
import { Link } from "react-scroll";
import { Link as ActualLink } from "react-router-dom";
import ashvamedhaLogo from "../../assests/demoPhotos/ashvamedhaLogo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const menuData = [
    {
      title: "Home",
      path: "/",
      cName: "nav-text",
      navigate: true,
    },
    // {
    //   title: "About Us",
    //   path: "AboutUs",
    //   cName: "nav-text",
    // },
    {
      title: "Events",
      path: "/events",
      cName: "nav-text",
      navigate: true,
    },
    {
      title: "Team",
      path: "/team",
      cName: "nav-text",
      navigate: true,
    },
    {
      title: "Gallery",
      path: "/gallery",
      cName: "nav-text special",
      navigate: true,
    },
    {
      title: "Leaderboard",
      path: "/leaderboard",
      cName: "nav-text",
      navigate: true,
    },
    // {
    //   title: "Contact Us",
    //   path: "ContactUs",
    //   cName: "nav-text",
    // },
    // {
    //   title: "Rulebook",
    //   path: "https://drive.google.com/file/d/1SXuWSfnb3d_5q0j0apuFsaaL-_xDAngD/view?usp=sharing",
    //   cName: "nav-text ",
    //   navigate: false,
    // },
  ];
  const navigate = useNavigate();
  return (
    <nav className="main-nav">
      <div className="logo" onClick={()=>{window.scrollTo(0,0);navigate("/")}}>
        <img src={ashvamedhaLogo} alt="ASHVAMEDHA" />
      </div>
      <div
        className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}
      >
        <ul className="menu-items">
          {menuData.map((item, index) => {
            return item.navigate ? (
              <li key={index} className={item.cName}>
                <Link
                  to="/"
                  onClick={() => {
                    window.scrollTo(0,0);
                    navigate(`${item.path}`);
                  }}
                >
                  <span>{item.title}</span>
                </Link>
              </li>
            ) : (
              <li key={index} className={item.cName}>
                <Link
                  to={item.path}
                  smooth={true}
                  onClick={() => setShowMediaIcons(false)}
                >
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
          <li key="25" className="nav-text rulebook">
                <ActualLink target="_blank" to="https://drive.google.com/file/d/1q8wArG5pp0X8n_0Oql9BiVH1CTC_lQAn/view?usp=sharing" >
                    <span>Brochure</span>
                </ActualLink>
          </li>
          <li key="26" className="nav-text rulebook">
                <ActualLink target="_blank" to="https://drive.google.com/file/d/1InFTI3Zu8qfCHNtCNvprIHpEpjz94Xjg/view?usp=sharing" >
                    <span>Rulebook</span>
                </ActualLink>
          </li>
        </ul>
        
      
      </div>
      <div className="social-media">
        {/* hamburger menu start  */}
        <div className="hamburger-menu">
          <Link href="/" onClick={() => {setShowMediaIcons(!showMediaIcons)}}>
            {showMediaIcons ? (
              <IoClose className="icon" />
            ) : (
              <IoMenu className="icon" />
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
