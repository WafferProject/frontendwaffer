import React, { useEffect, useState } from "react";
import "./BusinessDahboard.css";
import PostedOfferList from "../components/Business/PostedOfferList";
import FormOffer from "../components/Business/FormOffer";
import OfferCreationHistory from "../components/Business/OfferCreationHistory";

function BusinessDashboard() {
  const [offers, setOffers] = useState([]);
  const [selectedTab, setSelectedTab] = useState("offers");
  const [deletedOffers, setDeletedOffers] = useState([]);

//   useEffect(() => {
// const url = "http://localhost:3000/api/buisness/offer"
//     axios
//     .get(url, { withCredentials: true })
//     .then((response) => {
//       console.log(response);
//       setOffersData(response.data.offers);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }, [selectedOffer, filter]);



//   }, [offers]);

  const renderTabContent = () => (
    <>
      {selectedTab === "offers" && (
        <PostedOfferList
          offers={offers}
          updateOffer={updateOffer}
          deleteOffer={deleteOffer}
        />
      )}
      {selectedTab === "addOffer" && <FormOffer addOffer={addOffer} setSelectedTab={setSelectedTab} />}{" "}
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
      setOffers(updatedOffers);
      
      setDeletedOffers([...deletedOffers, deletedOffer]);
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
