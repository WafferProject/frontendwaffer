import React from 'react'
import WafferLogo from '../images/WafferLogo.png';
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import InventoryIcon from '@mui/icons-material/Inventory';
import "./SideBar.css"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="top">  
       
                          
        <div className="logo"><img src={WafferLogo} alt="Waffer Logo" /></div>
        </div>
        <hr className="separator"/>
        <div className="centerDash">
          <ul className="sidebarLinks">
          <p className="titleDash">Main</p>
            <li className="links"> 
            <DashboardIcon className="iconDash" />
              <span className="sideBarHeader"> Dashboard</span>
            </li>
            <p className="titleDash">Lists</p>
            <li className="links"> 
            <PersonOutlineIcon className="iconDash" />
            <span className="sideBarHeader"> Consumers</span>
            </li>  
            <li className="links"> 
            <PersonOutlineIcon className="iconDash" />
            <span className="sideBarHeader"> Businesses</span>
            </li>  
            <li className="links"> 
              <InventoryIcon className="iconDash"/>
              <span className="sideBarHeader"> Orders</span>
            </li>  
            {/* <li className="links"> 
            <SettingsApplicationsIcon className="iconDash" />
            <span className="sideBarHeader">Settings</span>
          </li> */}
         
          
          <p className="titleDash">User</p>
          <li className="links"> 
            <AccountCircleOutlinedIcon className="iconDash" />
            <span className="sideBarHeader"> Profile</span>
            </li>  
            <li className="links"> 
            <ExitToAppIcon className="iconDash" />
              <span className="sideBarHeader"> Logout</span>
            </li>
            </ul>
          </div>
          
      
    </div>
  )
}
