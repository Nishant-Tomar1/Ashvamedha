import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Events from "./pages/Events/Events";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import ImageUploder from "./pages/ImageUploder";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import LiveScore from "./pages/LiveScore/LiveScore";
import OurTeam from "./pages/OurTeam/OurTeam";
import PointDetails from "./pages/PointDetails/PointDetails";
import SetLiveScore from "./pages/SetLiveScore/SetLiveScore";
import SetPointTableScore from "./pages/SetLiveScore/SetPointTableScore";
import SingleSport from "./pages/SingleSports/SingleSport";
import SyncLoader from "react-spinners/SyncLoader";
import UpdateLiveScore from "./pages/SetLiveScore/UpdateLiveScore";
import { useSelector } from "react-redux";
import Loader from "./components/Loader/Loader";

import ClipLoader from "react-spinners/ClipLoader";
const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
const properties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
function App() {
  const isLoading = useSelector((state) => state.appReducer.isLoading);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [isLoading]);
  return (
    <div className="App">
       <div className="style" style={style}> 
           <SyncLoader
           color="#030027"
           loading={loading}
           margin={5}
           size={15}
           speedMultiplier={1}
           cssOverride={properties}
         />
       </div>
      {/* <div>
        <Loader/>
      </div> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:sportid" element={<SingleSport />} />
        <Route path="/livescore/:sportname" element={<LiveScore />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/leaderboard/:collegename" element={<PointDetails />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/upload" element={<ImageUploder />} />
        <Route path="/setmls" element={<SetLiveScore />} />
        <Route path="/udtemls" element={<UpdateLiveScore />} />
        <Route path="/udtept" element={<SetPointTableScore />} />
      </Routes>
    </div>
  );
}

export default App;
