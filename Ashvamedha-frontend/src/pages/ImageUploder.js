import React, { useState } from "react";
import {server} from "../constants"
import axios from "axios";

function ImageUploder() {
  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");
  const [folderName, setFolderName] = useState("");
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
      const result = await axios.post(`${server}/upload/create`, {
        image,
        folderName: folderName,
        name: imageName,
      });
      console.log(result);
      
    } catch (err) {
      console.log("error", err);
    }
  };
  return (
    <div className="adminlogin">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="fileInput"> Upload you photo</label>
        <input
          type="file"
          onChange={(e) => handleImgChange(e)}
          accept="image/*"
          required
        />
        <img src={image} alt="" style={{ width: "200px", height: "200px" }} />
        <label htmlFor="fileInput"> folderName</label>
        <input
          type="text"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
          required
        />
        <label htmlFor="fileInput">Image Name</label>
        <input
          type="text"
          value={imageName}
          onChange={(e) => setImageName(e.target.value)}
          required
        />
        

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ImageUploder;
