import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"; // Import the specific icons
import {
  faSquareFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <h3>Waffer</h3>
        <p className="footer-website-name">
          Copyright @ 2023<strong> Waffer</strong> All rights reserved
        </p>
      </div>
      <div className="footer-center">
        <div>
          <FontAwesomeIcon icon={faLocationDot} />
          <p>Online,Based in Tunisia</p>
        </div>
        <hr />
        <div>
          <FontAwesomeIcon icon={faPhone} />
          <p>+21639058676</p>
        </div>
        <hr />
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          <p>waffer@gmail.com</p>
        </div>
      </div>
      <div className="footer-right">
        <p>Coming Soon On</p>
        <div className="iconsFooter">
          <FontAwesomeIcon icon={faSquareFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </div>
    </div>
  );
};

export default Footer;