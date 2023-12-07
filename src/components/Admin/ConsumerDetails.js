import React from 'react'
import SideBar from './SideBar.js'
import "./ConsumerDetails.css"
import Chart from "./Chart.js"
const ConsumerDetails = () => {
  return (
    
    <div className="single">
        <SideBar/>
    <div className="singleContainer">
      <div className="singleTop">
        <div className="singleLeft">
          <div className="editButton">
            Edit
          </div>
        <h1 className="titleSingle">Information</h1>
        <div className="singleItem">
          <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="itemImg"/>
         <div className="singleDetails">
          <h1 className="itemTitle">Jane Doe</h1>
          <div className="detailItem">
          <span className="itemKey">Email:</span>
          <span className="itemValue">janedoe@gmail.com:</span>
          </div>

          <div className="detailItem">
          <span className="itemKey">Phone:</span>
          <span className="itemValue">+1 2345 67 89</span>
          </div>
          <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
         </div>
        </div>
        </div>
        <div className="singleRight">
         <Chart aspect={3/1} title = "User Spending (Last 6 months)"/>
        </div>
      </div>
        
    </div>
      
    </div>
  )
}

export default ConsumerDetails;
