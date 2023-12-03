import React from 'react'
import "./CardAdmin.css"

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import {Link } from "react-router-dom"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function CardAdmin({type}) {
  let data;
  const amount = 100;

  switch (type) {
    case "Consumers":
      data = {
        title: "Consumers",
        linkName: "See all consumers",
        link:"/ConsumerList",
        count: "consumerCount",

        icon: (
          <PersonOutlinedIcon
            className="iconMainDash"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "Businesses":
      data = {
        title: "Businesses",
        link:"/BusinessList",
        isMoney: false,
        linkName: "See all Businesses",
        icon: (
          <ShoppingCartOutlinedIcon
            className="iconMainDash"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "Orders":
      data = {
        title: "Offers",
        isMoney: false,
        link: "View all offers",
        linkName: "See all offers",
        icon: (
          <ShoppingCartOutlinedIcon
            className="iconMainDash"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
 
  }


  return (
    <div>
      <div className="widget">
        <div className="leftCard">
            <span className="titleCard">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <Link to={data.link}  style={{textDecoration:"none",color: "inherit"}} className="link">{data.linkName}</Link>
        
        </div>
        <div className="rightCard">
            
            {data.icon}
        </div>
      </div>
    </div>
  )
}

export default CardAdmin
