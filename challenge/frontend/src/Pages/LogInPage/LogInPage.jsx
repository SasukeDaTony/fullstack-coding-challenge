import React, { useEffect, useState } from "react";
import axios from "axios";

import "./LogInPage.css";
import { sortDistrictMembers } from "../../utils/utils";
import CouncilPersonCard from "../../components/councilPersonCard/CouncilPersonCard";

export default function LogInPage() {
  const [allUsers, setAllUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    try {
      const response = await axios.get(
        "https://fullstack-coding-challenge-web.onrender.com/api/complaints/allUsers"
      );
      setAllUsers(response.data);
    } catch (error) {
      console.error("Failed to fetch all Users", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMembers = sortDistrictMembers(allUsers).filter((user) =>
    user.full_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="login-page">
      <div className="welcome-title">
        <h1>
          Welcome to the NYC Council <span className="red"> Complaint </span>
          Dashboard
        </h1>
      </div>

      <div className="city-council-members">
        <div className="search-container">
          <h2>Council Members</h2>
          <label htmlFor="council-search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="search"
              placeholder="Search by Name..."
              id="council-search"
              onChange={handleSearchChange}
            />
          </label>
        </div>
        <div className="city-council-members-list">
          {filteredMembers.map((user, index) => {
            return <CouncilPersonCard userProfile={user} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
