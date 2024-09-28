import "./SportGallery.scss";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { setLoading } from "../../redux/appSlice";

function SportGallery() {
  const isLoading = useSelector((state) => state.appReducer.isLoading);
  const dispatch = useDispatch();
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  function getImg(imgSrc) {
    setTempImgSrc(imgSrc);
    setModel(true);
  }
  const [galleryImg, setGalleryImg] = useState([]);
  async function fetchGalleryImages() {
    try {
      dispatch(setLoading(true));
      const response = await axios.post(
        "https://ashvamedha.onrender.com/upload/",
        {
          folderName: "galleryImg",
        }
      );
      setGalleryImg(response.data.result);
    } catch (err) {
    } finally {
      dispatch(setLoading(false));
    }
  }
  useEffect(() => {
    fetchGalleryImages();
  }, []);
  const galleryPhotos = [
    {
      cname: "w-3 h-2",
      imgScr: galleryImg[0]?.image?.url,
      imgText: "Nature",
    },
    {
      cname: "w-3 h-3",
      imgScr: galleryImg[1]?.image?.url,
      imgText: "People",
    },
    {
      cname: "h-2",
      imgScr: galleryImg[2]?.image?.url,
      imgText: "Sports",
    },
    {
      cname: "w-2",
      isHeading: true,
      text: "CLOSING CEREMONY",
    },
    {
      cname: "w-4 h-1",
      imgScr: galleryImg[3]?.image?.url,
      imgText: "Food",
    },
    {
      cname: "",
      imgScr: galleryImg[4]?.image?.url,
      imgText: "Travel1",
    },
    {
      cname: "",
      imgScr: galleryImg[5]?.image?.url,
      imgText: "Travel2",
    },
    {
      cname: "h-2",
      imgScr: galleryImg[6]?.image?.url,
      imgText: "Art",
    },
    {
      cname: "h-2",
      imgScr: galleryImg[8]?.image?.url,
      imgText: "Car1",
    },
    {
      cname: "w-2 h-3",
      imgScr: galleryImg[7]?.image?.url,
      imgText: "car3",
    },
    {
      cname: "w-1 h-3",
      imgScr: galleryImg[11]?.image?.url,
      imgText: "Car4",
    },
    {
      cname: "w-3 h-2",
      imgScr: galleryImg[9]?.image?.url,
      imgText: "Car5",
    },
    {
      cname: "w-3 h-2",
      imgScr: galleryImg[10]?.image?.url,
      imgText: "Car6",
    },
    {
      cname: "w-1 h-1",
      imgScr: galleryImg[12]?.image?.url,
      imgText: "Car7",
    },
    {
      cname: "w-1 h-3",
      imgScr: galleryImg[16]?.image?.url,
      imgText: "Car8",
    },
    {
      cname: "w-2 h-2",
      imgScr: galleryImg[14]?.image?.url,
      imgText: "Car10",
    },
    {
      cname: "w-3 h-2",
      imgScr: galleryImg[15]?.image?.url,
      imgText: "Car11",
    },
    {
      cname: "w-2 h-1",
      isHeading: true,
      text: "CELEBRATIONS",
    },
    {
      cname: "w-3 h-2",
      imgScr: galleryImg[13]?.image?.url,
      imgText: "Nature",
    },
    {
      cname: "w-3 h-3",
      imgScr: galleryImg[17]?.image?.url,
      imgText: "People",
    },
    {
      cname: "h-2 w-2",
      imgScr: galleryImg[18]?.image?.url,
      imgText: "Sport1",
    },
    {
      cname: "w-2",
      isHeading: true,
      text: "EVENTS",
    },
    {
      cname: "w-4 h-2",
      imgScr: galleryImg[19]?.image?.url,
      imgText: "Food1",
    },
    {
      cname: "w-2 h-3",
      imgScr: galleryImg[20]?.image?.url,
      imgText: "Food2",
    },
    {
      cname: "",
      imgScr: galleryImg[21]?.image?.url,
      imgText: "Travel",
    },
    {
      cname: "w-3 h-2",
      imgScr: galleryImg[22]?.image?.url,
      imgText: "Car13",
    },
    {
      cname: "w-3 h-2",
      imgScr: galleryImg[23]?.image?.url,
      imgText: "Car13",
    },
    {
      cname: "w-2 h-1",
      imgScr: galleryImg[24]?.image?.url,
      imgText: "Car14",
    },
    {
      cname: "w-2 h-1",
      imgScr: galleryImg[25]?.image?.url,
      imgText: "Car-13",
    },
    {
      cname: "w-2",
      imgScr: galleryImg[26]?.image?.url,
      imgText: "Car-18",
    },
  ];

  return (
    !isLoading && (
      <div class="container-gallery">
        <div className={model ? "model open" : "model"}>
          <img src={tempImgSrc} alt="Loading..." />
          <AiOutlineClose onClick={() => setModel(false)} className="icon" />
        </div>
        {galleryPhotos.map((item) => {
          return item.isHeading ? (
            <div className={`gallery-container ${item.cname}`}>
              <div className="heading">{item.text}</div>
            </div>
          ) : (
            <div className={`gallery-container ${item.cname}`}>
              <div className="gallery-item" onClick={() => getImg(item.imgScr)}>
                <div className="image">
                  <img src={item.imgScr} alt={item.imgText} />
                </div>
                <div className="text">{item.imgText}</div>
              </div>
            </div>
          );
        })}
      </div>
    )
  );
}

export default SportGallery;
