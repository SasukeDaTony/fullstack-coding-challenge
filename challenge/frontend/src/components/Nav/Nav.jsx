import React from "react";
import "./Nav.css";
import Login from "../logIn/LogIn";

function Nav() {
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
        <Login />
      </div>
    </nav>
  );
}

export default Nav;
