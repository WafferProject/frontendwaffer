import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Offer from "./components/Offer";
import NavigationBar from "./components/NavigationBar";
import Map from "./components/Map";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Map />
      <div className="App">
        <Offer />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
