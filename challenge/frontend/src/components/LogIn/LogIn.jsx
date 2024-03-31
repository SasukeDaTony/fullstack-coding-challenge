import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LogIn.css";
import Cookies from "js-cookie";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/login/", {
        username,
        password,
      });
      console.log(response.data.token, "token successful");
      Cookies.set("token", response.data.token, { expires: 1 }); // Assuming the token is in response.data.token
      // Redirect user or do something else upon successful login
      navigate("/profile");
    } catch (error) {
      setLoginError(
        "Failed to login. Please check your credentials and try again."
      );
    }
  };

  return (
    <div className="login_container">
      <form onSubmit={handleLogin}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {loginError && <p>{loginError}</p>}
    </div>
  );
};

export default Login;
