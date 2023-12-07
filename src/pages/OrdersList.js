import React from 'react'
import TableAdmin from '../components/Admin/TableAdmin'
import Sidebar from '../components/Admin/SideBar'

const OrdersList = () => {
  return (
    <div className="listConsumer">
      <Sidebar/>
      <div className="listContainerConsumer">
        <h1 className="headerConsumer">Food Orders Details</h1>
        <TableAdmin/>
      </div>
    </div>
  )
}

export default OrdersList
