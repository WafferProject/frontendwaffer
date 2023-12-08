import React from 'react';
import OfferCreation from './OfferCreation';
import './OfferCreationList.css';

import emtpy from '../../images/emtpy.png'; 

function OfferCreationList({ offers, updateOffer, deleteOffer }) {
  return (
    <div className="offersContainer">
      <div className="offersCreated">
        {offers && offers.length > 0 ? (
          offers.map((offer, index) => (
            <OfferCreation
              key={index}
              offer={offer}
              updateOffer={updateOffer}
              deleteOffer={deleteOffer}
            />
          ))
        ) : (
          <div className="post_container">
           
            <img className="empty"src={emtpy}/> 
          </div>
        )}
      </div>
    </div>
  );
}

export default OfferCreationList;
