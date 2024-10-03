import "./Gallery.scss";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import React from "react";
import SportGallery from "../../components/SportGallery/SportGallery";

function Gallery() {
  return (
    <div className="gallery">
      <Navbar />
      
      <SportGallery />
      <Footer />
    </div>
  );
}

export default Gallery;
