import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import WafferLogo from "../images/WafferLogo.png";
import { useAuth } from "./AuthContext";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isBuisness, isAuthenticated, logout } = useAuth();
  const currentPath = useLocation().pathname;
  console.log("is Auth ? " + isAuthenticated + "is Buisness ? " + isBuisness);
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const [account] = useState({ username: "salmen", userProfilePic: "" });

  const renderLink = (to, text) => (
    <li>
      <Link to={to} className="navbar-item">
        {text}
      </Link>
    </li>
  );

  const renderDropdown = () => (
    <li className="navbar-item-dropdown">
      <div className="user-info">
        <div className="username">{account.username}</div>
      </div>
      <div className="navbar-item-dropdown-content">
        <Link to="/profile">Profile</Link>{" "}
        <Link onClick={logout} to="/signin">
          Logout
        </Link>
      </div>
    </li>
  );

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={WafferLogo} alt="Waffer Logo" width="100px" height="100px" />
      </div>
      <div className="navbar-toggle" onClick={handleMobileMenuToggle}>
        {mobileMenuOpen ? "X" : <div>&#9776;</div>}
      </div>
      <ul className={`navbar-links ${mobileMenuOpen ? "show" : ""}`}>
        {isAuthenticated && (
          <>
            {!isBuisness &&
              currentPath !== "/consumer" &&
              renderLink("/consumer", "Offers")}

            {isBuisness &&
              currentPath !== "/buisness" &&
              renderLink("/buisness", "Dashboard")}
          </>
        )}
        {currentPath !== "/" && renderLink("/", "Home")}
        {!isAuthenticated && (
          <>
            {renderLink(
              currentPath === "/signup" ||
                currentPath === "/" ||
                currentPath === "/split-screen"
                ? "/signin"
                : "/split-screen",
              currentPath === "/signup" ||
                currentPath === "/" ||
                currentPath === "/split-screen"
                ? "Sign In"
                : "Sign Up"
            )}
            {currentPath !== "/about" && renderLink("/about", "About")}
          </>
        )}

        {currentPath !== "/contact" && renderLink("/contact", "Contact")}
        {isAuthenticated && renderDropdown()}
      </ul>
    </nav>
  );
};

export default Navbar;
