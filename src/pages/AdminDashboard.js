import React from 'react'
import "./AdminDashboard.css"
import Sidebar from '../components/SideBar'
import MainDashboard from '../components/MainDashboard'

function AdminDashboard() {
  return (
    <div className="adminDashboard">
      <div className="AppGlass">
        <Sidebar/>
        <MainDashboard/>
      </div>
    </div>
  )
}

export default AdminDashboard
