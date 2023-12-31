import React, {  } from 'react';
import OfferCreation from './OfferCreation'; 
import emtpy from '../../images/emtpy.png'; 
import "./OfferCreationHistory.css"
function OfferCreationHistory({ deletedOffers }) {
  return (
    <div className="offerHistoryContainer">
      <div className="offerHistoryCreated">
      {deletedOffers && deletedOffers.length > 0 ? (
        deletedOffers.map((offer, index) => (
          <OfferCreation key={index} offer={offer} deleted={true} />
        ))
      ) : (
        <div className="emptyHistoryContainer">
          
          <img src={emtpy} alt=''/> 
        </div>
      )}
      </div>
    </div>
  );
}

export default OfferCreationHistory;
