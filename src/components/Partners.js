import React, { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Partners.css'; // Import the CSS file for your component
import $ from 'jquery';
import 'slick-carousel';
import { FiArrowRight } from "react-icons/fi";

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
          <img src="/images/adidas.png" alt="logo" />
        </div>
        <div className="slide">
          <img src="images/facebook.png" alt="logo" />
        </div>
        <div className="slide">
          <img src="images/google.png" alt="logo" />
        </div>
        <div className="slide">
          <img src="images/instagram.png" alt="logo" />
        </div>
        <div className="slide">
          <img src="images/nike.png" alt="logo" />
        </div>
        <div className="slide">
          <img src="images/Baristas.png" alt="logo" />
        </div>
        <div className="slide">
          <img src="images/KFC.png" alt="logo" />
        </div>
        <div className="slide">
          <img src="images/youtube.png" alt="logo" />
        </div>
      </section>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
    <button className="secondary-button">
      Let's Get Started <FiArrowRight />
    </button>
  </div>
    </div>
  );
};

export default Partners;

