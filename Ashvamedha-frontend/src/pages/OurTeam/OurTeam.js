import "./OurTeam.scss";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { setLoading } from "../../redux/appSlice";

function OurTeam() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.appReducer.isLoading);
  const [teamImg, setTeamImg] = useState([]);
  async function fetchTeamImages() {
    try {
      dispatch(setLoading(true));
      const response = await axios.post(
        "https://ashvamedha.onrender.com/upload/",
        {
          folderName: "TeamImg",
        }
      );
      setTeamImg(response?.data?.result);
    } catch (err) {
    } finally {
      dispatch(setLoading(false));
    }
  }
  useEffect(() => {
    fetchTeamImages();
  }, []);
  const chiefCoordinator = [
    {
      name: "Deepanshu Choudhary",
      position: "Chief Coordinator",
      image: teamImg[0]?.image?.url,
      no: "+91 8449485116",
    },
  ];

  const teamMembers = [
    {
      name: "Damtak Ligu",
      position: "Publicity Co-ordinator",
      image: teamImg[3]?.image?.url,
      no: "+91 7630956265",
    },
    {
      name: "Sarlongki",
      position: "Events Co-ordinator",
      image: teamImg[1]?.image?.url,
      no: "+91 8135071971",
    },
    {
      name: "Anurag Barman",
      position: "Spons Co-ordinator",
      image: teamImg[2]?.image?.url,
      no: "+91 7099537740",
    },
    {
      name: "Meenal C Nimje",
      position: "Web&D Co-ordinator",
      image: teamImg[4]?.image?.url,
      no: "+91 8591182265",
    },
  ];
  const corehead = [
    {
      name: "Arihant Garg",
      position: "Core Head",
      image: teamImg[5]?.image?.url,
      no: "+91 8448861199",
    },
    {
      name: "Ayush Singh",
      position: "Core Head",
      image: teamImg[6]?.image?.url,
      no: "+91 7078421798",
    },
    {
      name: "Natasha Mukherjee",
      position: "Core Head",
      image: teamImg[7]?.image?.url,
      no: "+91 9959533758",
    },
    {
      name: "Ram",
      position: "Core Head",
      image: teamImg[8]?.image?.url,
      no: "+91 8328537734",
    },
    {
      name: "Devesh Patodkar",
      position: "Core Head",
      image: teamImg[9]?.image?.url,
      no: "+91 8379957983",
    },
  ];
  return (
    !isLoading && (
      <div className="OurTeam">
        <Navbar />
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
                    <p>{member.position}</p>
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
      </div>
    )
  );
}

export default OurTeam;
