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

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Map />

      <Filter />
      <div className="App">
        <OfferList />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
