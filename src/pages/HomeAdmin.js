import React from 'react'
import Sidebar from '../components/Admin/SideBar'
import MainDashboard from '../components/Admin/MainDashboard'
import "./HomeAdmin.css"


const HomeAdmin = () => {
  return (
    <div className="HomeAdmin">
     
      
        <Sidebar/>
     <MainDashboard/>
     
  
    </div>
  )
}

export default HomeAdmin
