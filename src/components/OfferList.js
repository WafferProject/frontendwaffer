import React, { useState  , useEffect} from "react";
import Offer from "./Offer";
import "./OfferList.css";
import Map from "./Map";
import Popup from "./Popup";

export default function OfferList() {
  const data = [0, 1, 2, 3, 4, 5, 8];
  const [selectedOffer, setSelectedOffer] = useState(null);

  

  return (
    <>

      <div className="offers-list">
       
          <Offer defaultOffer={true} setSelectedOffer={setSelectedOffer} />
          <Offer defaultOffer={true} setSelectedOffer={setSelectedOffer} />
          <Offer defaultOffer={true} setSelectedOffer={setSelectedOffer} />
          <Offer defaultOffer={true} setSelectedOffer={setSelectedOffer} />
          <Offer defaultOffer={true} setSelectedOffer={setSelectedOffer} />
          <Offer defaultOffer={true} setSelectedOffer={setSelectedOffer} />
          <Offer defaultOffer={true} setSelectedOffer={setSelectedOffer} />

         
    
      </div>
      {selectedOffer && <Popup offer= {selectedOffer}   setSelectedOffer={setSelectedOffer} />}
    </>
  );
}
