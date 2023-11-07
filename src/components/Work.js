import React from "react";
import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import HappyCustomer from "../assets/HappyCustomer.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Discover Deals",
      text: "Browse a selection of food items available at discounted prices.",
    },
    {
      image: ChooseMeals,
      title: "Place Your Order",
      text: "Choose the items you want, add them to your cart, and complete your order seamlessly.",
    },
    {
      image: HappyCustomer,
      title: "Collect Your Savings",
      text: "Visit the specified location to collect your selected items, enjoying significant savings on quality food.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">How It Works</h1>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
