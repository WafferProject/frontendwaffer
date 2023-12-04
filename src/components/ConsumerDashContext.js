import React, { useState ,createContext} from 'react';



export const ConsumerContext = createContext();
export const MyContextProvider = ({ children }) => {
    const [selectedOffer, setSelectedOffer] = useState(null);
    const [offersData, setOffersData] = useState([]);
    const [offerDistance , setOfferDistance] = useState("--");


 

  return (
    <ConsumerContext.Provider value={{ setSelectedOffer, selectedOffer , offersData, setOffersData , offerDistance , setOfferDistance }}>
      {children}
    </ConsumerContext.Provider>
  );
};

