import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Assuming you're using axios for HTTP requests

function Profile() {
  // const [openCases, setOpenCases] = useState({});
  // const [topComplaints, setTopComplaints] = useState({});
  const [closedCases, setClosedCases] = useState([]);

  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("token"); // Remove the token
    navigate("/");
  };

  // Function to check if the user is logged in
  const isLoggedIn = () => {
    const token = Cookies.get("token");
    return !!token;
  };

  useEffect(() => {
    const token = Cookies.get("token");

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
    fetchClosedCases();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      {isLoggedIn() ? (
        <div>
          <h1>You Logged IN</h1>
          <img
            src="https://external-preview.redd.it/3FNffFt4kDCud_fCx-ogBTWPio0HNxRyRi5rffaUYP0.png?auto=webp&s=f3bff42bd00f0019e7510a3909c89e137b86e17c"
            alt="leo"
          />
          <button onClick={handleLogout}>Logout</button>
          <div className="table">
            <h2>Closed Cases</h2>
            {closedCases.length && (
              <>
                <h3>
                  A constituent from {closedCases[0].council_dist} made a{" "}
                  {closedCases[0].complaint_type} complaint in your district
                </h3>
                <h3>
                  A constituent from {closedCases[1].council_dist} made a{" "}
                  {closedCases[1].complaint_type} complaint in your district
                </h3>
                <h3>
                  A constituent from {closedCases[2].council_dist} made a{" "}
                  {closedCases[2].complaint_type} complaint in your district
                </h3>
                <h3>
                  A constituent from {closedCases[3].council_dist} made a{" "}
                  {closedCases[3].complaint_type} complaint in your district
                </h3>
              </>
            )}
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
