import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Burger from "../images/Burger.png";
import Navbar from "./Navbar";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    // Navigate to the SplitScreen component
    navigate("/split-screen");
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Delicious Deals, Served with Savings!
          </h1>
          <p className="primary-text">
            Reduce, Reuse, Reheat: Your Go-To Spot for Reducing Food Waste and Expenses.
          </p>
          <button className="secondary-button" onClick={handleGetStartedClick}>
            Let's Get Started <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={Burger} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
