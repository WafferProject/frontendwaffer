import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import WafferLogo from "../images/WafferLogo.png";
import { useAuth } from "./AuthContext";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isBuisness, isAuthenticated, logout } = useAuth();
  const nav = useNavigate();
  const currentPath = useLocation().pathname;
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Call this function when a user signs in
  const handleSignIn = () => {
    nav("/signin");
  };

  const [account] = useState({ username: "salmen", userProfilePic: "" });

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={WafferLogo} alt="Waffer Logo" width="100px" height="100px" />
      </div>
      <div className="navbar-toggle" onClick={handleMobileMenuToggle}>
        {mobileMenuOpen ? "X" : <div>&#9776;</div>}
      </div>
      <ul className={`navbar-links ${mobileMenuOpen ? "show" : ""}`}>
        {/* logged in consumer navbar */}
        {!isBuisness && isAuthenticated && (
          <>
            {currentPath === "/" && (
              <li>
                <Link to="/consumer" className="navbar-item">
                  Offers
                </Link>
              </li>
            )}
            {currentPath === "/consumer" && (
              <Link to="/" className="navbar-item">
                Home
              </Link>
            )}
            <li>
              <Link to="/contact" className="navbar-item">
                Feedback
              </Link>
            </li>
            <Link to="/about" className="navbar-item">
                About
              </Link>
            <li className="navbar-item-dropdown">
              <div className="user-info">
                {/* <img src={account.userProfilePic} alt="User Profile" /> */}
                <div className="username">{account.username}</div>
              </div>

              <div className="navbar-item-dropdown-content">
                <Link to="/profile">Profile</Link>
                <Link onClick={logout} to="/signin">
                  Logout
                </Link>
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
              <Link to="/about" className="navbar-item">
                About
              </Link>
            </li>
            <li className="navbar-item-dropdown">
              <div className="user-info">
                {/* <img src={userProfilePic} alt="User Profile" /> */}
                <div className="username">{account.username}</div>
              </div>
              <div className="navbar-item-dropdown-content">
                <Link to="/profile">Profile</Link>
                <Link onClick={logout} to="/signin">
                  {" "}
                  Logout
                </Link>
              </div>
            </li>
          </>
        )}
        {/* not logged in null userState */}
        {!isAuthenticated && (
          <>
            {currentPath !== "/" && (
              <li>
                <Link to="/" className="navbar-item">
                  Home
                </Link>
              </li>
            )}
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
                to={
                  currentPath === "/signup" || currentPath === "/"||currentPath === "/split-screen"
                    ? "/signin"
                    : "/split-screen"
                }
                className="navbar-item"
              >
                {currentPath === "/signup" || currentPath === "/"||currentPath === "/split-screen"
                  ? "Sign In"
                  : "Sign Up"}
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
