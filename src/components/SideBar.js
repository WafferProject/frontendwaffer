import React, { useState } from "react";

import WafferLogo from "../images/WafferLogo.png";
import { UilSignOutAlt, UilBars,UilTimes  } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
 
} from "@iconscout/react-unicons";
import "./SideBar.css"
const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const SidebarData = [
    {
      icon: UilEstate,
      heading: "Dashboard",
    },
    {
      icon: UilClipboardAlt,
      heading: "Orders",
    },
    {
      icon: UilUsersAlt,
      heading: "Consumers",
    },
    {
      icon: UilUsersAlt,
      heading: "Businesses",
    },
    {
      icon: UilSignOutAlt,
      heading: "Sign Out",
    },
  ];

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
};

  return (
    <>
       <div className="navbar-toggle" onClick={handleMobileMenuToggle}>
                {mobileMenuOpen ? <UilTimes /> : <UilBars />}
            </div>
      <div className={`sidebar ${mobileMenuOpen ? "mobile-open":" "}`}>
      
        {/* logo */}
        <div className="logo">
          <img src={WafferLogo} alt="logo" />
          
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
        </div>
        </div>
    </>
  );
};

export default Sidebar;
