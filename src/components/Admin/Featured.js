import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Featured.css"
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";


const Featured = () => {
  const [totalOrdersToday, setTotalOrdersToday] = useState(0);
  const [lastWeekAmount, setLastWeekAmount] = useState(0);
  const [lastMonthAmount, setLastMonthAmount] = useState(0);
  const percentage = totalOrdersToday ? (totalOrdersToday / 100) * 100 : 0;
  const url = "http://localhost:8080/api/"
  useEffect(() => {
    axios.get('url')
      .then((response) => {
        setTotalOrdersToday(response.data.totalOrdersToday);
        setLastWeekAmount(response.data.lastWeekAmount);
        setLastMonthAmount(response.data.lastMonthAmount);
      })
      .catch((error) => {
        console.log("error fetching data")
      })
  }, []);
  return (
    <div className="featured">
      <div className="top">
        <h1 className="titleTop">Total Orders</h1>
       
        </div>
        <div className="bottom">
           <div className="featuredChart">
           <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
            </div> 
            <p className="titleBottom">Total orders made today</p>
        <p className="amount">{totalOrdersToday}</p>
       
        <div className="summary">
         
           
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">{lastWeekAmount}</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">{lastMonthAmount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Featured
