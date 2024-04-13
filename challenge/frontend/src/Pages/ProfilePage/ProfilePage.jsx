import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

import CouncilProfile from "../../components/councilProfile/CouncilProfile";
import ComplaintWidget from "../../components/complaintWidget/ComplaintWidget";
import ComplaintTable from "../../components/ComplaintTable/ComplaintTable";
import "./ProfilePage.css";
import { isLoggedIn } from "../../utils/utils";

function Profile() {
  const [userProfile, setUserProfile] = useState({});
  const [openCases, setOpenCases] = useState([]);
  const [topComplaints, setTopComplaints] = useState([]);
  const [closedCases, setClosedCases] = useState([]);
  const [allComplaints, setAllComplaints] = useState([]);
  const [constituentComplaints, setConstituentComplaints] = useState([]);

  // useEffect for calling my fetches and token
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      console.log(token, "this is my token for ProfilePage");
      fetchProfileData(token);
      fetchOpenCases(token);
      fetchClosedCases(token);
      fetchAllComplaints(token);
      fetchTopComplaints(token);
      fetchConstituentComplaints(token);
    }
  }, []);

  // Fetches
  const fetchClosedCases = async (token) => {
    try {
      const response = await axios.get(
        "https://fullstack-coding-challenge-web.onrender.com/api/complaints/closedCases/",
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      setClosedCases(response.data); 
    } catch (error) {
      console.error("Failed to fetch Closed cases", error);
     
    }
  };

  const fetchTopComplaints = async (token) => {
    try {
      const response = await axios.get(
        "https://fullstack-coding-challenge-web.onrender.com/complaints/topComplaints/",
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      setTopComplaints(response.data);
    } catch (error) {
      console.error("Failed to fetch top Complaints", error);
     
    }
  };

  const fetchAllComplaints = async (token) => {
    try {
      const response = await axios.get(
        "https://fullstack-coding-challenge-web.onrender.com/api/complaints/allComplaints/",
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      setAllComplaints(response.data); 
    } catch (error) {
      console.error("Failed to fetch ALL complaints", error);
    }
  };

  const fetchProfileData = async (token) => {
    try {
      const response = await axios.get(
        "https://fullstack-coding-challenge-web.onrender.com/api/complaints/userProfile/",
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      setUserProfile(response.data); 
    } catch (error) {
      console.error("Failed to fetch User", error);
    }
  };

  const fetchConstituentComplaints = async (token) => {
    try {
      const response = await axios.get(
        "https://fullstack-coding-challenge-web.onrender.com/api/complaints/constituentComplaints/",
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      setConstituentComplaints(response.data); 
    } catch (error) {
      console.error("Failed to fetch Constituent only cases", error);
    }
  };

  const fetchOpenCases = async (token) => {
    try {
      const response = await axios.get(
        "https://fullstack-coding-challenge-web.onrender.com/api/complaints/openCases/",
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      setOpenCases(response.data); 
    } catch (error) {
      console.error("Failed to fetch Open cases", error);
    }
  };

  return (
    <>
      {isLoggedIn() ? (
        <div className="profile-container">
          <div className="profile-container__top">
            <CouncilProfile userProfile={userProfile} />
            <ComplaintWidget
              userProfile={userProfile}
              openCases={openCases}
              topComplaints={topComplaints}
              closedCases={closedCases}
            />
          </div>
          <div className="table">
            <ComplaintTable
              openCases={openCases}
              topComplaints={topComplaints}
              closedCases={closedCases}
              allComplaints={allComplaints}
              constituentComplaints={constituentComplaints}
            />
          </div>
        </div>
      ) : (
        <div className="unauthorized-login">
          <h2>Unauthorized Login</h2>
        </div>
      )}
    </>
  );
}
export default Profile;

// make logic to handle null data fields (council_dist, complaint_type, borough) Maybe add (emoji or icon)
