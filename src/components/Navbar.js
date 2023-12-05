import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import WafferLogo from "../images/WafferLogo.png";
import { useAuth } from "./AuthContext";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isBuisness, isAuthenticated } = useAuth();
  const nav = useNavigate();
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Call this function when a user signs in
  const handleSignIn = () => {
    nav("signin");
  };
  const [account] = useState({ username: "salmen", userProfilePic: "" });

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={WafferLogo} alt="Waffer Logo" width="100px" height="100px"/>
      </div>
      <div className="navbar-toggle" onClick={handleMobileMenuToggle}>
        {mobileMenuOpen ? "X" : <div>&#9776;</div>}
      </div>
      <ul className={`navbar-links ${mobileMenuOpen ? "show" : ""}`}>
        {(!isBuisness && isAuthenticated) && (
          <>
            <li>
              <Link to="/consumer" className="navbar-item">
                Offers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="navbar-item">
                Feedback
              </Link>
            </li>
            <li className="navbar-item-dropdown">
              <div className="user-info">
                {/* <img src={account.userProfilePic} alt="User Profile" /> */}
                <div className="username">{account.username}</div>
              </div>
              <div className="navbar-item-dropdown-content">
                <Link to="/profile">Profile</Link>
                <Link to="/logout">Logout</Link>
              </div>
            </li>
          </>
        )}
        {isBuisness && isAuthenticated && (
          <>
            <li>
              <Link to="/buisness" className="navbar-item">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/contact" className="navbar-item">
                Feedback
              </Link>
            </li>
            <li className="navbar-item-dropdown">
              <div className="user-info">
                {/* <img src={userProfilePic} alt="User Profile" /> */}
                <div className="username">{account.username}</div>
              </div>
              <div className="navbar-item-dropdown-content">
                <Link to="/profile">Profile</Link>
                <Link to="/logout">Logout</Link>
              </div>
            </li>
          </>
        )}
        {/* not logged in null userState */}
        {!isAuthenticated && (
          <>
            <li>
              <Link to="/" className="navbar-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="navbar-item">
                About
              </Link>
            </li>
           
            <li>
              <Link to="/contact" className="navbar-item">
                Feedback
              </Link>
            </li>
            <li>
              <Link
                to="/signin"
                className="navbar-item"
                onClick={() => {
                  handleSignIn();
                }}
              >
                Sign In
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
