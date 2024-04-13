import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "./LogIn.css";
import { isLoggedIn } from "../../utils/utils";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  //Log in display username
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://fullstack-coding-challenge-web.onrender.com/login/",
        {
          username,
          password,
        }
      );
      Cookies.set("token", response.data.token, { expires: 1 }); // set Token
      setLoginError("");
      navigate("/profile"); // Redirect user upon successful login
    } catch (error) {
      setLoginError(
        "Failed to login. Please check your credentials and try again."
      );
    }
  };

  // Remove the token log out function
  const handleLogout = () => {
    Cookies.remove("token");
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
    <>
      {isLoggedIn() ? (
        <div className="username-container">
          <button
            className="btn btn-outline-primary"
            onClick={() => navigate("/")}
          >
            Council Members
          </button>

          <button
            className="btn btn-outline-success"
            onClick={() => navigate("/profile")}
          >
            My Profile
          </button>
          <button
            className="btn btn-outline-warning logout"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="login-container">
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
            <button
              type="submit"
              className="btn btn-primary btn-sm login-button"
            >
              Login
            </button>
          </form>
          {loginError && <div className="log-err">{loginError}</div>}
        </div>
      )}
    </>
  );
}

export default Login;
