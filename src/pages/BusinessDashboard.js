import PostedOfferList from "../components/Business/PostedOfferList";
import FormOffer from "../components/Business/FormOffer";

import React, { useEffect, useState } from "react";
import "./BusinessDahboard.css";
import OfferCreationHistory from "../components/Business/OfferCreationHistory";
import axios from "axios";

function BusinessDashboard() {
  const [offers, setOffers] = useState([]);
  const [selectedTab, setSelectedTab] = useState("offers");
  const [deletedOffers, setDeletedOffers] = useState([]);
  useEffect(() => {
    const url = "http://localhost:8080/api/buisness/offer";
    axios
      .get(url, { withCredentials: true })
      .then((response) => {
        console.log(response);
        setOffers(response.data.result.filter((offer) => offer.status === 1));
        setDeletedOffers(
          response.data.result.filter((offer) => offer.status === 0)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedTab]);

  const renderTabContent = () => (
    <>
      {selectedTab === "offers" && (
        <PostedOfferList
          offers={offers}
          updateOffer={updateOffer}
          deleteOffer={deleteOffer}
        />
      )}
      {selectedTab === "addOffer" && (
        <FormOffer addOffer={addOffer} setSelectedTab={setSelectedTab} />
      )}{" "}
      {selectedTab === "history" && (
        <OfferCreationHistory deletedOffers={deletedOffers} />
      )}
    </>
  );
  const addOffer = (newOffer) => {
    setOffers([...offers, newOffer]);
  };

  const updateOffer = (offerId, updatedOfferData) => {
    const offerIndex = offers.findIndex((offer) => offer.id === offerId);
    if (offerIndex !== -1) {
      const updatedOffers = [...offers];
      updatedOffers[offerIndex] = {
        ...updatedOffers[offerIndex],
        ...updatedOfferData,
      };
      setOffers(updatedOffers);
    } else {
      console.error(`Offer with ID ${offerId} not found.`);
    }
  };

  const deleteOffer = (offerId) => {
    const deletedOffer = offers.find((offer) => offer.id === offerId);
    if (deletedOffer) {
      const updatedOffers = offers.filter((offer) => offer.id !== offerId);
      const url = "http://localhost:8080/api/buisness/offer";

      axios
        .delete(url, {
          data: { offer_id: offerId },
          withCredentials: true,
        })
        .then((response) => {
          setOffers(updatedOffers);
          setDeletedOffers([...deletedOffers, deletedOffer]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <>
        <h1 className="title_offer">Business Dashboard</h1>
        <div className="containerHeader">
          <div className="menu-tab-wp">
            <div className="row">
              <div className="col-lg-12 m-auto">
                <div className="menu-tab text-center">
                  <ul className="filters">
                    <li
                      className={
                        selectedTab === "offers" ? "filter-active" : "filter"
                      }
                      onClick={() => setSelectedTab("offers")}
                    >
                      Offers
                    </li>
                    <li
                      className={
                        selectedTab === "addOffer" ? "filter-active" : "filter"
                      }
                      onClick={() => setSelectedTab("addOffer")}
                    >
                      Add Offer
                    </li>
                    <li
                      className={
                        selectedTab === "history" ? "filter-active" : "filter"
                      }
                      onClick={() => setSelectedTab("history")}
                    >
                      View History
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {renderTabContent()}
        </div>
      </>
    </div>
  );
}

export default BusinessDashboard;
