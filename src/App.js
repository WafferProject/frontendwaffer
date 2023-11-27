import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import OfferList from "./components/OfferList";
import NavigationBar from "./components/Navbar";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Homeb from "./components/Homeb";
import Offer from "./components/Offer";
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import Partners from "./components/Partners";
import Work from "./components/Work";
import TeamCard from "./components/TeamCard";
import ScrollToTop from "./components/ScrollToTop"; // import the ScrollToTop component
import About from "./components/About";
// import { Description } from "@mui/icons-material";
import Description from "./components/Description";
import SignInUpConsumer from "./components/signupconsumer_business";
import SignInUpBusiness from "./components/signupbusiness_consumer";



function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* use the ScrollToTop component */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      
        <SignInUpConsumer />
  
      </div>
    </BrowserRouter> 
  );
}


export default App;
