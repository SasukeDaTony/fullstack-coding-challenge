import React from "react";

import "./CouncilPersonCard.css";

export default function CouncilPersonCard({ userProfile }) {
  return (
    <div className="council-person-card">
      <div className="council-person-card__image">
        <img src={userProfile.thumbnail} className="thumbnail-card" alt="profile-thumbnail"/>
      </div>
      <div className="council-person-card__info">
        <h3>{userProfile.full_name}</h3>
        <div>
          <b>Party:</b>{" "}
          {userProfile.party === "Democrat" ? (
            <span className="blue">{userProfile.party}</span>
          ) : (
            <span className="red">{userProfile.party}</span>
          )}
        </div>
        <div className="borough">
          <b>Borough:</b> {userProfile.borough}
        </div>
        <div>
          <b>District:</b>{" "}
          <span className="district">{userProfile.district.slice(4)}</span>
        </div>
      </div>
    </div>
  );
}
