import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LogInPage from "./pages/LogInPage/LogInPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Cookies from "js-cookie";
import { isLoggedIn } from "./utils/utils";

function App() {
  return (
    <div className="main">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route
            path="/profile"
            element={<ProfilePage/>}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
