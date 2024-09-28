import "./Gallery.scss";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import React from "react";
import SportGallery from "../../components/SportGallery/SportGallery";

function Gallery() {
  return (
    <div className="gallery">
      <Navbar />
      <h1>
        <span className="h1">ASHVA</span>
        <span className="h2">MEDHA-2022</span>
      </h1>
      <SportGallery />
      <Footer />
    </div>
  );
}

export default Gallery;
