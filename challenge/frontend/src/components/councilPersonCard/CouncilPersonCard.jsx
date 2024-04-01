import React from "react";

import "./CouncilPersonCard.css";

const CouncilPersonCard = ({ userProfile }) => {
  return (
    <div className="council-person-card">
      <div className="council-person-card__image">
        <img src={userProfile.thumbnail} />
      </div>
      <div className="council-person-card__info">
        <h3>{userProfile.full_name}</h3>
        <div>
          <b>Party:</b> {userProfile.party}
        </div>
        <div>
          <b>Borough:</b> {userProfile.borough}
        </div>
        <div>
          <b>District:</b> {userProfile.district}
        </div>
      </div>
    </div>
  );
};

export default CouncilPersonCard;
