
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import OfferList from "./components/OfferList";
import NavigationBar from "./components/Navbar";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
import Login from "./components/Login";
import SignUp from "./components/Signup";

import Offer from "./components/Offer";
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import Partners from "./components/Partners";
import Work from "./components/Work";



function App() {
  return (
    <BrowserRouter>
     <Navbar/>
      <Map />


      <Filter />
      <div className="App">
        <OfferList />
      </div>
      <Home />
      <Work />
      <Partners/>
     
      <Footer />
    </BrowserRouter>

  );
}

export default App;
