import React, {  } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import WafferLogo from "../../images/WafferLogo.png";
import { useAuth } from "../AuthContext";

const Navbar = () => {
  const { isBuisness, isAuthenticated, logout, userInfoCookie } = useAuth();
  
  const currentPath = useLocation().pathname;
 

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
        <div className="username">
          {isBuisness ? userInfoCookie.name : userInfoCookie.first_name}
        </div>
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
      {currentPath !== "/admin" && (
        <>
          <div className="navbar-logo">
            <img
              src={WafferLogo}
              alt="Waffer Logo"
              width="100px"
              height="100px"
            />
          </div>
         
          <ul className='navbar-links'>
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
        </>
      )}
    </nav>
  );
};

export default Navbar;
