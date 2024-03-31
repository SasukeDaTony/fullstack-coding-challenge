import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Assuming you're using axios for HTTP requests
import ComplaintTable from "../../components/ComplaintTable/ComplaintTable";

function Profile() {
  const [userProfile, setUserProfile] = useState([]);
  const [openCases, setOpenCases] = useState([]);
  const [topComplaints, setTopComplaints] = useState([]);
  const [closedCases, setClosedCases] = useState([]);
  const [allComplaints, setAllComplaints] = useState([]);
  const [constituentComplaints, setConstituentComplaints] = useState([]);

  const navigate = useNavigate();
  const token = Cookies.get("token");

  // Remove the token log out function
  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/");
  };

  // Function to check if the user is logged in
  const isLoggedIn = () => {
    const token = Cookies.get("token");
    return !!token;
  };

  // useEffect for calling my fetches and token
  useEffect(() => {
    fetchProfileData();
    fetchOpenCases();
    fetchClosedCases();
    fetchAllComplaints();
    fetchTopComplaints();
    fetchConstituentComplaints();
  }, []);

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
      console.log(response.data, "THIS IS Top COmplaints");
      setTopComplaints(response.data);
      console.log("top Complaints in fetch", topComplaints);
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
      console.log(response.data, "THIS IS MY AllComplaints");
      setAllComplaints(response.data); // Assuming the data is the object you want
      console.log("all complaints in fetch", allComplaints);
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
      console.log(response.data, " this is userProfile data");
      setUserProfile(response.data); // Assuming the data is the object you want
      console.log("User in fetch", userProfile);
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
      console.log(response.data, " this is ALL ONLY CONSTITUENTS");
      setConstituentComplaints(response.data); // Assuming the data is the object you want
      console.log(
        "constituent only complaints in fetch",
        constituentComplaints
      );
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
      console.log(response.data, " this is ALL OPEN Cases");
      setOpenCases(response.data); // Assuming the data is the object you want
      console.log("open cases in fetch", openCases);
    } catch (error) {
      console.error("Failed to fetch Open cases", error);
      // Handle error (e.g., by setting an error state or logging out the user)
    }
  };

  return (
    <>
      {isLoggedIn() ? (
        <div className="profile_container">
          <div className="log_in_confirm">
            <h1>You Logged IN</h1>
            <img
              src="https://crickethof.org/wp-content/uploads/2021/07/MAISEL-300x300.png"
              alt="leo"
            />
            <button onClick={handleLogout}>Logout</button>
          </div>

          <div className="table">
            <h2>Below is Dummy Table for testing</h2>
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
        navigate("/")
      )}
    </>
  );
}
export default Profile;

// make your html table
// make logic to handle null data fields (council_dist, complaint_type, borough)
// make sure your data is being filtered correctly (with tenzing)
// CSS convention
// finish making the other GET requests once logged in
// create button that filters Html table for complaints where account === council_dist *BONUS REACT SIDE README.MD
