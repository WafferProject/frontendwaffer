
import OfferCreationList from '../components/Business/OfferCreationList'
import FormOffer from "../components/Business/FormOffer";

import Footer from "../components/Footer";
import React, { useState } from 'react';
import "./BusinessDahboard.css"
import OfferCreationHistory from '../components/Business/OfferCreationHistory';

function BusinessDashboard() {
  const [offers, setOffers] = useState([]);
  const [selectedTab, setSelectedTab] = useState('offers');
  const [deletedOffers, setDeletedOffers] = useState([]);

  const renderTabContent = () => {
    if (selectedTab === 'offers') {
      return <OfferCreationList offers={offers} updateOffer={updateOffer} deleteOffer={deleteOffer} />;
    } else if (selectedTab === 'addOffer') {
      return <FormOffer addOffer={addOffer}/>;
    } else if (selectedTab === 'history') {
      return <OfferCreationHistory deletedOffers={deletedOffers} />; 
    } else {
      return null;
    }
  };


  const addOffer = (newOffer) => {
    setOffers([...offers, newOffer]);
  };
  
  const updateOffer = (offerId, updatedOfferData) => {
    
    const offerIndex = offers.findIndex(offer => offer.id === offerId);
    if (offerIndex !== -1) {
      
      const updatedOffers = [...offers];
      updatedOffers[offerIndex] = { ...updatedOffers[offerIndex], ...updatedOfferData };
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
                    className={selectedTab === 'offers' ? 'filter-active' : 'filter'}
                    onClick={() => setSelectedTab('offers')}
                  >
                    Offers
                  </li>
                  <li
                    className={selectedTab === 'addOffer' ? 'filter-active' : 'filter'}
                    onClick={() => setSelectedTab('addOffer')}
                  >
                    Add Offer
                  </li>
                  <li
                    className={selectedTab === 'history' ? 'filter-active' : 'filter'}
                    onClick={() => setSelectedTab('history')}
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
      <Footer />
    </div>
  )
}

export default BusinessDashboard
