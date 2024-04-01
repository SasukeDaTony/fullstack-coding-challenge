import React from "react";
import "./LogInPage.css";

import CouncilPersonCard from "../../components/councilPersonCard/CouncilPersonCard";

export default function LogInPage() {
  const userProfile = {
    full_name: "Tony Taylor",
    thumbnail: "https://placehold.co/150x200",
    party: "Democrat",
    borough: "The Bronx",
    district: "NYCC08",
  };

  // fetch array of all council members name, party, profile photo, district num, borough

  return (
    <div className="login-page">
      <h1>Welcome to the NY City Council Dashboard!</h1>
      <div className="city-council-members">
        <h2>NY City Council Members</h2>
        <div className="city-council-members-list">
          <CouncilPersonCard userProfile={userProfile} />
          <CouncilPersonCard userProfile={userProfile} />
          <CouncilPersonCard userProfile={userProfile} />
          <CouncilPersonCard userProfile={userProfile} />
        </div>
      </div>
    </div>
  );
}
