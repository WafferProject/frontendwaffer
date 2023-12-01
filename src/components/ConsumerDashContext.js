import React, { useState ,createContext} from 'react';



export const ConsumerContext = createContext();
export const MyContextProvider = ({ children }) => {
    const [selectedOffer, setSelectedOffer] = useState(null);
    const [offersData, setOffersData] = useState([]);


 

  return (
    <ConsumerContext.Provider value={{ setSelectedOffer, selectedOffer , offersData, setOffersData }}>
      {children}
    </ConsumerContext.Provider>
  );
};

