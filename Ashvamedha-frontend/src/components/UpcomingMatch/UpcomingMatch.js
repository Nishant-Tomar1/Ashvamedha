import "./UpcomingMatch.scss";

import React, { useEffect, useState } from "react";
import { useDispatch,
  //  useSelector 
  } from "react-redux";
import { server } from "../../constants.js";
import { VscClose } from "react-icons/vsc/index.esm.js";
import axios from "axios";
import badminton from "../../assests/demoPhotos/badminton.jpg";
import basketball from "../../assests/demoPhotos/basketball.jpg";
import chess1 from "../../assests/demoPhotos/chess.jpg";
import football from "../../assests/demoPhotos/football.jpg";
import { setLoading } from "../../redux/appSlice.js";
import tabletennis from "../../assests/demoPhotos/tt.jpg";
import volleyball from "../../assests/demoPhotos/vb.jpg";

function UpcomingMatch(props) {
  const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.appReducer.isLoading);
  // const [img, setImg] = useState("");
  const [fixtureImg, setFixtureImg] = useState({});
  const [isTrigger, setIsTrigger] = useState(props.trigger);
  const upcomingmatchImg = [
    { id: 1, sportName: "chess", img: chess1, fixtureName: "chessp" },
    {
      id: 2,
      sportName: "badminton",
      img: badminton,
      fixtureName: "badmintonp",
    },
    {
      id: 3,
      sportName: "volleyball",
      img: volleyball,
      fixtureName: "volleyballp",
    },
    { id: 4, sportName: "football", img: football, fixtureName: "footballp" },
    {
      id: 5,
      sportName: "basketball",
      img: basketball,
      fixtureName: "basketballp",
    },
    { id: 6, sportName: "table-tennis", img: tabletennis, fixtureName: "ttp" },
  ];
  async function getFixtures() {
    try {
      dispatch(setLoading(true));
      const result = upcomingmatchImg.find(({ id }) => id === props.sportid);
      const fixturePost = await axios.post(
        `${server}/upload/name`,
        {
          folderName: "4th-nov-fixtures",
          name: result.fixtureName,
        }
      );
      setFixtureImg(fixturePost.data.result[0]);
      // console.log("fixture", fixturePost.data.result[0]);
    } catch (error) {
    } finally {
      dispatch(setLoading(false));
    }
  }
  useEffect(() => {
    getFixtures();
  });
  return isTrigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setIsTrigger(!isTrigger)}>
          <VscClose className="close" />
        </button>
        <img src={fixtureImg?.image?.url} alt="Loading" className="images" />
      </div>
    </div>
  ) : (
    ""
  );
}

export default UpcomingMatch;
