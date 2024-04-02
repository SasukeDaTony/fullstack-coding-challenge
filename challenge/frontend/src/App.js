import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LogInPage from "./Pages/LogInPage/LogInPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import DistrictMembersPage from "./Pages/DistrictMembersPage/DistrictMembersPage";
import FourOFour from "./Pages/FourOFour/FourOFour";
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <div className="main">
      <Router>
        <Nav />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<LogInPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route
              path="/profile/:userDistrict"
              element={<DistrictMembersPage />}
            />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </Suspense>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
