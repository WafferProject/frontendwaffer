import React, { useState, createContext } from "react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isBuisness, setIsBuisness] = useState(false);

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
  const logout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        isBuisness,
        setIsBuisness,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
