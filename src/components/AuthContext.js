import axios from "axios";
import React, { useState, createContext, useRef } from "react";
import { useContext, useEffect } from "react";

const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isBuisness, setIsBuisness] = useState(false);
  let userInfoCookie;
  isAuthenticated && (userInfoCookie = JSON.parse(getCookieValue("user")));

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

  const logout = () => {
    //auth token
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    //userType token
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const authCookie = getCookieValue("token");
    //if auth cookie exists , check with backend if its valid
    if (authCookie) {
      console.log("sending token chek");
      axios
        .get("http://localhost:8080/api", { withCredentials: true })
        // request passed the middleware so its valid and responds with 200 status
        .then((res) => {
          setIsAuthenticated(true);
          setIsBuisness(userInfoCookie.type === "business" ? true : false);
        })
        //middleware caught the comromized token
        .catch((err) => {
          if (err.response.status === 401) {
            alert("compromised authentication , nice try ");
            logout();
          }
        });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
         userInfoCookie,
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
