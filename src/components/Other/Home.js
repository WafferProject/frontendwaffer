import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Burger from "../../images/Burger.png";
import "./Home.css";

import { Outlet ,Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="home-container">

      {/* <Navbar /> */}
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Delicious Deals, Served with Savings!
          </h1>
          <p className="primary-text">
            Reduce, Reuse, Reheat: Your Go-To Spot for Reducing Food Waste and Expenses.
          </p>
        
          <Link to="/split-screen" className="secondary-button" style={{ textDecoration: 'none' }}>
            Let's Get Started <FiArrowRight />
          </Link>
        </div>
        <div className="home-image-section">
          <img src={Burger} alt="" />
        </div>
      </div>
      <Outlet />
    </div>
  );
};
export default Home;