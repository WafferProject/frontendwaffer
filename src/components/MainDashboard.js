import React from 'react'
import "./MainDashboard.css"
import CardDashboard from './CardDashboard';
function MainDashboard() {
  return (
    
        <div className="MainDash">
      <h1>Dashboard</h1>
      <div className="widgets">
          <CardDashboard type="user" />
          <CardDashboard type="order" />
        
        </div>

    </div>
    
  )
}

export default MainDashboard;
