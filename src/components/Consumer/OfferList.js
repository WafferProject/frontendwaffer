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
  const { offersData, setOffersData, selectedOffer, filter } =
    useContext(ConsumerContext);
  //offer selection for the popup
  //for order tab state
  const [isOrderOpen, setOrderOpen] = useState(false);
  //for buisness profile state
  const [profileInfo, setProfile] = useState(null);
  console.log(filter);

  useEffect(() => {
    const url = "http://localhost:8080/api/consumer/offer";

    // Function to build the URL with query parameters
    const buildUrl = () => {
      const params = new URLSearchParams();

      // Add filterObj properties to the URL parameters
      Object.entries(filter).forEach(([key, value]) => {
        params.append(key, value);
      });

      // Combine the base URL and the parameters
      const fullUrl = `${url}?${params.toString()}`;
      return fullUrl;
    };

    axios
      .get(buildUrl(), { withCredentials: true })
      .then((response) => {
        setOffersData(response.data.offers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedOffer, filter]);

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
          backgroundColor: "#FF8C00",
        }}
        onClick={() => {
          setOrderOpen(true);
        }}
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
