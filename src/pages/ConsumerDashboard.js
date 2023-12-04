import React from "react";
import Map from "../components/Consumer/Map";
import OfferList from "../components/Consumer/OfferList";
import "./ConsumerDashboard.css";
import Filter from "../components/Consumer/Filter"
import {MyContextProvider as ConsumerContext} from "../components/Consumer/ConsumerDashContext";


export default function ConsumerDashboard() {
  return (
    <ConsumerContext>
      <Map />
      <Filter/>
      <div className="consumer-container">
      <OfferList  />
    </div>
    </ConsumerContext>

    
  );
}
