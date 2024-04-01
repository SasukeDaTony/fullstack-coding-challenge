import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LogInPage from "./pages/LogInPage/LogInPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";

function App() {
  const [displayUserName, setDisplayUserName] = useState(false);

  return (
    <div className="main">
      <Router>
        <Nav
          setDisplayUserName={setDisplayUserName}
          displayUserName={displayUserName}
        />
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="/profile" element={<ProfilePage setDisplayUserName={setDisplayUserName} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
