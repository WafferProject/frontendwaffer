import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./CardAdmin.css"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import {Link } from "react-router-dom"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function CardAdmin({type}) {
  let data;
  const [amount, setAmount] = useState(0);

  const url = `http://localhost:8080/api/${type}`;
  useEffect(() => {

     
        // Make an API call to fetch the real-time data based on the type
        axios
        .get(url)
        .then((response)=>{
          setAmount(response.data.amount);
        })
        .catch((error)=>{
          console.log("error fetching data")
        })
        
       
   
  }, [type]);

  switch (type) {
    case "Consumers":
      data = {
        title: "Consumers",
        linkName: "See all consumers",
        link:"/ConsumerList",
        

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
    
  }


  return (
    <div>
      <div className="widget">
        <div className="leftCard">
            <span className="titleCard">{data.title}</span>
            <span className="counter"> {amount}</span>
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
