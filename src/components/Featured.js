import React from 'react'
import "./Featured.css"
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";


const Featured = () => {
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
        <p className="amount">(number of orders here)</p>
       
        <div className="summary">
         
           
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Featured
