import React from 'react'
import WafferLogo from '../../images/WafferLogo.png';
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import InventoryIcon from '@mui/icons-material/Inventory';
import "./SideBar.css"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {Link } from "react-router-dom"

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="top">  
       <Link to="/admin">
       <div className="logo"><img src={WafferLogo} alt="Waffer Logo" /></div>
       </Link>
                          
        
        </div>
        <hr className="separator"/>
        <div className="centerDash">
          <ul className="sidebarLinks">
          <p className="titleDash">Main</p>
          <Link to="/admin" style={{textDecoration:"none",color: "inherit"}}>
            <li className="links"> 
            <DashboardIcon className="iconDash" />
              <span className="sideBarHeader"> Dashboard</span>
            </li>
            </Link>
            <p className="titleDash">Lists</p>
            <Link to="/ConsumerList" style={{textDecoration:"none",color: "inherit"}}>
            <li className="links"> 
            <PersonOutlineIcon className="iconDash" />
            <span className="sideBarHeader"> Consumers</span>
            </li>  
            </Link>
            <Link to="/BusinessList" style={{textDecoration:"none",color: "inherit"}}>
            <li className="links"> 
            <PersonOutlineIcon className="iconDash" />
            <span className="sideBarHeader"> Businesses</span>
            </li>  
            </Link>
            <Link to="/OrdersList" style={{textDecoration:"none",color: "inherit"}}>
            <li className="links"> 
              <InventoryIcon className="iconDash"/>
              <span className="sideBarHeader"> Orders</span>
            </li>  
            </Link>
         
          
          <p className="titleDash">User</p>
          <Link to="/settings" style={{textDecoration:"none",color: "inherit"}}>
          <li className="links"> 
            <AccountCircleOutlinedIcon className="iconDash" />
            <span className="sideBarHeader"> Profile</span>
            </li>
            </Link>  
            <li className="links"> 
            <ExitToAppIcon className="iconDash" />
              <span className="sideBarHeader"> Logout</span>
            </li>
            </ul>
          </div>
          
      
    </div>
  )
}
