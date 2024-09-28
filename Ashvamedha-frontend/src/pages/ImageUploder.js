import React, { useState } from "react";

import axios from "axios";

function ImageUploder() {
  const [image, setImage] = useState("");
  function handleImgChange(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      if (fileReader.readyState === fileReader.DONE) {
        setImage(fileReader.result);
      }
    };
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:4000/upload/create", {
        image,
        folderName: "eventImgSmall",
        name: "tt",
      });
    } catch (err) {
      console.log("error", err);
    }
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="fileInput"> Upload you photo</label>
        <input
          type="file"
          onChange={(e) => handleImgChange(e)}
          accept="image/*"
          required
        />
        <button>Submit</button>
      </form>
      <img src={image} alt="" style={{ width: "200px", height: "200px" }} />
    </div>
  );
}

export default ImageUploder;
