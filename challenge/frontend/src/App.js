import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LogInPage from "./Pages/LogInPage/LogInPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
