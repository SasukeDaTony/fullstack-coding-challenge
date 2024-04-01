import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "./LogIn.css";

function Login({ setDisplayUserName, displayUserName }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  //Log in display username
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/login/", {
        username,
        password,
      });
      console.log(response.data.token, "token successful");
      Cookies.set("token", response.data.token, { expires: 1 }); // set Token
      navigate("/profile"); // Redirect user upon successful login
      setDisplayUserName(true); //display signed-in Username
    } catch (error) {
      setLoginError(
        "Failed to login. Please check your credentials and try again."
      );
    }
  };

  // Remove the token log out function
  const handleLogout = () => {
    Cookies.remove("token");
    setDisplayUserName(false);
    setUsername("");
    setPassword("");
    setShowPassword(false);
    navigate("/");
  };

  //show password eye functionality
  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="login-container">
      {displayUserName ? (
        <div className="username-container">
          <h4>{username}</h4>
          <button
            className="btn btn-outline-light logout"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>
            Password:{" "}
            <i
              className={
                showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
              }
              onClick={handleShowPassword}
            ></i>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn btn-primary btn-sm login-button">
            Login
          </button>
        </form>
      )}

      {loginError && <div className="log-err">{loginError}</div>}
    </div>
  );
}

export default Login;
