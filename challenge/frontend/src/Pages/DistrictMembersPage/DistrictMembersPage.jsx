import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CouncilProfile from "../../components/councilProfile/CouncilProfile";

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


  return (
    <div>
      <CouncilProfile userProfile={filteredUser} />
    </div>
  );
}

export default DistrictMembersPage;
