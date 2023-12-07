import React, { useState, useEffect } from "react";
import Offer from "./Offer";
import "./OfferList.css";
import Popup from "./Popup";
import { ConsumerContext } from "./ConsumerDashContext";
import { Button } from "@mui/joy";
import OrderTab from "./OrderTab";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import BuisnessProfile from "./BuisnessProfile";
import axios from "axios";
import { useContext } from "react";

export default function OfferList() {
  const { offersData, setOffersData } = useContext(ConsumerContext);
  //offer selection for the popup
  const { selectedOffer } = useContext(ConsumerContext);
  //for order tab state
  const [isOrderOpen, setOrderOpen] = useState(false);
  //for buisness profile state
  const [profileInfo, setProfile] = useState(null);

  useEffect(() => {
    const url = "http://localhost:8080/api/consumer/offer";
    axios
      .get(url, { withCredentials: true })
      .then((response) => {
        console.log(response);
        setOffersData(response.data.offers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {profileInfo && (
        <BuisnessProfile
          setProfileOpen={setProfile}
          profileInfo={profileInfo}
        />
      )}
       
        <OrderTab isOrderOpen={isOrderOpen} setOrderOpen={setOrderOpen} />
      

      <Button
        style={{
          position: "relative",
          left: " 830px",
          bottom: "15px",
          width: "200px",
        }}
        onClick={()=>{setOrderOpen(true)}}
        endDecorator={<RemoveRedEyeIcon />}
      >
        view orders
      </Button>

      <div className="offers-list">
        {offersData.map((offerItem) => (
          <Offer
            defaultOffer={true} //to distunguish between the default offer , and the offer in the popup
            setProfileOpen={setProfile}
            offerItem={offerItem}
          />
        ))}
      </div>
      {selectedOffer && <Popup setProfileOpen={setProfile} />}
    </>
  );
}
