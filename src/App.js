



import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Offer from "./components/Offer";

import Map from "./components/Map";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
      <Map />
      <div className="App">
        <Offer />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
