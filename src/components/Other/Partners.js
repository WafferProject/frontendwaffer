import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from "jquery";
import "slick-carousel";
import "./Partners.css";
import PizzaHutLogo from "../../images/pizzaht.png";
import KFCLogo from "../../images/KFC.png";
import BaristasLogo from "../../images/Baristas.png";
import ChanebLogo  from "../../images/chaneb1.png";
import GeantLogo  from "../../images/Geant.png";
import CarrefourLogo  from "../../images/Carrefour.png";
import AzizaLogo  from "../../images/aziza.png";

const Partners = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(".customer-logos")
        .not(".slick-initialized")
        .slick({
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1500,
          arrows: false,
          dots: false,
          pauseOnHover: false,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 520,
              settings: {
                slidesToShow: 3,
              },
            },
          ],
        });
    });
  }, []);

  return (
    <div className="containerr">
      <div className="work-section-top">
        <h1 className="primary-heading">Our Partners</h1>
      </div>
      <section className="customer-logos slider">
        <div className="slide">
          <img src={AzizaLogo} alt="Azizalogo" />
        </div>
        <div className="slide">
          <img src={KFCLogo} alt="KFClogo" />
        </div>
        <div className="slide">
          <img src={PizzaHutLogo} alt="PizzaHutlogo" />
        </div>
        <div className="slide">
          <img src={CarrefourLogo} alt="Carrefourlogo" />
        </div>
        <div className="slide">
          <img src={GeantLogo} alt="Geantlogo" />
        </div>
        <div className="slide">
          <img src={BaristasLogo} alt="Baristaslogo" />
        </div>
        <div className="slide">
          <img src={ChanebLogo} alt="Chaneblogo" />
        </div>
      </section>
    </div>
  );
};

export default Partners;
