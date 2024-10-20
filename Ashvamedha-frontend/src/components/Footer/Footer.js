import "./Footer.scss";

import { 
  // AiOutlineInstagram,
   AiOutlineMail } from "react-icons/ai/index.esm.js";
import { BiCopyright, BiSolidPhoneCall } from "react-icons/bi/index.esm.js";
import {
  //  FaFacebook, FaFacebookF,
   FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa/index.esm.js";

import { HiLocationMarker } from "react-icons/hi/index.esm.js";
import React from "react";

function Footer() {
  const handleRedirect = (platform) => {
    let url;

    switch (platform) {
      case 1:
        // Instagram
        url = "https://www.instagram.com/ashvamedha_iitbbs/";
        break;
      case 2:
        // Facebook
        url = "https://www.facebook.com/AshvamedhaIITBBS/";
        break;
      case 3:
        // LinkedIn
        url =
          "https://www.linkedin.com/company/ashvamedha-iit-bhubaneswar/mycompany/";
        break;
      default:
        // Default action if platform parameter is not recognized
        return;
    }

    window.open(url, "_blank"); // Open the URL in a new tab
  };
  return (
    <div className="footer ContactUs">
      <div className="container">
        <div className="part1">
          <div className="left">
            <h1 className="title">
              <span className="p1">ASHVA</span>
              <span className="p2">MEDHA</span>
            </h1>
            <h2 className="desc">The Annual Sports fest of IIT Bhubaneswar</h2>
            <div className="social-media">
              <div
                className="icons instagram"
                onClick={() => handleRedirect(1)}
              >
                <FaInstagram className="icon" />
              </div>
              <div className="icons facebook" onClick={() => handleRedirect(2)}>
                <FaFacebookSquare className="icon" />
              </div>
              <div className="icons linkedin" onClick={() => handleRedirect(3)}>
                <FaLinkedin className="icon" />
              </div>
            </div>
          </div>
          <div className="right">
            <h2 className="address">Address</h2>
            <p className="location">
              <span>
                <HiLocationMarker />
              </span>
              Gymkhana Office, IIT Bhubaneswar
            </p>
            <p className="call">
              <span>
                <BiSolidPhoneCall />
              </span>
              +91 7976512192
            </p>
            <p className="email">
              <span>
                <AiOutlineMail />
              </span>
              coord.ashvamedha@iitbbs.ac.in
            </p>
          </div>
        </div>
        <div className="part2">
          <div className="bottom">
            <BiCopyright />
            <p className="copyright">
              Ashvamedha, <span className="p2">All Right Reserved.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
