import React, { useState, useEffect } from "react";
import Offer from "./Offer";
import "./OfferList.css";
import Map from "./Map";
import Popup from "./Popup";
import { Button } from "@mui/joy";
import OrderTab from "./OrderTab";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function OfferList() {
  const data = [0, 1, 2, 3, 4, 5, 8];
  const [selectedOffer, setSelectedOffer] = useState(null);
  //for order tab state
  const [isOrderOpen, setOrderOpen] = useState(false);

  const toggleDrawer = (inOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOrderOpen(inOpen);
  };

  return (
    <>
      <OrderTab isOrderOpen={isOrderOpen} setOrderOpen={toggleDrawer} />
      <Button
        style={{ position: "relative", left: " 757px", width: "200px" }}
        onClick={
          toggleDrawer(true)
          
        }
        endDecorator={<RemoveRedEyeIcon/>}
      >
        view orders 
      </Button>

      <div className="offers-list">
        <Offer defaultOffer={true} setSelectedOffer={setSelectedOffer} />
        <Offer defaultOffer={true} setSelectedOffer={setSelectedOffer} />
        <Offer defaultOffer={true} setSelectedOffer={setSelectedOffer} />
        <Offer defaultOffer={true} setSelectedOffer={setSelectedOffer} />
        <Offer defaultOffer={true} setSelectedOffer={setSelectedOffer} />
        <Offer defaultOffer={true} setSelectedOffer={setSelectedOffer} />
        <Offer defaultOffer={true} setSelectedOffer={setSelectedOffer} />
      </div>
      {selectedOffer && (
        <Popup offer={selectedOffer} setSelectedOffer={setSelectedOffer} />
      )}
    </>
  );
}
