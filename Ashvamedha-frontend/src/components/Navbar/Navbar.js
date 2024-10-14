import "./Navbar.scss";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa/index.esm.js";
import { IoClose, IoMenu } from "react-icons/io5";
import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi/index.esm.js";
import { Link } from "react-scroll";
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
    {
      title: "Contact Us",
      path: "ContactUs",
      cName: "nav-text",
    },
    {
      title: "Rulebook",
      path: "/rulebook",
      cName: "nav-text ",
      navigate: true,
    },
  ];
  const navigate = useNavigate();
  return (
    <nav className="main-nav">
      <div className="logo" onClick={() => navigate("/")}>
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
                  to="#"
                  onClick={() => {
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
        </ul>
      </div>
      <div className="social-media">
        {/* hamburger menu start  */}
        <div className="hamburger-menu">
          <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            {showMediaIcons ? (
              <IoClose className="icon" />
            ) : (
              <IoMenu className="icon" />
            )}
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
