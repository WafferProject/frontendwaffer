import React, { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';
import './Partners.css'; 
import adidasLogo from '../images/adidas.png';
import facebookLogo from '../images/facebook.png';
import KFCLogo from '../images/KFC.png';
import instagramLogo from '../images/instagram.png';
import nikeLogo from '../images/nike.png';
import BaristasLogo from '../images/Baristas.png';
import youtubeLogo from '../images/youtube.png';


const Partners = () => {
  useEffect(() => {
    $(document).ready(function () {
      $('.customer-logos').slick({
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
    <div className="container">
      <div className="work-section-top">
      <h1 className="primary-heading">Our Partners</h1>
      </div>
      <section className="customer-logos slider">
        <div className="slide">
          <img src={adidasLogo }alt="adidaslogo" />
        </div>
        <div className="slide">
          <img src={KFCLogo }alt="KFClogo" />
        </div>
        <div className="slide">
          <img src={facebookLogo} alt="facebooklogo" />
        </div>
        <div className="slide">
          <img src={instagramLogo} alt="logo" />
        </div>
        <div className="slide">
          <img src={nikeLogo} alt="logo" />
        </div>
        <div className="slide">
          <img src={BaristasLogo}alt="logo" />
        </div>
        <div className="slide">
          <img src={youtubeLogo} alt="logo" />
        </div>
      </section>
    </div>
  );
};

export default Partners;

