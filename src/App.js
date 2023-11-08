import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import OfferList from "./components/OfferList";
import NavigationBar from "./components/NavigationBar";
import Map from "./components/Map";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Map />
      <div className="App">
      
      <OfferList/>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
