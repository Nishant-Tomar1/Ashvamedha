import "./Home.scss";
import "./Home.scss";

import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import React from "react";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <AboutUs />
      <Footer />
    </div>
  );
}
export default Home;
