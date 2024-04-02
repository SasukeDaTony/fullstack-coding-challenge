import React from "react";

import "./CouncilProfile.css";

const CouncilProfile = ({ userProfile }) => {
  return (
    <div className="card user-container-card">
      <div className="card-body">
        <h3 className="card-title user-title">{userProfile.full_name}</h3>
        <div className="user-info">
          <img
            className="card-img-top thumbnail"
            src={userProfile.thumbnail}
            alt="profile_thumbnail"
          />
          <div className="user-info-container">
            <p className="card-text">
              <img
                className="party"
                src={
                  userProfile.party === "Democrat"
                    ? "https://politicaldictionary.com/wp-content/uploads/2023/09/Democrat-Party.jpg"
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ77oRJdd3yEPJJJpMDOwv-Q2dTfqXQZBrUDw&usqp=CAU"
                }
                alt="party-logo"
              />
              {userProfile.party}
            </p>
            <p className="card-text">
              <strong>Borough : </strong>
              {userProfile.borough}
            </p>
            <p className="card-text">
              <strong>District : </strong>
              {userProfile.district ? userProfile.district.slice(4) : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouncilProfile;
