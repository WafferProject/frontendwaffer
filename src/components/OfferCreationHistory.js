import React, { useState } from 'react';
import OfferCreation from './OfferCreation'; // Import the OfferCreation component
import emtpy from '../images/emtpy.png'; // Import the image
import "./OfferCreationHistory.css"
function OfferCreationHistory({ deletedOffers }) {
  return (
    <div className="offerHistoryContainer">
      <div className="offerHistoryCreated">
      {deletedOffers && deletedOffers.length > 0 ? (
        deletedOffers.map((offer, index) => (
          <OfferCreation key={index} offer={offer} />
        ))
      ) : (
        <div className="emptyHistoryContainer">
          {/* <p>No offers in history yet.</p> */}
          <img src={emtpy}/> 
        </div>
      )}
      </div>
    </div>
  );
}

export default OfferCreationHistory;
