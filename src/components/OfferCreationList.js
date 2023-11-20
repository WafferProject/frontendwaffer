import React from 'react';
import OfferCreation from './OfferCreation';
import './OfferCreationList.css';
import emptyStateImage from '../images/emptystate.png'; // Import the image
import emtpy from '../images/emtpy.png'; // Import the image

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
            {/* <p className="post">No food posts created yet</p> */}
            <img src={emtpy}/> {/* Use the imported image */}
          </div>
        )}
      </div>
    </div>
  );
}

export default OfferCreationList;
