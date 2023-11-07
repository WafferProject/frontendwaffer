import React from "react";
import Burger from "../assets/Burger.png";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
          Delicious Deals, Served with Savings!
          </h1>
          <p className="primary-text">
          Reduce, Reuse, Reheat: Your Go-To Spot for Reducing Food Waste and Expenses.
          </p>
          
        </div>
        <div className="home-image-section">
          <img src={Burger} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
