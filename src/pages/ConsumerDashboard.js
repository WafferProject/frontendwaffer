import React from "react";
import Map from "../components/Map";
import OfferList from "../components/OfferList";
import "./ConsumerDashboard.css";
import Filter from "../components/Filter"

export default function ConsumerDashboard() {
  return (
    <>
      <Map />
      <Filter/>
      <div className="consumer-container">
      <OfferList className />
    </div>
    </>
  );
}
