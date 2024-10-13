import "./Home.scss";

import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import React from "react";
import HomeGallery from "../Gallery/HomeGallery";

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
