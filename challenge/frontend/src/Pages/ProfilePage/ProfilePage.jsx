import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

import CouncilProfile from "../../components/councilProfile/CouncilProfile";
import ComplaintWidget from "../../components/complaintWidget/ComplaintWidget";
import ComplaintTable from "../../components/complaintTable/ComplaintTable";
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
        "http://127.0.0.1:8000/api/complaints/closedCases/",
        {
          headers: {
            Authorization: `Token ${token}`, // Adjust according to how your API expects the token
          },
        }
      );
      setClosedCases(response.data); // Assuming the data is the object you want
    } catch (error) {
      console.error("Failed to fetch Closed cases", error);
      // Handle error (e.g., by setting an error state or logging out the user)
    }
  };

  const fetchTopComplaints = async (token) => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/complaints/topComplaints/",
        {
          headers: {
            Authorization: `Token ${token}`, // Adjust according to how your API expects the token
          },
        }
      );

      setTopComplaints(response.data);
    } catch (error) {
      console.error("Failed to fetch top Complaints", error);
      // Handle error (e.g., by setting an error state or logging out the user)
    }
  };

  const fetchAllComplaints = async (token) => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/complaints/allComplaints/",
        {
          headers: {
            Authorization: `Token ${token}`, // Adjust according to how your API expects the token
          },
        }
      );

      setAllComplaints(response.data); // Assuming the data is the object you want
    } catch (error) {
      console.error("Failed to fetch ALL complaints", error);
      // Handle error (e.g., by setting an error state or logging out the user)
    }
  };

  const fetchProfileData = async (token) => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/complaints/userProfile/",
        {
          headers: {
            Authorization: `Token ${token}`, // Adjust according to how your API expects the token
          },
        }
      );

      setUserProfile(response.data); // Assuming the data is the object you want
    } catch (error) {
      console.error("Failed to fetch User", error);
      // Handle error (e.g., by setting an error state or logging out the user)
    }
  };

  const fetchConstituentComplaints = async (token) => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/complaints/constituentComplaints/",
        {
          headers: {
            Authorization: `Token ${token}`, // Adjust according to how your API expects the token
          },
        }
      );

      setConstituentComplaints(response.data); // Assuming the data is the object you want
    } catch (error) {
      console.error("Failed to fetch Constituent only cases", error);
      // Handle error (e.g., by setting an error state or logging out the user)
    }
  };

  const fetchOpenCases = async (token) => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/complaints/openCases/",
        {
          headers: {
            Authorization: `Token ${token}`, // Adjust according to how your API expects the token
          },
        }
      );

      setOpenCases(response.data); // Assuming the data is the object you want
    } catch (error) {
      console.error("Failed to fetch Open cases", error);
      // Handle error (e.g., by setting an error state or logging out the user)
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
          {/* <CarouselComplaints allComplaints={allComplaints} />={" "} */}
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
