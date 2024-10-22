import "./SportGallery.scss";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { server } from "../../constants.js";
import { AiOutlineClose } from "react-icons/ai/index.esm.js";
import axios from "axios";
import Loader from "../Loader/Loader.js"
import { setLoading } from "../../redux/appSlice.js";

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
        `${server}/upload/`,
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
      imgScr: "https://res.cloudinary.com/dxncseph9/image/upload/v1728639380/DSC_4762_uakyft.jpg",
      imgText: "Nature",
    },
    {
      cname: "w-3 h-3",
      imgScr: "https://res.cloudinary.com/dxncseph9/image/upload/v1728639379/DSC_2192_idwuyh.jpg",
      imgText: "People",
    },
    {
      cname: "h-2",
      imgScr: "https://res.cloudinary.com/dxncseph9/image/upload/v1728639379/DSC_2192_idwuyh.jpg",
      imgText: "Sports",
    },
    {
      cname: "w-2",
      isHeading: true,
      text: "EVENTS",
    },
    {
      cname: "w-4 h-1",
      imgScr: "https://res.cloudinary.com/dxncseph9/image/upload/v1728639375/DSC_1778_j4yrym.jpg",
      imgText: "Food",
    },
    {
      cname: "",
      imgScr: "https://res.cloudinary.com/dxncseph9/image/upload/v1728639375/DSC_4681_idmqyv.jpg",
      imgText: "Travel1",
    },
    {
      cname: "",
      imgScr: "https://res.cloudinary.com/dxncseph9/image/upload/v1728639371/DSC_1858_s0oj4b.jpg",
      imgText: "Travel2",
    },
    {
      cname: "h-2",
      imgScr: "https://res.cloudinary.com/dxncseph9/image/upload/v1728639367/DSC_3960_t4biwn.jpg",
      imgText: "Art",
    },
    {
      cname: "h-2",
      imgScr: "https://res.cloudinary.com/dxncseph9/image/upload/v1728639364/C0901T01_n5un0c.jpg",
      imgText: "Car1",
    },
    {
      cname: "w-2 h-3",
      imgScr: "https://res.cloudinary.com/dxncseph9/image/upload/v1728639363/_MG_9899_lww8mu.jpg",
      imgText: "car3",
    },
    {
      cname: "w-1 h-3",
      imgScr: "https://res.cloudinary.com/dxncseph9/image/upload/v1728639363/DSC_3978_hoswft.jpg",
      imgText: "Car4",
    },
    {
      cname: "w-3 h-2",
      imgScr: "https://res.cloudinary.com/dxncseph9/image/upload/v1728639362/DSC_4663_jz2ij7.jpg",
      imgText: "Car5",
    },
    {
      cname: "w-3 h-2",
      imgScr: "https://res.cloudinary.com/dxncseph9/image/upload/v1728639362/C0792T01_dwry5z.jpg",
      imgText: "Car6",
    },
    {
      cname: "w-1 h-1",
      imgScr: "https://res.cloudinary.com/dxncseph9/image/upload/v1728639361/_MG_0006_oarboo.jpg",
      imgText: "Car7",
    },
    {
      cname: "w-1 h-3",
      imgScr: "https://res.cloudinary.com/dxncseph9/image/upload/v1728639358/DSC_2257_t2b0jy.jpg",
      imgText: "Car8",
    },
    {
      cname: "w-2 h-2",
      imgScr: "https://res.cloudinary.com/dxncseph9/image/upload/v1728639359/_MG_9884_htw0ev.jpg",
      imgText: "Car10",
    },
    {
      cname: "w-3 h-2",
      imgScr: "https://res.cloudinary.com/dxncseph9/image/upload/v1728639355/DSC_2975_odbjk4.jpg",
      imgText: "Car11",
    },
    {
      cname: "w-2 h-1",
      isHeading: true,
      text: "CELEBRATIONS",
    },
    {
      cname: "w-3 h-2",
      imgScr: "https://res.cloudinary.com/dxncseph9/image/upload/v1728639353/_MG_9439_exywqc.jpg",
      imgText: "Nature",
    },
    {
      cname: "w-3 h-3",
      imgScr: "https://res.cloudinary.com/dxncseph9/image/upload/v1728639350/_MG_0249_zjbkqk.jpg",
      imgText: "People",
    },
    {
      cname: "h-2.5 w-2",
      imgScr: "https://res.cloudinary.com/dxncseph9/image/upload/v1728639347/_MG_0135_q8hp4v.jpg",
      imgText: "Sport1",
    },
    {
      cname: "h-1 w-1",
      imgScr: "https://res.cloudinary.com/dxncseph9/image/upload/v1728639345/_MG_0250_ywpdff.jpg",
      imgText: "Sport1",
    }
    // {
    //   cname: "w-2",
    //   isHeading: true,
    //   text: "EVENTS",
    // },
    // {
    //   cname: "w-4 h-2",
    //   imgScr: galleryImg[19]?.image?.url,
    //   imgText: "Food1",
    // },
    // {
    //   cname: "w-2 h-3",
    //   imgScr: galleryImg[20]?.image?.url,
    //   imgText: "Food2",
    // },
    // {
    //   cname: "",
    //   imgScr: galleryImg[21]?.image?.url,
    //   imgText: "Travel",
    // },
    // {
    //   cname: "w-3 h-2",
    //   imgScr: galleryImg[22]?.image?.url,
    //   imgText: "Car13",
    // },
    // {
    //   cname: "w-3 h-2",
    //   imgScr: galleryImg[23]?.image?.url,
    //   imgText: "Car13",
    // },
    // {
    //   cname: "w-2 h-1",
    //   imgScr: galleryImg[24]?.image?.url,
    //   imgText: "Car14",
    // },
    // {
    //   cname: "w-2 h-1",
    //   imgScr: galleryImg[25]?.image?.url,
    //   imgText: "Car-13",
    // },
    // {
    //   cname: "w-2",
    //   imgScr: galleryImg[26]?.image?.url,
    //   imgText: "Car-18",
    // },
  ];

  return (
    <>
    { !isLoading ?  
      (<>
        <h1>
        <span className="h1">ASHVA</span>
        <span className="h2">MEDHA-</span>
        <span className="h1">2023</span>
      </h1>
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
      </>) :
    <Loader/>}
    </>
  );
}

export default SportGallery;
