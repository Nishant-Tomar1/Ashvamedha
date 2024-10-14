import "./Home.scss";

import AboutUs from "../../components/AboutUs/AboutUs.js";
import Footer from "../../components/Footer/Footer.js";
import Hero from "../../components/Hero/Hero.js";
import Navbar from "../../components/Navbar/Navbar.js";
import React from "react";
import HomeGallery from "../Gallery/HomeGallery.js";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <AboutUs />
      <HomeGallery/>
      <Footer />
    </div>
  );
}
export default Home;
