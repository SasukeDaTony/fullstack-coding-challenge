import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LogInPage from "./Pages/LogInPage/LogInPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import DistrictMembersPage from "./Pages/DistrictMembersPage/DistrictMembersPage";
import FourOFour from "./Pages/FourOFour/FourOFour";


function App() {

  return (
    <div className="main">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route
            path="/profile/:userDistrict"
            element={<DistrictMembersPage />}
          />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
