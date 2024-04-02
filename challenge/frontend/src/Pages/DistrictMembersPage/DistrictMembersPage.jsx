import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CouncilProfile from "../../components/councilProfile/CouncilProfile";
import "./DistrictMembersPage.css";

function DistrictMembersPage() {
  const [allUsers, setAllUsers] = useState([]);
  const { userDistrict } = useParams();

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/complaints/allUsers"
      );
      setAllUsers(response.data); // Assuming the data is the object you want
    } catch (error) {
      console.error("Failed to fetch all Users", error);
      // Handle error (e.g., by setting an error state or logging out the user)
    }
  };

  const filteredUser = allUsers.filter(
    (user) => user.district.slice(4) === userDistrict
  )[0];

  console.log(filteredUser);

  if (allUsers.length === 0) {
    return <div></div>;
  }

  return (
    <div className="member">
      <h3>
        For <span className="red">Complaints</span> Information Please Log In...
      </h3>
      <div id="district-member__container">
        <CouncilProfile userProfile={filteredUser} />
      </div>
    </div>
  );
}

export default DistrictMembersPage;
