import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Events from "./pages/Events/Events.js";
import Gallery from "./pages/Gallery/Gallery.js";
import Home from "./pages/Home/Home.js";
import ImageUploder from "./pages/ImageUploder.js";
import Leaderboard from "./pages/Leaderboard/Leaderboard.js";
import LiveScore from "./pages/LiveScore/LiveScore.js";
import OurTeam from "./pages/OurTeam/OurTeam.js";
import PointDetails from "./pages/PointDetails/PointDetails.js";
import SetLiveScore from "./pages/SetLiveScore/SetLiveScore.js";
import SetPointTableScore from "./pages/SetLiveScore/SetPointTableScore.js";
import SingleSport from "./pages/SingleSports/SingleSport.js";
import UpdateLiveScore from "./pages/SetLiveScore/UpdateLiveScore.js";
import { useSelector } from "react-redux";

// import ClipLoader from "react-spinners/ClipLoader";
// const style = {
//   position: "fixed",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
// };
// const properties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

function Pageroutes(){
  return (
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
  )
}


function App(){
  const isLoading = useSelector((state) => state.appReducer.isLoading);
  const [, setLoading] = useState(false);
  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [isLoading]);


  return (
      <Pageroutes/> 
  )
}


// function App() {
//   const isLoading = useSelector((state) => state.appReducer.isLoading);
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     if (isLoading) {
//       setLoading(true);
//     } else {
//       setLoading(false);
//     }
//   }, [isLoading]);
//   return (
//     <div className="App">
//        {/* <div className="style" style={style}> 
//            <SyncLoader
//            color="#030027"
//            loading={loading}
//            margin={5}
//            size={15}
//            speedMultiplier={1}
//            cssOverride={properties}
//          />
//        </div> */}
//       {/* <div>
//         <Loader/>
//       </div> */}

//       {/* <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/events" element={<Events />} />
//         <Route path="/events/:sportid" element={<SingleSport />} />
//         <Route path="/livescore/:sportname" element={<LiveScore />} />
//         <Route path="/leaderboard" element={<Leaderboard />} />
//         <Route path="/leaderboard/:collegename" element={<PointDetails />} />
//         <Route path="/team" element={<OurTeam />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/upload" element={<ImageUploder />} />
//         <Route path="/setmls" element={<SetLiveScore />} />
//         <Route path="/udtemls" element={<UpdateLiveScore />} />
//         <Route path="/udtept" element={<SetPointTableScore />} />
//       </Routes> */}
//     </div>
//   );
// }

export default App;
