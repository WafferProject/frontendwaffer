import React from 'react';
import './OfferCreationList.css';
import OfferCreation from './OfferCreation';
import emtpy from '../../images/emtpy.png'; 

function PostedOfferList({ offers, updateOffer, deleteOffer }) {
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
           
            <img className="empty"src={emtpy} alt=''/> 
          </div>
        )}
      </div>
    </div>
  );
}

export default PostedOfferList;
