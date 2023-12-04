import React, { useState, createContext } from "react";
import { useContext, useEffect } from "react";

const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isBuisness , setIsBuisness] = useState(false);
  // const [userState, setUserState] = useState(null); // Add this state


  useEffect(() => {
    // Check if the "token" cookie exists
    const tokenCookie = document.cookie
      .split(";")
      .find((cookie) => cookie.trim().startsWith("token="));
    if (tokenCookie) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated , isBuisness , setIsBuisness}}>
      {children}
    </AuthContext.Provider>
  );
};
