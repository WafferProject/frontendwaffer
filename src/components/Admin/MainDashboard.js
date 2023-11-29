import React from 'react'
import "./MainDashboard.css"
import CardAdmin from"./CardAdmin.js"
import Featured from "../Featured.js"
import Chart from './Chart.js'
import TableAdmin from './TableAdmin.js'

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
        <Chart aspect = {2/1} title="Last 6 months (orders)"/>
      </div>
      <div className="listContainer">
        <div className="listTitle">
          Latest Transactions
        </div>
        <TableAdmin/>
      </div>
    </div>
  )
}

export default MainDashboard
