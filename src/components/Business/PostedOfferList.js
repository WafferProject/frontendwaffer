import React from "react";
import "./OfferCreationList.css";
import OfferCreation from "./OfferCreation";
import emtpy from "../../images/emtpy.png";

function PostedOfferList({ offers, setSelectedTab, deleteOffer , toUpdateOffer }) {
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
                setSelectedTab={setSelectedTab}
                deleteOffer={deleteOffer}
                toUpdateOffer={toUpdateOffer}              />
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
