import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

import CouncilProfile from "../../components/counsilProfile/CouncilProfile";
import CouncilComplaintData from "../../components/councilComplaintData/CouncilComplaintData";
import ComplaintTable from "../../components/ComplaintTable/ComplaintTable";
import "./ProfilePage.css";
import CarouselComplaints from "../../components/CarouselComplaints/CarouselComplaints";
import { districtNumberOnly, isLoggedIn } from "../../utils/utils";

function Profile({ setDisplayUserName }) {
  const [userProfile, setUserProfile] = useState({});
  const [openCases, setOpenCases] = useState([]);
  const [topComplaints, setTopComplaints] = useState([]);
  const [closedCases, setClosedCases] = useState([]);
  const [allComplaints, setAllComplaints] = useState([]);
  const [constituentComplaints, setConstituentComplaints] = useState([]);

  const token = Cookies.get("token");

  // useEffect for calling my fetches and token
  useEffect(() => {
    fetchProfileData();
    fetchOpenCases();
    fetchClosedCases();
    fetchAllComplaints();
    fetchTopComplaints();
    fetchConstituentComplaints();
  }, []);

  // Fetches
  const fetchClosedCases = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/complaints/closedCases/",
        {
          headers: {
            Authorization: `Token ${token}`, // Adjust according to how your API expects the token
          },
        }
      );
      console.log(response.data, "THIS IS MY RESPONSE USEEFFECT");
      setClosedCases(response.data); // Assuming the data is the object you want
      console.log("closed cases in fetch", closedCases);
    } catch (error) {
      console.error("Failed to fetch Closed cases", error);
      // Handle error (e.g., by setting an error state or logging out the user)
    }
  };

  const fetchTopComplaints = async () => {
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

  const fetchAllComplaints = async () => {
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

  const fetchProfileData = async () => {
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

  const fetchConstituentComplaints = async () => {
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

  const fetchOpenCases = async () => {
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
            <CouncilComplaintData
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
