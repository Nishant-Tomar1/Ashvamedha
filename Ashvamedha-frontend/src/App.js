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
import AdminLogin from "./pages/Admin/AdminLogin.js";
import { useLogin } from "./context/loginContextProvider.js";
import { useCookies } from "react-cookie";
import { verifyToken } from "./utils/verifyToken.js";
import AdminHome from "./pages/Admin/AdminHome.js";

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
        <Route path="/setlivescore" element={<SetLiveScore />} />
        <Route path="/updatelivescore" element={<UpdateLiveScore />} />
        <Route path="/updatepointstable" element={<SetPointTableScore />} />
        <Route path="/admin" element={<AdminHome/>} />
        <Route path="/admin/login" element={<AdminLogin />} />
    </Routes>
  )
}


function App(){
  const isLoading = useSelector((state) => state.appReducer.isLoading);
  const [, setLoading] = useState(false);
  const LoginCtx = useLogin();
  const [cookies] = useCookies(["accessToken", "refreshToken"])

  useEffect( ()=>{
    const Verify = async () => {
      if (cookies.accessToken){
        // console.log("hello");
        
        const res = await verifyToken();
        // console.log(res);
        
        if (res.isLoggedIn){
          LoginCtx.login(cookies.accessToken, cookies.refreshToken, res?.sport);
        }
        
      }
    }
    Verify();
  })

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


export default App;
