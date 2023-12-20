import React from "react";
import OfferCreation from "./OfferCreation";
import "./OfferCreationList.css";

import emtpy from "../../images/emtpy.png";

function PostedOfferList({ offers, updateOffer, deleteOffer }) {
  return (
    <div className="offersContainer">
      <div className="offersCreated">
        {offers.length > 0 ? (
          offers
            .filter((offer) => offer.status === 1)
            .map((offer, index) => (
              <OfferCreation
                key={index}
                offer={offer}
                updateOffer={updateOffer}
                deleteOffer={deleteOffer}
              />
            ))
        ) : (
          <div className="post_container">
            <img className="empty" src={emtpy} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default PostedOfferList;
