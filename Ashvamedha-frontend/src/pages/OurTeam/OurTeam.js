import "./OurTeam.scss";

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
// import axios from "axios";
// import { setLoading } from "../../redux/appSlice";
// import Loader from "../../components/Loader/Loader";

function OurTeam() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.appReducer.isLoading);
  // const [teamImg, setTeamImg] = useState([]);
  // async function fetchTeamImages() {
  //   try {
  //     dispatch(setLoading(true));
  //     const response = await axios.post(
  //       "https://ashvamedha.onrender.com/upload/",
  //       {
  //         folderName: "TeamImg",
  //       }
  //     );
  //     setTeamImg(response?.data?.result);
  //   } catch (err) {
  //   } finally {
  //     dispatch(setLoading(false));
  //   }
  // }
  // useEffect(() => {
  //   fetchTeamImages();
  // }, []);
  const chiefCoordinator = [
    {
      name: "Abhishek Jakhar",
      position: "Chief Coordinator",
      image: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1729327567/ashvamedha/team/z0wu3a16v1k0wgqeyxt5.jpg",
      no: "+91 7976512192",
    },
  ];

  const teamMembers = [
    {
      name: "Sanskar Kosare",
      position: "Publicity ",
      image: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728720503/ashvamedha/team/pi1yovzsrbn9xqew5hew.jpg",
      no: "+91 8208278646",
    },
    {
      name: "Mayank Raj",
      position: "Events ",
      image: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728721046/ashvamedha/team/vplukiobhozebm5pio5t.jpg",
      no: "+91 7709446384",
    },
    {
      name: "Soumyajeet",
      position: "Sponsorship",
      image : "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728720503/ashvamedha/team/wvxnpci56fgf6qa2uyik.jpg",
      no: "+91 9836821118",
    },
    {
      name: "Adhiraj Dubey",
      position: "Web&D ",
      image: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728720505/ashvamedha/team/d6pqqqdexscnkvwnoxps.jpg",
      no: "+91 9589660889",
    },
    {
      name: "Tanish",
      position:"Hospitality",
      image: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728720504/ashvamedha/team/itligupcge8v6xtmrbiw.jpg",
      no: "+91 6350108695",
    },
  ];
  const corehead = [
    {
      name: "Nishant",
      position: "Core Head",
      image: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728720504/ashvamedha/team/vlycnaazp2qcrygswxya.jpg",
      no: "+91 8920481815",
    },
    {
      name: "Shivam",
      position: "Core Head",
      image: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728843691/ashvamedha/team/u5rmar3eivphrscjfm8f.jpg",
      no: "+91 6378287518",
    },
    {
      name: "Nirali",
      position: "Core Head",
      image: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728720504/ashvamedha/team/vvxkkb0qsq2cd6t7vkvx.jpg",
      no: "+91 6378233277",
    },
    {
      name: "Ghanshyam",
      position: "Core Head",
      image: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1729419882/ashvamedha/team/zpcylfs2qx6vtsnovhur.jpg",
      no: "+91 8319901135",
    },
    {
      name: "Thanvi Reddy",
      position: "Core Head",
      image: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728720504/ashvamedha/team/vjmjgjyyxwcdksbuoeyj.jpg",
      no: "+91 9381811060",
    },
    {
      name: "Aniket",
      position: "Core Head",
      image: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728720505/ashvamedha/team/suzhk8pi17d2a9tng3u0.jpg",
      no: "+91 9798697313",
    },
    {
      name: "Dingum",
      position: "Core Head",
      image:"https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1729402896/ashvamedha/team/xg85qegkihg0luh1th9v.jpg",
      no: "+91 9366471892",
    },
    
    {
      name: "Vipin Kumar",
      position: "Core Head",
      image: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728843690/ashvamedha/team/ide1pqdiut3yacmsnbhk.jpg",
      no: "+91 7082604643",
    },
    {
      name: "Rohit Mehta",
      position: "Core Head",
      image: "https://res.cloudinary.com/backend-project-chai-aur-code/image/upload/v1728720504/ashvamedha/team/zskuba18jbufnnsvjsic.jpg",
      no: "+91 9119344248",
    },
  ];
  return (
    <>
    <Navbar />
    {/* {!isLoading ?  */}
      (<div className="OurTeam">
        <h2 className="heading">
          <span className="h1">OUR</span>
          <span className="h2"> TEAM</span>
        </h2>
        <div className="team-container">
          <div className="cards">
            {/* Display Chief Coordinator outside the grid */}
            <div className="chief-coordinator">
              {chiefCoordinator.map((member, index) => (
                <div className="card" key={index}>
                  <div className="image">
                    <img src={member.image} alt="" />
                  </div>
                  <div className="description">
                    <p>{member.position}</p>
                    <h3 className="name">{member.name}</h3>
                    <h3>{member.no}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="coordinator">
              {teamMembers.map((member, index) => (
                <div className="card" key={index}>
                  <div className="image">
                    <img src={member.image} alt="" />
                  </div>
                  <div className="description">
                    <p>{member.position} <br /> Co-ordinator</p>
                    <h3 className="name">{member.name}</h3>
                    <h3>{member.no}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="coreheads">
              {corehead.map((member, index) => (
                <div className="card" key={index}>
                  <div className="image">
                    <img src={member.image} alt="" />
                  </div>
                  <div className="description">
                    <p>{member.position}</p>

                    <h3 className="name">{member.name}</h3>
                    <h3>{member.no}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>)
     {/* : <Loader/>} */}
    </>
  );
}

export default OurTeam;
