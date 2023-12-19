import React, { useState ,createContext} from 'react';



export const ConsumerContext = createContext();
export const MyContextProvider = ({ children }) => {
    const [selectedOffer, setSelectedOffer] = useState(null);
    const [offersData, setOffersData] = useState([]);
    const [offerDistance , setOfferDistance] = useState("--");
    const [filter , setFilter] = useState({category:"all"}); 


 

  return (
    <ConsumerContext.Provider value={{ setSelectedOffer, selectedOffer , offersData, setOffersData , offerDistance , setOfferDistance , filter,setFilter }}>
      {children}
    </ConsumerContext.Provider>
  );
};

