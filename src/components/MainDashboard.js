import React from 'react'
import "./MainDashboard.css"
import CardAdmin from"./CardAdmin.js"
import Featured from "./Featured.js"
import Chart from './Chart.js'
function MainDashboard() {
  return (
    <div className="homeContainer">
     
      <div className="widgets">
        <CardAdmin type="Consumers"/>
        <CardAdmin type="Businesses"/>
        <CardAdmin type="Orders"/>
       
      </div>
      <div className="charts">
        <Featured/>
        <Chart/>
      </div>
      <div className="listContainer">
        <div className="listTitle">
          Latest Transactions
        </div>
      </div>
    </div>
  )
}

export default MainDashboard
