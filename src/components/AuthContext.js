import React, { useState, createContext, useRef } from "react";
import { useContext, useEffect } from "react";

const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isBuisness, setIsBuisness] = useState(false);
  const userInfo = useRef();
  userInfo.current = {};

  function getCookieValue(cookieName) {
    const cookies = document.cookie.split("; ");

    for (const cookie of cookies) {
      const [name, value] = cookie.split("=");

      if (name === cookieName) {
        return decodeURIComponent(value);
      }
    }

    return null; // Return null if the cookie with the specified name is not found
  }

  useEffect(() => {
    // Check if the "token" cookie exists
    const authCookie = getCookieValue("token");
    const userCookie = JSON.parse(getCookieValue("user"));

    if (authCookie) {
      console.log(userCookie.type === "business");

      setIsAuthenticated(true);
      setIsBuisness(userCookie.type === "business" ? true : false);
    } else {
      setIsAuthenticated(false);
    }
  }, []);
  const logout = () => {
    //auth token
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    //userType token
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userInfo,
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
