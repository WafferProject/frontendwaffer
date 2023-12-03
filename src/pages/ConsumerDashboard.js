import React from "react";
import Map from "../components/Map";
import OfferList from "../components/Business/OfferList";
import "./ConsumerDashboard.css";
import Filter from "../components/Filter"
import {MyContextProvider as ConsumerContext} from "../components/ConsumerDashContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ConsumerDashboard() {
  return (
    <ConsumerContext>
      <Navbar/>
      <Map />
      <Filter/>
      <div className="consumer-container">
      <OfferList className />
    </div>
    <Footer/>
    </ConsumerContext>

    
  );
}
