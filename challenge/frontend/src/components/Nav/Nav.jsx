import React from "react";
import "./Nav.css";
import Login from "../LogIn/LogIn";

function Nav({ setDisplayUserName, displayUserName }) {
  return (
    <nav>
      <div className="nav-container">
        <div className="greeting">
          <img
            className="logo"
            alt="NYC Council Seal"
            src="https://council.nyc.gov/wp-content/themes/wp-nycc/assets/images/nyc-seal-blue.png"
          />
          <div className="logo-title">Welcome District Council Member</div>
        </div>
        <Login
          setDisplayUserName={setDisplayUserName}
          displayUserName={displayUserName}
        />
      </div>
    </nav>
  );
}

export default Nav;
