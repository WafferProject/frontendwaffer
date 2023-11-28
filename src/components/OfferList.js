
import React, { useState, useEffect } from "react";
import Offer from "./Offer";
import "./OfferList.css";
import Popup from "./Popup";

import { Button } from "@mui/joy";
import OrderTab from "./OrderTab";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import BuisnessProfile from "./BuisnessProfile";

export default function OfferList() {
  const data = [0, 1, 2, 3, 4, 5, 8];
  const [selectedOffer, setSelectedOffer] = useState(null);

  //for order tab state
  const [isOrderOpen, setOrderOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);


  

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
    <BuisnessProfile  ProfileOpen={isProfileOpen} setProfileOpen={setProfileOpen}/>
      <OrderTab isOrderOpen={isOrderOpen} setOrderOpen={toggleDrawer} />
      <Button
        style={{ position: "relative", left: " 870px",bottom:"15px", width: "200px" }}
        onClick={
          toggleDrawer(true)
          
        }
        endDecorator={<RemoveRedEyeIcon/>}
      >
        view orders 
      </Button>

      <div className="offers-list">
      <Offer defaultOffer={true} setSelectedOffer={setSelectedOffer} setProfileOpen={setProfileOpen} />
      <Offer defaultOffer={true} setSelectedOffer={setSelectedOffer} setProfileOpen={setProfileOpen} />
      <Offer defaultOffer={true} setSelectedOffer={setSelectedOffer} setProfileOpen={setProfileOpen} />
      <Offer defaultOffer={true} setSelectedOffer={setSelectedOffer} setProfileOpen={setProfileOpen} />
      <Offer defaultOffer={true} setSelectedOffer={setSelectedOffer} setProfileOpen={setProfileOpen} />
      <Offer defaultOffer={true} setSelectedOffer={setSelectedOffer} setProfileOpen={setProfileOpen} />
      <Offer defaultOffer={true} setSelectedOffer={setSelectedOffer} setProfileOpen={setProfileOpen} />

      </div>
      {selectedOffer && (
        <Popup offer={selectedOffer} setSelectedOffer={setSelectedOffer} />
      )}
    </>
  );
}
