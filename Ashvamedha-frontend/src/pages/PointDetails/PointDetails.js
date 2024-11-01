import "./PointDetails.scss";

import React, { useEffect, useState } from "react";

import Footer from "../../components/Footer/Footer.js";
import Navbar from "../../components/Navbar/Navbar.js";
import PointInfo from "../../components/PointInfo/PointInfo.js";
import axios from "axios";
import { setLoading } from "../../redux/appSlice.js";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {server} from "../../constants.js"
import { useSelector } from "react-redux";

const head = {
  sportName: 'SPORT', category: 'CAT.', matchName: 'MATCH NAME', college1: 'OPP.', point: 'PTS.' 
}

function PointDetails() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.appReducer.isLoading);
  const [pointinfo, setPointinfo] = useState([]);
  const params = useParams();
  async function fetchdata() {
    try {
      dispatch(setLoading(true));
      const response = await axios.post(
        `${server}/college/`,
        {
          collegeName: params.collegename,
        }
      );
      // console.log(response.data.result.modifiedResult);
      

      setPointinfo(response.data.result.modifiedResult);
    } catch (e) {
      console.log("error from point deatils side", e);
    } finally {
      dispatch(setLoading(false));
    }
  }
  useEffect(() => {
    fetchdata();
  }, []);
  return pointinfo.length === 0 ? (
    <div className="pd">
      <Navbar />
      {/* <div class="wrapper">
        <h3 class="typing">
          Your team is yet to score <br />
        </h3>
      </div> */}
      <div className="wrapper">
        <h2 >Your team is yet to score!!</h2>
      </div>
      <Footer />
    </div>
  ) : (
    <div className="pd">
      <Navbar />
      <div className="main">
        <h2 className="heading-point">
          <span className="h1">POINTS</span>
          <span className="h2">TABLE</span>
        </h2>
        {!isLoading && (
          <div className="pointdetail">
            <PointInfo gameInfo={head}/>
            {pointinfo.map((item, index) => (
              <PointInfo gameInfo={item} key={index} serialNo={index} />
            ))}
          </div>
        )}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default PointDetails;
